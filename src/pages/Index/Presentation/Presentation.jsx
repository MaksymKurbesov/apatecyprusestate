import React from "react";
import styles from "./Presentation.module.scss";
import Title from "../../../Shared UI/Title/Title";
import MacbookImage from "../../../assets/images/Macbook-Air-_2022_.webp";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();

  return (
    <section className={styles["presentation"]}>
      <div className={"container"}>
        <div className={`${styles["presentation-wrapper"]}`}>
          <div className={styles["information"]}>
            <Title text={t("presentation.title")} />
            <p data-aos={"fade-right"}>{t("presentation.subtitle")}</p>
          </div>
          <div
            className={styles["macbook"]}
            data-aos={"fade-in"}
            data-aos-offset={300}
          >
            <div className={styles["iframe-wrapper"]}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZH_3LT01z5A"
              ></iframe>
            </div>
            <img
              src={MacbookImage}
              alt={"Macbook"}
              // className={styles["macbook"]}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
