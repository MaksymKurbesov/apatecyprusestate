import React, { useState } from "react";
import styles from "./Language.module.scss";
import USFlag from "../../assets/SVG/US.svg";
import Select from "../../Shared UI/Select/Select";
import RUFlag from "../../assets/SVG/RUFLAG.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const LANGUAGES = [
  { title: "English", value: "English", icon: USFlag },
  { title: "Русский", value: "Русский", icon: RUFlag },
];

const MOBILE_LANGUAGES = [
  { title: "ENG", value: "English", icon: USFlag },
  { title: "РУС", value: "Русский", icon: RUFlag },
];

const Language = () => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1024;
  const languages = isDesktop ? LANGUAGES : MOBILE_LANGUAGES;
  const [month, setMonthValue] = useState(languages[0].value);

  const handleMonthSelect = (value) => {
    setMonthValue(value);
  };
  const selectedMonth = languages.find((item) => item.value === month);

  return (
    <div className={styles["language"]}>
      <Select
        options={languages}
        selected={selectedMonth || null}
        onChange={handleMonthSelect}
      />
    </div>
  );
};

export default Language;
