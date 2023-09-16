import React from "react";
import Main from "./components/Main/Main";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import OurTeam from "./components/OurTeam/OurTeam";
import WhatDoWeDoBanner from "./components/WhatDoWeDoBanner/WhatDoWeDoBanner";
import WhatDoWeDo from "./components/WhatDoWeDo/WhatDoWeDo";
import styles from "./AboutUsPage.module.scss";
import { ScrollRestoration } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className={styles["about-us"]}>
      <Main />
      <AboutCompany />
      <OurTeam />
      <WhatDoWeDoBanner />
      <WhatDoWeDo />
      <ScrollRestoration />
    </div>
  );
};

export default AboutUsPage;
