import React from "react";
import styles from "./Restrictions.module.scss";
import Restriction from "../../assets/SVG/restrictions.png";
import { useOutletContext } from "react-router-dom";

const ReferralCheater = () => {
  const { userData } = useOutletContext();

  return (
    <div className={`${styles["restrictions"]} custom-border`}>
      <img src={Restriction} className={styles["icon"]} alt={""} />
      <p className={styles["title"]}>Уважаемый {userData.nickname},</p>
      <p>
        В ходе наших внутренних проверок было обнаружено, что происходит
        аномальная активность, связанная с использованием вашей реферальной
        ссылки. Эта активность включает в себя регистрацию следующих аккаунтов:
      </p>
      <ul>
        <strong>Идентифицированные аккаунты:</strong>
        {userData.restrictions.isReferralCheater.users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <p>
        Такое поведение может указывать на попытку злоупотребления нашей
        реферальной программой, что противоречит нашим правилам и условиям
        использования.
      </p>
      <p>
        В связи с этим, все указанные аккаунты были временно заблокированы.
        Функции вывода средств и открытия нового депозита также приостановлены.
      </p>
      <p>
        Если вы считаете, что произошла ошибка или хотите обсудить этот
        инцидент, пожалуйста, свяжитесь с нашей службой поддержки.
      </p>
    </div>
  );
};

export default ReferralCheater;
