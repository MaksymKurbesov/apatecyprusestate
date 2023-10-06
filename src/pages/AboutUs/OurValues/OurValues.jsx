import React from "react";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import Image from "../../../assets/images/what-do-we-do2.webp";
import styles from "./OurValues.module.scss";
import { Trans, useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation("about-us");

  return (
    <div className={styles["what-we-do"]}>
      <SectionLayout
        image={Image}
        labelText={t("ethic.label")}
        titleText={t("ethic.title")}
        description={
          <Trans i18nKey={t("ethic.description")} components={[<p />]} />
        }
        direction={"right"}
      />
    </div>
  );
};

export default OurValues;
