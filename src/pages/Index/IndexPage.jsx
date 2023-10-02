import React from "react";
import styles from "./IndexPage.module.scss";
import JobBenefits from "./JobBenefits/JobBenefits";
import PartnerProgram from "./PartnerProgram/PartnerProgram";
import TariffPlans from "./TariffPlans/TariffPlans";
import Main from "./Main/Main";
import Presentation from "./Presentation/Presentation";
import ContactForm from "./ContactForm/ContactForm";
import { ScrollRestoration } from "react-router-dom";
import Roadmap from "./Roadmap/Roadmap";

const IndexPage = () => {
  return (
    <div className={styles["index-page"]}>
      <Main />
      <JobBenefits />
      <PartnerProgram />
      <TariffPlans />
      <Presentation />
      <Roadmap />
      <ContactForm />
      <ScrollRestoration />
    </div>
  );
};

export default IndexPage;
