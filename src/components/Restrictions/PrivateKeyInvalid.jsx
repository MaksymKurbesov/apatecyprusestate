import React from "react";
import styles from "./Restrictions.module.scss";
import Restriction from "../../assets/SVG/restrictions.png";
import { useOutletContext } from "react-router-dom";

const PrivateKeyInvalid = () => {
  const { userData } = useOutletContext();

  return (
    <div className={`${styles["restrictions"]} custom-border`}>
      <img src={Restriction} className={styles["icon"]} alt={""} />
      <p className={styles["title"]}>Уважаемый {userData.nickname},</p>
      <p>
        Мы зафиксировали попытку ввода некорректного приватного ключа для вашего
        аккаунта. В целях обеспечения безопасности и защиты вашей личной
        информации временно ограничены следующие функции вашего аккаунта:
      </p>
      <ul>
        <li>• Вывод средств</li>
        <li>• Открытие нового депозита</li>
      </ul>
      <p>
        Если вы забыли или потеряли свой приватный ключ, рекомендуем
        воспользоваться процедурой восстановления. Если же вы считаете, что
        столкнулись с подозрительной активностью или не пытались вводить ключ,
        немедленно свяжитесь с нашей службой поддержки.
      </p>
      <p>
        Ваша безопасность — наш приоритет. Благодарим за понимание и
        сотрудничество.
      </p>
    </div>
  );
};

export default PrivateKeyInvalid;
