import type { SnowReport } from '@/lib/snow-report';

type SnowReportStatsProps = {
  report: SnowReport;
};

export function SnowReportStats({ report }: SnowReportStatsProps) {
  const tempColor =
    report.tempF <= 28
      ? 'text-blue-500'
      : report.tempF <= 32
        ? 'text-sky-400'
        : 'text-orange-400';

  return (
    <div className='flex items-center gap-3 text-sm font-normal text-gray-500 dark:text-gray-400'>
      <span className='hidden sm:inline'>
        {report.newSnow24hIn}&Prime;
        <span className='text-xs'> 24h</span>
      </span>
      <span className='hidden sm:inline'>
        {report.newSnow48hIn}&Prime;
        <span className='text-xs'> 48h</span>
      </span>
      <span>
        {report.snowDepthIn}&Prime;
        <span className='text-xs'> base</span>
      </span>
      <span className={tempColor}>{report.tempF}°F</span>
    </div>
  );
}
