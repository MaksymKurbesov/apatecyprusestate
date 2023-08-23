import React from "react";
import Image from "../../../../assets/images/partner-program.png";
import SectionLayout from "../../../../Shared UI/SectionLayout/SectionLayout";

const HowToGetStarted = () => {
  return (
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
      marginBot={150}
    />
  );
};

export default HowToGetStarted;
