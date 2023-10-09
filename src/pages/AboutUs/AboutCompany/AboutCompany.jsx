import React from "react";
import Image from "../../../assets/images/about-us.webp";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./AboutCompany.module.scss";
import { Trans, useTranslation } from "react-i18next";

const AboutCompany = () => {
  const { t } = useTranslation("about-us");

  return (
    <div className={styles["about-company"]}>
      <SectionLayout
        image={Image}
        titleText={t("about_us.title")}
        labelText={t("about_us.label")}
        description={
          <Trans
            i18nKey={t("about_us.description")}
            t={t}
            components={[<p />]}
          />
        }
      />
    </div>
  );
};

export default AboutCompany;
