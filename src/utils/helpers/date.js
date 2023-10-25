import { Timestamp } from "firebase/firestore";

export const addDays = (date, days) => {
  const result = new Date(date.seconds * 1000);
  result.setDate(result.getDate() + days);

  return new Date(result.getTime());
};

export const daysPassedSince = (someDate) => {
  const now = new Date(Timestamp.now().seconds * 1000);
  const updatedSomeDate = new Date(someDate.seconds * 1000);

  const oneDayMilliseconds = 24 * 60 * 60 * 1000;

  const difference = now - updatedSomeDate;

  return Math.floor(difference / oneDayMilliseconds);
};

export const secondsToString = (seconds = Date.now(), isShort) => {
  if (seconds < 0) return "-" + secondsToString(-seconds);

  if (isShort) {
    return new Date(seconds * 1000).toLocaleDateString("ru-RU", {
      timeZone: "UTC",
      month: "short",
      day: "2-digit",
    });
  } else {
    return new Date(seconds * 1000).toLocaleDateString("ru-RU");
  }
};

export const getDateNow = () => {
  const date = new Date();
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - userTimezoneOffset).toLocaleDateString(
    "ru-RU"
  );
};
