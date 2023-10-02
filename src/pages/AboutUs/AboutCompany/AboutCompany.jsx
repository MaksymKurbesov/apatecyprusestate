import React from "react";
import Image from "../../../assets/images/about-us.png";
import SectionLayout from "../../../Shared UI/SectionLayout/SectionLayout";
import styles from "./AboutCompany.module.scss";

const AboutCompany = () => {
  return (
    <div className={styles["about-company"]}>
      <SectionLayout
        image={Image}
        titleText={"Начало Apate Cyprus Estate"}
        labelText={"О НАС"}
        description={
          <p>
            Представьте себе вдохновение и страсть к созданию красоты в каждом
            уголке Кипра. Это и есть история Apate Cyprus Estate – компании,
            зародившейся в сердце этого удивительного острова. Восемь лет назад,
            вдали от шумных городов, вдохновленные кипрской природой и
            традициями, группа амбициозных архитекторов и строителей объединила
            свои силы, чтобы воплотить мечту.
            <br /> С самого начала Apate Cyprus Estate поставила перед собой
            непоколебимую цель – создавать дома, которые не только впишутся в
            окружающую красоту Кипра, но и станут идеальным местом для семейного
            счастья. Мы верим, что каждый дом должен отражать уникальность своих
            обитателей и в то же время быть воплощением надежности и качества.
          </p>
        }
        isSignInButton={false}
      />
    </div>
  );
};

export default AboutCompany;
