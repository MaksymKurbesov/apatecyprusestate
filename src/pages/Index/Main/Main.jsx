import React from "react";
import styles from "./Main.module.scss";
import HeroImage from "../../../assets/images/hero-image.webp";
import { Trans, useTranslation } from "react-i18next";
import { STATISTIC } from "../../../utils/consts";

const Main = () => {
  const { t } = useTranslation();

  return (
    <section className={styles["main"]}>
      <div className={`${styles["main-wrapper"]} container`}>
        <h1 data-aos="fade-up" className={styles["title"]}>
          <Trans i18nKey="main_text" components={[<span />]} />
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className={styles["subtitle"]}
        >
          {t("main_subtitle")}
        </h2>

        <img
          data-aos="fade-in"
          data-aos-delay={200}
          className={styles["hero-image"]}
          src={HeroImage}
          alt={"hero-banner"}
          width={1024}
          height={558}
        />
        <ul
          data-aos={"fade-down"}
          data-aos-offset={-100}
          // data-aos-delay={300}
          className={styles["company-statistic"]}
        >
          {STATISTIC.map(({ count, title }, index) => {
            const isCapital = title === "Capital";
            const isROI = title === "ROI";

            let updatedCount;

            if (isCapital) updatedCount = `${count}${t("billion")}+`;
            if (isROI) updatedCount = `~${count}%`;

            return (
              <li
                data-aos={"fade-in"}
                data-aos-delay={200 * index}
                data-aos-offset={-100}
                key={title}
                className={styles["statistic"]}
              >
                <p>{updatedCount ? updatedCount : `${count}+`}</p>
                <span>{t(`user_statistic.${title}`)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
