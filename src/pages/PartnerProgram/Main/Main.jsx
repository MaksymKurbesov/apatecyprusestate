import React from "react";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../../Shared UI/Title/Title";
import styles from "./Main.module.scss";
import HeroImage from "../../../assets/images/partner-hero-image.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className={styles["main"]}>
      <SectionLabel text={"PARTNER PROGRAM"} style={{ marginBottom: 25 }} />
      <Title text={"Become an affiliate"} style={{ marginBottom: 25 }} />
      <p className={styles["subtitle"]}>
        Join Apate Cyprus Estate's affiliate program and earn up to 5% for every
        deposit made by someone you refer.
      </p>
      <Link
        to={"/authorization/sign-up"}
        className={`${styles["register-button"]} button`}
      >
        Register and start earning
      </Link>
      <div className={styles["hero-image"]}>
        <img src={HeroImage} alt={"main decor"} width={"60%"} />
      </div>
    </section>
  );
};

export default Main;
