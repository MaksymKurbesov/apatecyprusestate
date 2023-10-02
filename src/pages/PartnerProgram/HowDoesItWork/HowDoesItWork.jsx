import React from "react";
import Title from "../../../Shared UI/Title/Title";
import styles from "./HowDoesItWork.module.scss";
import { ReactComponent as IconBorder } from "../../../assets/SVG/icon-border.svg";

const STEPS_LIST = [
  {
    title: "Регистрация на платформе",
    description:
      "Заполните необходимые поля и создайте аккаунт на платформе Apate Cyprus Estate, чтобы получить доступ к реферальной программе.",
  },
  {
    title: "Получение реферальной ссылки",
    description:
      "Перейдите в личный кабинет, найдите раздел 'Реферальная программа' и получите свою уникальную реферальную ссылку.",
  },
  {
    title: "Распространение ссылки",
    description:
      "Разместите вашу реферальную ссылку в социальных сетях, блогах, отправьте друзьям по электронной почте или даже расскажите о ней в личной беседе.",
  },
  {
    title: "Поддержка и консультация",
    description:
      "Помогайте вашим рефералам понимать особенности платформы и ответьте на возникающие вопросы, чтобы облегчить их начало работы.",
  },
  {
    title: "Анализ и мониторинг результатов",
    description:
      "Посещайте свой личный кабинет регулярно, чтобы отслеживать активность приглашенных людей, количество новых регистраций и полученные вами комиссии.",
  },
];

const HowDoesItWork = () => {
  return (
    <section className={styles["how-does-it-work"]}>
      <div className={"container"}>
        <Title text={"Как начать"} style={{ marginBottom: 30 }} />
        <ul className={styles["steps-list"]}>
          {STEPS_LIST.map((step, index) => {
            return (
              <li className={styles["step"]} key={index}>
                <div className={styles["count"]}>
                  <IconBorder />
                  <span>{index + 1}</span>
                </div>
                <div className={styles["information"]}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HowDoesItWork;
