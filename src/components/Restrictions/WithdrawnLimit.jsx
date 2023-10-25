import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Restrictions.module.scss";
import Restriction from "../../assets/SVG/restrictions.png";

const WithdrawnLimit = () => {
  const { userData } = useOutletContext();

  return (
    <div className={`${styles["restrictions"]} custom-border`}>
      <img src={Restriction} className={styles["icon"]} alt={""} />
      <p className={styles["title"]}>Уважаемый {userData.nickname},</p>
      <p>
        Мы обнаружили несоответствие в вашем аккаунте связанное с операциями
        вывода средств. Согласно правилам нашего сервиса, сумма запроса на вывод
        не должна превышать сумму вашего наибольшего пополнения.
      </p>
      <ul>
        В связи с этим временно ограничены следующие функции вашего аккаунта:
        <li>• Вывод средств</li>
        <li>• Открытие нового депозита</li>
      </ul>
      <p>
        Для разрешения данной ситуации, пожалуйста, свяжитесь с нашей службой
        поддержки.
      </p>
      <p>
        Мы ценим ваше сотрудничество и надеемся на понимание. Наша цель —
        обеспечивать безопасность и надежность сервиса для всех наших клиентов.
      </p>
    </div>
  );
};

export default WithdrawnLimit;
