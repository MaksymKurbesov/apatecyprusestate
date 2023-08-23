import React from "react";
import styles from "./SectionLayout.module.scss";
import SectionLabel from "../SectionLabel/SectionLabel";
import Title from "../Title/Title";
import Button from "../Button/Button";

const SectionLayout = (props) => {
  const { image, labelText, titleText, description, direction, marginBot } =
    props;

  return (
    <section
      className={`${styles["section-layout"]} ${styles[direction]} container`}
      style={{ marginBottom: marginBot }}
    >
      <img src={image} alt={"decorate"} className={styles["image"]} />
      <div className={styles["information"]}>
        <SectionLabel text={labelText} style={{ marginBottom: 30 }} />
        <Title text={titleText} style={{ marginBottom: 30 }} />
        <p>{description}</p>
        <Button text={"Sign In"} />
      </div>
    </section>
  );
};

export default SectionLayout;
