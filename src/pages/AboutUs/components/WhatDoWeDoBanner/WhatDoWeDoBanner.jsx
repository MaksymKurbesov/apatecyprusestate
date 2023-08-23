import React from "react";
import Image from "../../../../assets/images/what do we do.png";
import styles from "./WhatDoWeDoBanner.module.scss";

const WhatDoWeDoBanner = () => {
  return (
    <section className={styles["what-do-we-do"]}>
      <img src={Image} alt={"Decorate"} width={744} />
      <div className={styles["text"]}>
        <h3>What do we do?</h3>
        <p>
          The company's main and most significant asset is residential real
          estate, i.e. flats and flats in high-rise buildings, as well as villas
          and single-storey houses.
        </p>
      </div>
    </section>
  );
};

export default WhatDoWeDoBanner;
