import React from "react";
import Icon1 from "../../../assets/SVG/1 benefit icon.svg";
import Icon2 from "../../../assets/SVG/2 benefit icon.svg";
import Icon3 from "../../../assets/SVG/3 benefit icon.svg";
import Icon4 from "../../../assets/SVG/4 benefit icon.svg";
import Icon5 from "../../../assets/SVG/5 benefit icon.svg";
import Icon6 from "../../../assets/SVG/6 benefit icon.svg";
import styles from "./JobBenefits.module.scss";
import Title from "../../../Shared UI/Title/Title";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";
import { useTranslation } from "react-i18next";

const BENEFIT_ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];

const JobBenefits = () => {
  const { t } = useTranslation();

  return (
    <section className={styles["job-benefits"]}>
      <div className={"container"}>
        <SectionLabel text={t("why_we.why_we")} style={{ marginBottom: 30 }} />
        <Title text={t("why_we.job_benefits")} />
        <ul className={styles["benefits-list"]}>
          {BENEFIT_ICONS.map((icon, index) => {
            return (
              <li
                data-aos={"fade-right"}
                data-aos-delay={200 * index}
                data-aos-offset={-50}
                key={index}
                className={styles["benefit"]}
              >
                <div className={styles["icon"]}>
                  <img src={icon} alt={"Icon"} />
                </div>

                <h4>{t(`why_we.${index + 1}.title`)}</h4>
                <p>{t(`why_we.${index + 1}.description`)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default JobBenefits;
