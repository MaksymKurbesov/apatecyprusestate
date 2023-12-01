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
                title={"Youtube Presentation"}
                width="100%"
                height="100%"
                // src="https://www.youtube.com/embed/ZH_3LT01z5A"
                srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/ZH_3LT01z5A><img src=https://img.youtube.com/vi/ZH_3LT01z5A/hqdefault.jpg alt='AltTagContent'><span>▶</span></a>"
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
