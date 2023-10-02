import React, { useEffect } from "react";
import styles from "./NextAccrual.module.scss";
import { ReactComponent as StarIcon } from "../../../../assets/SVG/star.svg";
import { useTimer } from "../../../../hooks/useTimer";

const NextAccrual = ({ nearestAccrual = new Date(), days }) => {
  const planWithOneAccrual = days <= 12;
  let daysInSeconds;

  if (planWithOneAccrual) {
    daysInSeconds = days * 24 * 60 * 60;
  } else {
    daysInSeconds = 24 * 60 * 60;
  }

  const { hours, minutes, seconds } = useTimer(
    new Date((nearestAccrual.seconds + daysInSeconds) * 1000)
  );

  const threeDigitsHours = () => {
    if (hours > 24) {
      return (
        <>
          <span>{hours[0]}</span>
          <span>{hours[1]}</span>
          <span>{hours[2]}</span>
        </>
      );
    } else {
      return (
        <>
          <span>{hours[0]}</span>
          <span>{hours[1]}</span>
        </>
      );
    }
  };

  return (
    <div className={styles["next-accrual"]}>
      <div className={styles["text"]}>
        <div className={styles["new-update"]}>
          <StarIcon />
          <span>New update</span>
        </div>

        <p className={styles["next-accrual-text"]}>
          Следующее начисление через:
        </p>
        <p className={styles["subtext"]}>
          Пусть каждая секунда приближает вас к большему!
        </p>
      </div>
      <div className={styles["timer"]}>
        <div className={styles["hours"]}>
          {hours < 10 ? (
            <>
              <span>0</span>
              <span>{hours[0] !== "-" ? hours[0] : 0}</span>
            </>
          ) : (
            threeDigitsHours()
          )}
          <p>HOURS</p>
        </div>
        <div className={styles["minutes"]}>
          {minutes < 10 ? (
            <>
              <span>0</span>
              <span>{minutes[0] !== "-" ? minutes[0] : 0}</span>
            </>
          ) : (
            <>
              <span>{minutes[0]}</span>
              <span>{minutes[1]}</span>
            </>
          )}

          <p>MINUTES</p>
        </div>
        <div className={styles["seconds"]}>
          {seconds < 10 ? (
            <>
              <span>0</span>
              <span>{seconds[0] !== "-" ? seconds[0] : 0}</span>
            </>
          ) : (
            <>
              <span>{seconds[0]}</span>
              <span>{seconds[1]}</span>
            </>
          )}
          <p>SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default NextAccrual;
