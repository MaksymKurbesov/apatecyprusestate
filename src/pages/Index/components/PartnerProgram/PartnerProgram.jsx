import React from "react";
import Image from "../../../../assets/images/partner-program.png";
import SectionLayout from "../../../../Shared UI/SectionLayout/SectionLayout";

const PartnerProgram = () => {
  return (
    <SectionLayout
      image={Image}
      labelText={"Partner Program"}
      titleText={"TRUST INVESTMENT has developed"}
      description={
        "a multi-level referral programme especially for our clients. Every " +
        "client of our company can take part in this programme by registering " +
        "on our online platform and placing at least one own deposit."
      }
      marginBot={150}
    />
  );
};

export default PartnerProgram;
