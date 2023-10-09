import React, { useEffect, useState } from "react";
import styles from "./NextAccrual.module.scss";
import { ReactComponent as StarIcon } from "../../../../assets/SVG/star.svg";
import { useTimer } from "../../../../hooks/useTimer";
import { useTranslation } from "react-i18next";

const NextAccrual = ({ nearestAccrual = new Date(), days }) => {
  const { t } = useTranslation();
  const planWithOneAccrual = days <= 12;
  const [nearestAccrualByPlan, setNearestAccrualByPlan] = useState(null);
  const { hours, minutes, seconds } = useTimer(new Date(nearestAccrualByPlan));

  useEffect(() => {
    const endOfTermPlanDays = days * 24 * 60 * 60;
    const dailyPlanDays = 24 * 60 * 60;

    if (planWithOneAccrual) {
      setNearestAccrualByPlan(
        (nearestAccrual.seconds + endOfTermPlanDays) * 1000
      );
    } else {
      setNearestAccrualByPlan((nearestAccrual.seconds + dailyPlanDays) * 1000);
    }
  }, []);

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
        <p className={styles["next-accrual-text"]}>
          <StarIcon />
          <span>{t("personal_area.next_accrual_will_be")}</span>
        </p>
        <p className={styles["subtext"]}>{t("personal_area.timer_slogan")}</p>
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
          <p>{t("personal_area.hours")}</p>
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

          <p>{t("personal_area.minutes")}</p>
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
          <p>{t("personal_area.seconds")}</p>
        </div>
      </div>
    </div>
  );
};

export default NextAccrual;
