import React from "react";
import styles from "./IndexPage.module.scss";
import JobBenefits from "./components/JobBenefits/JobBenefits";
import PartnerProgram from "./components/PartnerProgram/PartnerProgram";
import TariffPlans from "./components/TariffPlans/TariffPlans";
import Main from "./components/Main/Main";
import Presentation from "./components/Presentation/Presentation";
import ContactForm from "./components/ContactForm/ContactForm";

const IndexPage = () => {
  return (
    <div className={styles["index-page"]}>
      <Main />
      <JobBenefits />
      <PartnerProgram />
      <TariffPlans />
      <Presentation />
      <ContactForm />
    </div>
  );
};

export default IndexPage;
