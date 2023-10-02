import React from "react";
import Image from "../../../assets/images/what-do-we-do.png";
import styles from "./WhatDoWeDoBanner.module.scss";
import Title from "../../../Shared UI/Title/Title";

const WhatDoWeDoBanner = () => {
  return (
    <section className={styles["what-do-we-do"]}>
      <img src={Image} alt={"Decorate"} width={744} />
      <div className={styles["text"]}>
        <Title text={"Инвестируйте в будущее Кипра с Apate Cyprus Estate"} />
        <p>
          Инвестирование в Apate Cyprus Estate – это не просто финансовая
          возможность, это шанс вложить свои средства в проекты, которые
          приносят пользу обществу и природе. Вместе мы создаем не только дома,
          но и будущее Кипра. Мы приглашаем вас присоединиться к нашей команде,
          чтобы вместе двигаться к новым горизонтам, кипрской идиллии и успеху.
        </p>
      </div>
    </section>
  );
};

export default WhatDoWeDoBanner;
