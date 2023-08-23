import React from "react";
import AccordionItem from "./AccordionItem/AccordionItem";
import style from "./Accordion.module.scss";

const Accordion = ({ data }) => {
  return (
    <ul className={style["accordion"]}>
      {data.map(({ title, content }, index) => {
        return <AccordionItem title={title} content={content} key={index} />;
      })}
    </ul>
  );
};

export default Accordion;
