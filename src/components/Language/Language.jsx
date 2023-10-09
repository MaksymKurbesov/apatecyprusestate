import React, { useEffect, useState } from "react";
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
  const { i18n } = useTranslation();
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1024;
  const languages = isDesktop ? LANGUAGES : MOBILE_LANGUAGES;
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const userLng = localStorage.getItem("Language");
    const selectedUserLng = languages.find((item) => item.local === userLng);

    setLanguage(selectedUserLng);
  }, [languages]);

  const handleLanguageSelect = (value) => {
    const lng = languages.find((item) => item.value === value);
    setLanguage(lng);

    i18n.changeLanguage(lng.local);
  };

  return (
    <div className={styles["language"]}>
      <Select
        options={languages}
        selected={language}
        onChange={handleLanguageSelect}
      />
    </div>
  );
};

export default Language;
