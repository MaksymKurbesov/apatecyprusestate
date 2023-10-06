import React from "react";
import styles from "./UserStatistic.module.scss";

import { ReactComponent as InvestedIcon } from "../../../../assets/SVG/user statistic/invested.svg";
import { ReactComponent as EarnedIcon } from "../../../../assets/SVG/user statistic/earned.svg";
import { ReactComponent as WithdrawnIcon } from "../../../../assets/SVG/user statistic/withdrawn.svg";
import { ReactComponent as ReferralsIcon } from "../../../../assets/SVG/user statistic/referrals.svg";
import { useTranslation } from "react-i18next";

const UserStatistic = ({ statistic }) => {
  const { t } = useTranslation();
  const { invested, earned, withdrawn, referrals } = statistic;

  return (
    <ul className={styles["user-statistic-list"]}>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <InvestedIcon />
        <div className={styles["statistic-wrapper"]}>
          <p>{t("personal_area.invested")}</p>
          <span>{invested.toFixed(2)} USD</span>
        </div>
      </li>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <EarnedIcon />
        <div className={styles["statistic-wrapper"]}>
          <p>{t("personal_area.earned")}</p>
          <span>{earned.toFixed(2)} USD</span>
        </div>
      </li>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <WithdrawnIcon />
        <div className={styles["statistic-wrapper"]}>
          <p>{t("personal_area.withdrawn")}</p>
          <span>{withdrawn.toFixed(2)} USD</span>
        </div>
      </li>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <ReferralsIcon />
        <div className={styles["statistic-wrapper"]}>
          <p>{t("personal_area.referrals")}</p>
          <span>{referrals.toFixed(2)} USD</span>
        </div>
      </li>
    </ul>
  );
};

export default UserStatistic;
