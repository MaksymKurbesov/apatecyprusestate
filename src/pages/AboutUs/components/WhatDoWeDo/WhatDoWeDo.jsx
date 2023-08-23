import React from "react";
import SectionLayout from "../../../../Shared UI/SectionLayout/SectionLayout";
import Image from "../../../../assets/images/partner-program.png";

const WhatDoWeDo = () => {
  return (
    <SectionLayout
      image={Image}
      labelText={"Trust Investment"}
      titleText={"What do we do?"}
      description={
        "Slightly less significant is the sale and lease of space for cafes, " +
        "bars and restaurants in tourist locations in the UAE. We are also buying " +
        "up properties on the secondary market, renovating them and reselling them afterwards. " +
        "Since 2020 Trust Investment has established a programme to raise investment from the " +
        "corporate sector. In 2022, as part of the planned development of investment and construction " +
        "activities, our company opened an online area to attract investment from the private sector."
      }
      marginBot={120}
      direction={"right"}
    />
  );
};

export default WhatDoWeDo;
