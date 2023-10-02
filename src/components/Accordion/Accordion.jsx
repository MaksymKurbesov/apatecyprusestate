import React from "react";
import AccordionItem from "./AccordionItem/AccordionItem";
import style from "./Accordion.module.scss";

const Accordion = ({ data, className }) => {
  return (
    <ul className={style["accordion"]}>
      {data.map(({ title, content }, index) => {
        return (
          <AccordionItem
            title={title}
            content={content}
            key={index}
            className={className}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
