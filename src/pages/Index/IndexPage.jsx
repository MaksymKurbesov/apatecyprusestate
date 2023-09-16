import React, { useContext } from "react";
import styles from "./IndexPage.module.scss";
import JobBenefits from "./components/JobBenefits/JobBenefits";
import PartnerProgram from "./components/PartnerProgram/PartnerProgram";
import TariffPlans from "./components/TariffPlans/TariffPlans";
import Main from "./components/Main/Main";
import Presentation from "./components/Presentation/Presentation";
import ContactForm from "./components/ContactForm/ContactForm";
import { ScrollRestoration } from "react-router-dom";
import { FirebaseContext } from "../../../index";
import Roadmap from "./components/Roadmap/Roadmap";

const IndexPage = () => {
  const { db } = useContext(FirebaseContext);
  console.log(db, "db");

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
