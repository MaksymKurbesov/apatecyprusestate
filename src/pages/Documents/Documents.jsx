import React from "react";
import styles from "./Documents.module.scss";
import { ReactComponent as PDFIcon } from "../../assets/SVG/PDF.svg";
import { ReactComponent as DOCXIcon } from "../../assets/SVG/DOCX.svg";
import { Link, NavLink, ScrollRestoration } from "react-router-dom";
import License from "../../utils/LICENSE FROM CYPRUS SECURITIES AND EXCHANGE COMMISSION (CYSEC).pdf";
import { useTranslation } from "react-i18next";

const Documents = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["documents-wrapper"]}>
      <div className={"container"}>
        <div className={styles["header"]}>
          <h1>{t("documents.title")}</h1>
          <p>{t("documents.subtitle")}</p>
          <NavLink
            to={"/terms-of-use"}
            className={`${styles["terms-of-use"]} button`}
          >
            {t("documents.terms")}
          </NavLink>
        </div>

        <div className={styles["documents"]}>
          <div className={`${styles["document"]} custom-border`}>
            <PDFIcon width={60} height={60} />
            <h3>{t("documents.activities")}</h3>
            <p>{t("documents.authorization")}</p>
            <Link to={License} target="_blank" className={"button"}>
              {t("documents.download")}
            </Link>
          </div>
          <div className={`${styles["document"]} custom-border`}>
            <DOCXIcon width={60} height={60} />
            <h3>Consent Form</h3>
            <p>CONSENT FORM ON PERSONAL DATA PROCESSING</p>
            <Link
              to="/files/CONSENT-FORM-ON-PERSONAL-DATA-PROCESSING.docx"
              target="_blank"
              download
              className={"button"}
            >
              {t("documents.download")}
            </Link>
          </div>
          <div className={`${styles["document"]} custom-border`}>
            <DOCXIcon width={60} height={60} />
            <h3>Clarification Text</h3>
            <p>CLARIFICATION TEXT ON PERSONAL DATA PROCESSING</p>
            <Link
              to="/files/CLARIFICATION-TEXT- Λευκωσία.docx"
              target="_blank"
              download
              className={"button"}
            >
              {t("documents.download")}
            </Link>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Documents;
