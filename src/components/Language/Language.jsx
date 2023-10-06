import React, { useState } from "react";
import styles from "./Language.module.scss";
import USFlag from "../../assets/SVG/US.svg";
import Select from "../../Shared UI/Select/Select";
import RUFlag from "../../assets/SVG/RUFLAG.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { title: "English", value: "English", icon: USFlag, local: "en" },
  { title: "Русский", value: "Русский", icon: RUFlag, local: "ru" },
];

const MOBILE_LANGUAGES = [
  { title: "ENG", value: "English", icon: USFlag, local: "en" },
  { title: "РУС", value: "Русский", icon: RUFlag, local: "ru" },
];

const Language = () => {
  const { t, i18n } = useTranslation();
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1024;
  const languages = isDesktop ? LANGUAGES : MOBILE_LANGUAGES;
  const [language, setLanguage] = useState(languages[0].value);

  const handleLanguageSelect = (value) => {
    let translationLocal;
    setLanguage(value);

    if (value === "Русский") {
      translationLocal = "ru";
    }
    if (value === "English") {
      translationLocal = "en";
    }

    i18n.changeLanguage(translationLocal);
  };

  const selectedLanguage = languages.find((item) => item.value === language);

  return (
    <div className={styles["language"]}>
      <Select
        options={languages}
        selected={selectedLanguage}
        onChange={handleLanguageSelect}
      />
    </div>
  );
};

export default Language;
