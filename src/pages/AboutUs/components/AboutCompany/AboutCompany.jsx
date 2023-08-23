import React from "react";
import Image from "../../../../assets/images/partner-program.png";
import SectionLayout from "../../../../Shared UI/SectionLayout/SectionLayout";

const AboutCompany = () => {
  return (
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
      marginBot={120}
    />
  );
};

export default AboutCompany;
