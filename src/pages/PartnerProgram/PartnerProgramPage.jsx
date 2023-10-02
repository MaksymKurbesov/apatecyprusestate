import React from "react";
import styles from "./PartnerProgramPage.module.scss";
import Main from "./Main/Main";
import WhatIs from "./WhatIs/WhatIs";
import HowDoesItWork from "./HowDoesItWork/HowDoesItWork";
import HowToGetStarted from "./HowToGetStarted/HowToGetStarted";
import { ScrollRestoration } from "react-router-dom";

const PartnerProgramPage = () => {
  return (
    <div className={styles["partner-program"]}>
      <Main />
      <WhatIs />
      <HowDoesItWork />
      <HowToGetStarted />
      <ScrollRestoration />
    </div>
  );
};

export default PartnerProgramPage;
