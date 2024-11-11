import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const timeStringOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  // timeZone: "America/Los_Angeles",
};
export const dateStringOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  // timeZone: "America/Los_Angeles",
};
export const dateTimeStringOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  // timeZone: "America/Los_Angeles",
};

export function degreeToDirection(degree: number) {
  if (degree < 0 || degree > 360) {
    return "NaN";
  }

  let direction;
  if (degree >= 0 && degree <= 11.25) {
    direction = "N";
  } else if (degree > 348.75 && degree <= 360) {
    direction = "N";
  } else if (degree > 11.25 && degree <= 33.75) {
    direction = "NNE";
  } else if (degree > 33.75 && degree <= 56.25) {
    direction = "NE";
  } else if (degree > 56.25 && degree <= 78.75) {
    direction = "ENE";
  } else if (degree > 78.75 && degree <= 101.25) {
    direction = "E";
  } else if (degree > 101.25 && degree <= 123.75) {
    direction = "ESE";
  } else if (degree > 123.75 && degree <= 146.25) {
    direction = "SE";
  } else if (degree > 146.25 && degree <= 168.75) {
    direction = "SSE";
  } else if (degree > 168.75 && degree <= 191.25) {
    direction = "S";
  } else if (degree > 191.25 && degree <= 213.75) {
    direction = "SSW";
  } else if (degree > 213.75 && degree <= 236.25) {
    direction = "SW";
  } else if (degree > 236.25 && degree <= 258.75) {
    direction = "WSW";
  } else if (degree > 258.75 && degree <= 281.25) {
    direction = "W";
  } else if (degree > 281.25 && degree <= 303.75) {
    direction = "WNW";
  } else if (degree > 303.75 && degree <= 326.25) {
    direction = "NW";
  } else if (degree > 326.25 && degree <= 348.75) {
    direction = "NNW";
  }

  return direction;
}
