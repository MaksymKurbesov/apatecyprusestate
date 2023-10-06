import React from "react";
import Image from "../../../assets/images/what-is-it.webp";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./WhatIs.module.scss";
import { useTranslation } from "react-i18next";

const WhatIs = () => {
  const { t } = useTranslation("partners-program");

  return (
    <div className={styles["what-is"]}>
      <SectionLayout
        image={Image}
        labelText={t("what_is.label")}
        titleText={t("what_is.title")}
        description={<p>{t("what_is.description")}</p>}
        direction={"right"}
      />
    </div>
  );
};

export default WhatIs;
