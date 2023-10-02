import React from "react";
import styles from "./SectionLayout.module.scss";
import SectionLabel from "../SectionLabel/SectionLabel";
import Title from "../Title/Title";
import { useWindowSize } from "../../hooks/useWindowSize";

const SectionLayout = (props) => {
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 768;

  const {
    image,
    labelText,
    titleText,
    description,
    isSignInButton = true,
    direction,
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

          {isSignInButton && (
            <button
              className={"button"}
              style={{ width: "100%" }}
              type="submit"
              form="sign-in-form"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionLayout;
