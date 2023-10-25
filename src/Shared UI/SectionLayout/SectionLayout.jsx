import React from "react";
import styles from "./SectionLayout.module.scss";
import SectionLabel from "../SectionLabel/SectionLabel";
import Title from "../Title/Title";
import { useWindowSize } from "../../hooks/useWindowSize";

const SectionLayout = (props) => {
  const windowSize = useWindowSize();

  const {
    image,
    labelText,
    titleText,
    description,
    direction,
    moreInfoButton,
  } = props;

  return (
    <>
      <div
        className={`${styles["section-layout"]} ${styles[direction]} container`}
      >
        {windowSize > 568 && (
          <img
            src={image}
            alt={"decorate"}
            className={styles["image"]}
            width={"50%"}
            data-aos={"fade-in"}
            data-aos-delay={200}
          />
        )}
        <div className={styles["information"]}>
          <SectionLabel text={labelText} style={{ marginBottom: 30 }} />
          <Title text={titleText} style={{ marginBottom: 30 }} />
          <div className={styles[direction]}>
            {windowSize < 568 && (
              <img
                src={image}
                alt={"decorate"}
                className={styles["image"]}
                width={"50%"}
              />
            )}
            {description}
          </div>
          {moreInfoButton}
        </div>
      </div>
    </>
  );
};

export default SectionLayout;
