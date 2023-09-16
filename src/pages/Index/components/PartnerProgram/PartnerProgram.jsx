import React from "react";
import Image from "../../../../../assets/images/partner-program-percentage.svg";
import SectionLayout from "../../../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./PartnerProgram.module.scss";

const PartnerProgram = () => {
  return (
    <div className={styles["partner-program"]}>
      <SectionLayout
        image={Image}
        labelText={"Partner Program"}
        titleText={"TRUST INVESTMENT has developed"}
        description={
          "a multi-level referral programme especially for our clients. Every " +
          "client of our company can take part in this programme by registering " +
          "on our online platform and placing at least one own deposit."
        }
        marginBot={100}
      />
    </div>
  );
};

export default PartnerProgram;
