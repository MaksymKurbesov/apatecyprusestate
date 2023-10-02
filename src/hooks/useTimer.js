import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (deadline, interval = SECOND) => {
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan(new Date(deadline) - Date.now());
    }, interval);

    if (Math.floor(timespan / HOUR) > 23) {
      setHours(Math.floor(timespan / HOUR));
    } else {
      setHours(Math.floor(timespan / HOUR) % 24);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline, interval]);

  useEffect(() => {
    setTimespan(new Date(deadline) - Date.now());
  }, [deadline]);

  return {
    days: `${Math.floor(timespan / DAY)}`,
    hours: `${hours || 0}`,
    minutes: `${Math.floor((timespan / MINUTE) % 60) || 0}`,
    seconds: `${Math.floor((timespan / SECOND) % 60) || 0}`,
  };
};
