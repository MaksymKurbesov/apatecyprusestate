import React from "react";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import Image from "../../../assets/images/what-do-we-do2.png";
import styles from "./OurValues.module.scss";

const OurValues = () => {
  return (
    <div className={styles["what-we-do"]}>
      <SectionLayout
        image={Image}
        labelText={"Этика"}
        titleText={"Наши ценности и принципы"}
        description={
          <p>
            Четыре года назад мы взяли первую лопату в руки, чтобы начать
            создавать маленькие частицы кипрской идиллии. Наши мастера – это не
            просто строители, это искусные ремесленники, которые вкладывают свою
            душу в каждый камень, в каждый кирпич. Мы гордимся тем, что наши
            дома не просто строения, а настоящие произведения искусства.
            <br /> Мы ценители природы и стараемся максимально сохранить
            окружающую среду в процессе строительства. Все наши проекты
            разрабатываются с учетом природных особенностей местности, чтобы
            вписаться в ландшафт, не нарушая его гармонии. Мы ставим перед собой
            задачу – оставить след только положительный, как след от легкого
            прикосновения.
          </p>
        }
        direction={"right"}
        isSignInButton={false}
      />
    </div>
  );
};

export default OurValues;
