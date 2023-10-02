import React from "react";
import Statistic from "./Statistic/Statistic";
import AboutCompany from "./AboutCompany/AboutCompany";
import OurTeam from "./OurTeam/OurTeam";
import WhatDoWeDoBanner from "./WhatDoWeDoBanner/WhatDoWeDoBanner";
import OurValues from "./OurValues/OurValues";
import styles from "./AboutUsPage.module.scss";
import { ScrollRestoration } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className={styles["about-us"]}>
      <AboutCompany />
      <Statistic />
      <OurValues />
      <WhatDoWeDoBanner />
      <OurTeam />
      <ScrollRestoration />
    </div>
  );
};

export default AboutUsPage;
