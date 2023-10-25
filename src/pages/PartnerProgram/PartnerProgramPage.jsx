import React from "react";
import styles from "./PartnerProgramPage.module.scss";
import Main from "./Main/Main";
import WhatIs from "./WhatIs/WhatIs";
import HowDoesItWork from "./HowDoesItWork/HowDoesItWork";
import HowToGetStarted from "./HowToGetStarted/HowToGetStarted";
import { ScrollRestoration } from "react-router-dom";
import Structure from "./Structure/Structure";

const PartnerProgramPage = () => {
  return (
    <div className={styles["partner-program"]}>
      <Main />
      <WhatIs />
      <Structure />
      <HowDoesItWork />
      <HowToGetStarted />
      <ScrollRestoration />
    </div>
  );
};

export default PartnerProgramPage;
