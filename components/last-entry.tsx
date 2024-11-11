"use client";
import { dateStringOptions, dateTimeStringOptions } from "@/lib/utils";
import { Fragment } from "react";

const LastEntry = ({
  lastEntry,
  dateOnly = false,
}: {
  lastEntry?: number;
  dateOnly?: boolean;
}) => {
  if (!lastEntry) return "Last entry: NA";

  const lastUpdated = dateOnly
    ? new Date(lastEntry).toLocaleString(undefined, dateStringOptions)
    : new Date(lastEntry).toLocaleString(undefined, dateTimeStringOptions);

  return <Fragment>Last entry: {lastUpdated}</Fragment>;
};

export { LastEntry };
