import React, { useState } from "react";
import styles from "./Language.module.scss";
import USFlag from "../../assets/SVG/US.svg";
import Select from "../../Shared UI/Select/Select";

const LANGUAGES = [
  { title: "English", value: "English" },
  { title: "Русский", value: "Русский" },
];

const Language = () => {
  const [month, setMonthValue] = useState("English");
  const handleMonthSelect = (value) => {
    setMonthValue(value);
  };
  const selectedMonth = LANGUAGES.find((item) => item.value === month);

  return (
    <div className={styles["language"]}>
      <Select
        // mode="cells"
        options={LANGUAGES}
        selected={selectedMonth || null}
        onChange={handleMonthSelect}
      />
    </div>
  );
};

export default Language;
