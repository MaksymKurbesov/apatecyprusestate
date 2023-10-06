import React from "react";
import Image from "../../../assets/images/what-do-we-do.webp";
import styles from "./WhatDoWeDoBanner.module.scss";
import Title from "../../../Shared UI/Title/Title";
import { useTranslation } from "react-i18next";

const WhatDoWeDoBanner = () => {
  const { t } = useTranslation("about-us");

  return (
    <section className={styles["what-do-we-do"]}>
      <img src={Image} alt={"Decorate"} width={744} />
      <div className={styles["text"]}>
        <Title text={t("banner.title")} />
        <p>{t("banner.description")}</p>
      </div>
    </section>
  );
};

export default WhatDoWeDoBanner;
