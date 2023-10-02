import React from "react";
import styles from "./UserStatistic.module.scss";
import InvestedIcon from "../../../../assets/SVG/user statistic/invested.svg";
import EarnedIcon from "../../../../assets/SVG/user statistic/earned.svg";
import WithdrawnIcon from "../../../../assets/SVG/user statistic/withdrawn.svg";
import ReferralsIcon from "../../../../assets/SVG/user statistic/referrals.svg";

const UserStatistic = ({ statistic }) => {
  const { invested, earned, withdrawn, referrals } = statistic;

  return (
    <ul className={styles["user-statistic-list"]}>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <img src={InvestedIcon} alt={"invested"} />
        <div className={styles["statistic-wrapper"]}>
          <p>Invested</p>
          <span>{invested.toFixed(2)} USD</span>
        </div>
      </li>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <img src={EarnedIcon} alt={"earned"} />
        <div className={styles["statistic-wrapper"]}>
          <p>Earned</p>
          <span>{earned.toFixed(2)} USD</span>
        </div>
      </li>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <img src={WithdrawnIcon} alt={"withdrawn"} />
        <div className={styles["statistic-wrapper"]}>
          <p>Withdrawn</p>
          <span>{withdrawn.toFixed(2)} USD</span>
        </div>
      </li>
      <li className={`${styles["user-statistic"]} custom-bg custom-border`}>
        <img src={ReferralsIcon} alt={"referrals"} />
        <div className={styles["statistic-wrapper"]}>
          <p>Referrals</p>
          <span>{referrals.toFixed(2)} USD</span>
        </div>
      </li>
    </ul>
  );
};

export default UserStatistic;
