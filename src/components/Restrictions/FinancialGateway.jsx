import React from "react";
import styles from "./Restrictions.module.scss";
import Restriction from "../../assets/SVG/restrictions.png";
import { useOutletContext } from "react-router-dom";

const FinancialGateway = () => {
  const { userData } = useOutletContext();

  return (
    <div className={`${styles["restrictions"]} custom-border`}>
      <img src={Restriction} className={styles["icon"]} alt={""} />
      <p className={styles["title"]}>Уважаемый {userData.nickname},</p>
      <p>
        На данный момент мы столкнулись с техническими проблемами в вашем
        финансовом шлюзе, что может затруднить или временно приостановить
        процесс вывода средств или открытия депозита.
      </p>
      <p>
        "Финансовый шлюз" — это система, которая позволяет нам безопасно
        обрабатывать ваши платежные операции. Мы активно работаем над
        устранением проблемы и приносим извинения за возможные неудобства.
      </p>
      <p>
        Мы оценим ваше терпение и рекомендуем попробовать выполнить операцию
        позже. Если у вас возникнут дополнительные вопросы или проблемы,
        пожалуйста, свяжитесь с нашей службой поддержки.
      </p>
    </div>
  );
};

export default FinancialGateway;
