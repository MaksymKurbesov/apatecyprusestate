import React from "react";
import styles from "./UserStatistic.module.scss";
import InvestedIcon from "../../../../assets/SVG/user statistic/invested.svg";
import EarnedIcon from "../../../../assets/SVG/user statistic/earned.svg";
import WithdrawnIcon from "../../../../assets/SVG/user statistic/withdrawn.svg";
import ReferralsIcon from "../../../../assets/SVG/user statistic/referrals.svg";

const UserStatistic = () => {
  return (
    <ul className={styles["user-statistic"]}>
      <li>
        <img src={InvestedIcon} alt={"invested"} />
        <p>Invested</p>
        <span>169791.5 USD</span>
      </li>
      <li>
        <img src={EarnedIcon} alt={"earned"} />
        <p>Earned</p>
        <span>169791.5 USD</span>
      </li>
      <li>
        <img src={WithdrawnIcon} alt={"withdrawn"} />
        <p>Withdrawn</p>
        <span>169791.5 USD</span>
      </li>
      <li>
        <img src={ReferralsIcon} alt={"referrals"} />
        <p>Referrals</p>
        <span>169791.5 USD</span>
      </li>
    </ul>
  );
};

export default UserStatistic;
