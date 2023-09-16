import React from "react";
import Image from "../../../../../assets/images/how-to-get-started.png";
import SectionLayout from "../../../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./HowToGetStarted.module.scss";

const HowToGetStarted = () => {
  return (
    <div className={styles["how-to-get-started"]}>
      <SectionLayout
        image={Image}
        labelText={"How to get started?"}
        titleText={
          "Your personal referral link can be found in your personal cabinet"
        }
        description={
          "Share this link with your friends and associates, and soon after your " +
          "referred participant makes a first deposit you will receive a reward " +
          "on your balance. The best part about it is that the program is tiered, " +
          "which means that you will even get profit from the people invited by " +
          "your referrals. Interest rate from the deposit of your invited " +
          "partners: 7% - 4% - 3% - 2% - 1%"
        }
      />
    </div>
  );
};

export default HowToGetStarted;
