import React from "react";
import styles from "./PartnerProgramPage.module.scss";
import Main from "./components/Main/Main";
import WhatIs from "./components/WhatIs/WhatIs";
import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork";
import HowToGetStarted from "./components/HowToGetStarted/HowToGetStarted";

const PartnerProgramPage = () => {
  return (
    <div className={styles["partner-program"]}>
      <Main />
      <WhatIs />
      <HowDoesItWork />
      <HowToGetStarted />
    </div>
  );
};

export default PartnerProgramPage;
