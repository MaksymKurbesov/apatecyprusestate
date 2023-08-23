import React, { useRef, useState } from "react";
import styles from "./AccordionItem.module.scss";
import { ReactComponent as ChevronDown } from "../../../assets/SVG/chevron-down.svg";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentEl = useRef();

  return (
    <li
      onClick={() => setIsOpen(!isOpen)}
      className={`${styles["accordion-item"]}`}
      style={
        isOpen
          ? { height: contentEl.current?.scrollHeight + 85 }
          : { height: "65px" }
      }
    >
      <div className={styles["title"]}>{title}</div>
      <div ref={contentEl} className={styles["content"]}>
        <div>{content}</div>
      </div>
      <ChevronDown
        className={`${styles["chevron"]} ${isOpen ? styles["isOpen"] : ""}`}
      />
    </li>
  );
};

export default AccordionItem;
