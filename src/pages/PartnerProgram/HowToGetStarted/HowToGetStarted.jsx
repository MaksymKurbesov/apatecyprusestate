import React from "react";
import Image from "../../../assets/images/how-to-get-started.webp";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./HowToGetStarted.module.scss";
import { useTranslation } from "react-i18next";

const HowToGetStarted = () => {
  const { t } = useTranslation("partners-program");

  return (
    <div className={styles["how-to-get-started"]}>
      <SectionLayout
        image={Image}
        labelText={t("how_it_works.label")}
        titleText={t("how_it_works.title")}
        description={<p>{t("how_it_works.description")}</p>}
      />
    </div>
  );
};

export default HowToGetStarted;
