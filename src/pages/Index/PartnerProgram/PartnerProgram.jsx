import React from "react";
import Image from "../../../assets/images/partner-program-percentage2.svg";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./PartnerProgram.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PartnerProgram = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["partner-program"]}>
      <SectionLayout
        image={Image}
        labelText={t("partner_program.partner_program")}
        titleText={t("partner_program.title")}
        description={
          <p data-aos={"fade-right"}>{t("partner_program.description")}</p>
        }
        moreInfoButton={
          <Link
            data-aos={"fade-right"}
            to={"/partner-program"}
            className={"button"}
          >
            {t("more")}
          </Link>
        }
      />
    </div>
  );
};

export default PartnerProgram;
