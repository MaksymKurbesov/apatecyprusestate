import React from "react";
import styles from "./Restrictions.module.scss";
import Restriction from "../../assets/SVG/restrictions.png";
import { useOutletContext } from "react-router-dom";

const MultiAcc = () => {
  const { userData } = useOutletContext();

  return (
    <div className={`${styles["restrictions"]} custom-border`}>
      <img src={Restriction} className={styles["icon"]} alt={""} />
      <p className={styles["title"]}>Уважаемый {userData.nickname},</p>
      <p>
        В ходе регулярной проверки активности на нашем сайте было обнаружено,
        что с вашего устройства или IP-адреса осуществляется доступ к нескольким
        аккаунтам. Это действие противоречит нашим правилам и условиям
        использования, запрещающим мультиаккаунтинг.
      </p>
      <ul>
        <strong>Идентифицированные аккаунты:</strong>
        {userData.restrictions.isMultiAcc.users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <p>
        В связи с этим, все указанные аккаунты были временно заблокированы.
        Функции вывода средств и открытия нового депозита также приостановлены.
      </p>
      <p>
        Если вы полагаете, что произошла ошибка или хотите обсудить этот
        инцидент, пожалуйста, свяжитесь с нашей службой поддержки.
      </p>
      <p>
        Мы ценим честное сотрудничество с каждым нашим пользователем и надеемся
        на ваше понимание.
      </p>
    </div>
  );
};

export default MultiAcc;
