import React from "react";
import SectionLabel from "../../../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../../../Shared UI/Title/Title";
import styles from "./Main.module.scss";
import Button from "../../../../Shared UI/Button/Button";
import HeroImage from "../../../../assets/images/hero-image.png";

const Main = () => {
  return (
    <div className={styles["main"]}>
      <SectionLabel text={"PARTNER PROGRAM"} style={{ marginBottom: 25 }} />
      <Title text={"Become an affiliate"} style={{ marginBottom: 25 }} />
      <p className={styles["subtitle"]}>
        Join Trust Investment's affiliate program and earn up to 7% for every
        deposit made by someone you refer.
      </p>
      <Button text={"Register and start earning"} />
      <div className={styles["hero-image"]}>
        <img src={HeroImage} alt={"main decor"} width={1024} />
      </div>
    </div>
  );
};

export default Main;
