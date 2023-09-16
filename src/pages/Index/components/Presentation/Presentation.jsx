import React from "react";
import styles from "./Presentation.module.scss";
import Title from "../../../../../Shared UI/Title/Title";
import Button from "../../../../../Shared UI/Button/Button";
import MacbookImage from "../../../../../assets/images/Macbook Air (2022).png";

const Presentation = () => {
  return (
    <section className={styles["presentation"]}>
      <div className={"container"}>
        <div className={`${styles["presentation-wrapper"]}`}>
          <div className={styles["information"]}>
            <Title text={"Our exclusive presentation"} />
            <p>
              We reveal the secrets of successful investments, including real
              estate investments!
            </p>
            <Button text={"Sign In"} />
          </div>
          <img
            src={MacbookImage}
            alt={"Macbook"}
            className={styles["macbook"]}
            width={"60%"}
          />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
