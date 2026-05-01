export type ResortKey = 'northstar' | 'heavenly' | 'kirkwood';

export type SnowReport = {
  snowDepthIn: number;
  sweIn: number;
  tempF: number;
  newSnow24hIn: number;
  newSnow48hIn: number;
  stationName: string;
  elevationFt: number;
  updatedAt: string;
};

type ResortConfig = {
  snotelTriplet: string;
  stationName: string;
  elevationFt: number;
  lat: number;
  lon: number;
};

type OpenMeteoResponse = {
  utc_offset_seconds: number;
  hourly: {
    time: string[];
    snowfall: (number | null)[];
  };
};

const RESORT_CONFIG: Record<ResortKey, ResortConfig> = {
  northstar: {
    snotelTriplet: '784:CA:SNTL',
    stationName: 'Palisades Tahoe',
    elevationFt: 8010,
    lat: 39.274,
    lon: -120.121,
  },
  heavenly: {
    snotelTriplet: '518:CA:SNTL',
    stationName: 'Heavenly Valley',
    elevationFt: 8540,
    lat: 38.935,
    lon: -119.940,
  },
  kirkwood: {
    snotelTriplet: '1067:CA:SNTL',
    stationName: 'Carson Pass',
    elevationFt: 8360,
    lat: 38.685,
    lon: -120.065,
  },
};

function buildSnotelUrl(triplet: string): string {
  // The NRCS server requires literal | chars in the path — do NOT use URL constructor
  const segment = `${triplet}|id=""|name`;
  return (
    `https://wcc.sc.egov.usda.gov/reportGenerator/view_csv/` +
    `customSingleStationReport/daily/start_of_period/` +
    `${segment}/-2,0/SNWD::value,WTEQ::value,TOBS::value`
  );
}

function buildOpenMeteoUrl(lat: number, lon: number): string {
  return (
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&hourly=snowfall` +
    `&past_days=2&forecast_days=1` +
    `&timezone=America%2FLos_Angeles` +
    `&precipitation_unit=inch`
  );
}

function parseSnotelCsv(csv: string): {
  date: string;
  snowDepthIn: number;
  sweIn: number;
  tempF: number;
} | null {
  const dataLines = csv
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^\d{4}-\d{2}-\d{2}/.test(line));

  if (dataLines.length === 0) return null;

  const lastLine = dataLines[dataLines.length - 1];
  const parts = lastLine.split(',');
  if (parts.length < 4) return null;

  const date = parts[0].trim();
  const snowDepthIn = parseFloat(parts[1]);
  const sweIn = parseFloat(parts[2]);
  const tempF = parseFloat(parts[3]);

  if (isNaN(snowDepthIn) || snowDepthIn < -50) return null;
  if (isNaN(sweIn) || sweIn < -50) return null;
  if (isNaN(tempF) || tempF < -150) return null;

  return { date, snowDepthIn, sweIn, tempF };
}

function offsetString(utcOffsetSeconds: number): string {
  const totalMinutes = Math.abs(utcOffsetSeconds) / 60;
  const h = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
  const m = (totalMinutes % 60).toString().padStart(2, '0');
  const sign = utcOffsetSeconds >= 0 ? '+' : '-';
  return `${sign}${h}:${m}`;
}

function sumNewSnow(
  times: string[],
  snowfall: (number | null)[],
  utcOffsetSeconds: number,
  hoursBack: number,
): number {
  const offset = offsetString(utcOffsetSeconds);
  const now = new Date();
  const cutoff = new Date(now.getTime() - hoursBack * 60 * 60 * 1000);

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    const slotTime = new Date(`${times[i]}:00${offset}`);
    if (slotTime >= cutoff && slotTime <= now) {
      const val = snowfall[i];
      if (val !== null && typeof val === 'number' && !isNaN(val)) {
        total += val;
      }
    }
  }
  return Math.round(total * 10) / 10;
}

export async function fetchSnowReport(resort: ResortKey): Promise<SnowReport | null> {
  const config = RESORT_CONFIG[resort];

  try {
    const [snotelRes, meteoRes] = await Promise.all([
      fetch(buildSnotelUrl(config.snotelTriplet), { next: { revalidate: 3600 } }),
      fetch(buildOpenMeteoUrl(config.lat, config.lon), { next: { revalidate: 3600 } }),
    ]);

    if (!snotelRes.ok || !meteoRes.ok) return null;

    const [csvText, meteoJson] = await Promise.all([
      snotelRes.text(),
      meteoRes.json() as Promise<OpenMeteoResponse>,
    ]);

    const snotel = parseSnotelCsv(csvText);
    if (!snotel) return null;

    const { time, snowfall } = meteoJson.hourly;
    const utcOffset = meteoJson.utc_offset_seconds;

    const newSnow24hIn = sumNewSnow(time, snowfall, utcOffset, 24);
    const newSnow48hIn = sumNewSnow(time, snowfall, utcOffset, 48);

    return {
      snowDepthIn: snotel.snowDepthIn,
      sweIn: snotel.sweIn,
      tempF: snotel.tempF,
      newSnow24hIn,
      newSnow48hIn,
      stationName: config.stationName,
      elevationFt: config.elevationFt,
      updatedAt: snotel.date,
    };
  } catch {
    return null;
  }
}
