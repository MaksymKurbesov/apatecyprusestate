import React from "react";
import Image from "../../../../assets/images/partner-program.png";
import SectionLayout from "../../../../Shared UI/SectionLayout/SectionLayout";

const WhatIs = () => {
  return (
    <SectionLayout
      image={Image}
      labelText={"What is it?"}
      titleText={
        "Trust Investment is constantly developing and making innovative decisions"
      }
      description={
        "that have a positive impact on all investors. Especially for our " +
        "clients, Trust Investment has developed a multi-level referral " +
        "program. Anyone who has registered on our online platform can join " +
        "this program. After registering with us, it will only take a couple of " +
        "clicks to start sharing your referral link with your friends and " +
        "earning a nice bonus from open deposits made by people you refer."
      }
      marginBot={150}
      direction={"right"}
    />
  );
};

export default WhatIs;
