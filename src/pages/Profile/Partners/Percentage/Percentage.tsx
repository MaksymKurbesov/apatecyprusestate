import React from "react";
import styles from "./Percentage.module.scss";
import { ReactComponent as ReferralLevels } from "../../../../assets/SVG/referral-levels.svg";

const Percentage = () => {
  return (
    <div className={`${styles["percentage"]} custom-bg custom-border`}>
      <ReferralLevels className={styles["referrals-levels"]} height={"100%"} />
    </div>
  );
};

export default Percentage;
