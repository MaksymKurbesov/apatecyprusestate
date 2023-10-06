import React, { useCallback, useState } from "react";
import styles from "./AccordionItem.module.scss";
import { ReactComponent as ChevronDown } from "../../../assets/SVG/chevron-down.svg";

const AccordionItem = ({ title, content, className, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [titleHeight, setTitleHeight] = useState(null);
  const [contentHeight, setContentHeight] = useState();

  const titleHeightRef = useCallback(
    (node) => {
      if (node === null) return;

      const height = node.getBoundingClientRect().height;

      setTitleHeight(height);
    },
    [title]
  );

  const contentHeightRef = useCallback(
    (node) => {
      if (node === null) return;

      setTimeout(() => {
        const height = node.getBoundingClientRect().height;

        setContentHeight(height + titleHeight);
      }, 500);
    },
    [titleHeight]
  );

  return (
    <>
      {className === "levels" && (
        <span className={styles["level-label"]}>Level {index + 1}</span>
      )}
      <li
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles["accordion-item"]}`}
        style={isOpen ? { height: contentHeight } : { height: titleHeight }}
      >
        <div ref={titleHeightRef} className={styles["title"]}>
          {title}
        </div>
        <div
          ref={contentHeightRef}
          className={`${styles["content"]} ${styles[className]}`}
        >
          <div>{content}</div>
        </div>
        <ChevronDown
          style={{ top: titleHeight / 2 }}
          className={`${styles["chevron"]} ${isOpen ? styles["isOpen"] : ""}`}
        />
      </li>
    </>
  );
};

export default AccordionItem;
