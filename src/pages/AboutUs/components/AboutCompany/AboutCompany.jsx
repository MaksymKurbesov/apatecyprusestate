import React from "react";
import Image from "../../../../../assets/images/about-us.png";
import SectionLayout from "../../../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./about-company.module.scss";

const AboutCompany = () => {
  return (
    <div className={styles["about-company"]}>
      <SectionLayout
        image={Image}
        labelText={"ABOUT COMPANY"}
        titleText={"About the company Trust Investment"}
        description={
          "TRUST INVESTMENT is a subsidiary company of the international holding Azizi Group, " +
          "founded in May 2013. The company combines several global directions at once: construction " +
          "of high-rise buildings with apartments, construction of villas, single-storey houses combined " +
          "into cottage settlements, sales and leasing department of commercial real estate, investment online platform."
        }
      />
    </div>
  );
};

export default AboutCompany;
