import React from "react";
import Image from "../../../assets/images/what-is-it.png";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./WhatIs.module.scss";

const WhatIs = () => {
  return (
    <div className={styles["what-is"]}>
      <SectionLayout
        image={Image}
        labelText={"Что это?"}
        titleText={
          "Многоуровневая реферальная программа от Apate Cyprus Estate"
        }
        description={
          <p>
            Apate Cyprus Estate активно интегрирует новаторские подходы,
            приносящие выгоду всем нашим инвесторам. Мы создали многоуровневую
            реферальную программу исключительно для наших клиентов.
            Присоединиться к программе может каждый, кто зарегистрировался на
            нашей платформе. После регистрации всего несколько кликов отделяют
            вас от возможности поделиться реферальной ссылкой с друзьями и
            получать бонусы за депозиты, сделанные вашими приглашенными.
          </p>
        }
        direction={"right"}
      />
    </div>
  );
};

export default WhatIs;
