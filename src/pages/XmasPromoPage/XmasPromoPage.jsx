import React from "react";
import styles from "./XmasPromoPage.module.scss";
import Banner from "../../assets/images/xmas-banner.png";

const XmasPromoPage = () => {
  return (
    <div className={`${styles["xmas-promo"]} container`}>
      <img src={Banner} width={"100%"} className={styles["image"]} />
      <h2 className={styles["title"]}>
        Эксклюзивное предложение для инвесторов в недвижимость Кипра!
      </h2>
      <p className={styles["intro-text"]}>
        Инвестируйте в солнечный Кипр с нами и получите больше! Только{" "}
        <b>с 25 по 30 декабря</b>, при пополнении вашего инвестиционного счета,
        мы начислим вам <b>10%</b> бонусом! Это ваш уникальный шанс увеличить
        ваш инвестиционный потенциал и расширить возможности в сфере
        недвижимости на Кипре.
      </p>
      <ul className={styles["features"]}>
        <li>Инвестируйте умно, получайте больше!</li>
        <li>Увеличьте свои инвестиции с нашей специальной акцией!</li>
        <li>
          Ваш путь к успешным инвестициям в живописном уголке Средиземноморья!
        </li>
      </ul>
      <h3 className={styles["how-work-title"]}>Как это работает?</h3>
      <ul className={styles["how-work-list"]}>
        <li>
          1. Запросить промокод у тех.поддержки после регистрации на сайте.
        </li>
        <li>
          2. На сайте компании в разделе <b>"Пополнить счёт"</b> выберите любой
          удобный для вас способ оплаты.
        </li>
        <li>
          3. При пополнение счёта, на сайте, в поле <b>"Номер транзакции"</b>{" "}
          добавьте через точку с запятой (;) промокод.
        </li>
        <li>
          4. Мы автоматически начислим вам средства на ваш счёт в течение 24-х
          часов.
        </li>
        <li>
          5. Наслаждайтесь преимуществами инвестирования в одно из самых
          желанных мест.
        </li>
      </ul>
      <p className={styles["outro-text"]}>
        Сделайте шаг навстречу новым возможностям на Кипре. Пополняйте ваш
        инвестиционный счет с 25 декабря и начните использовать свои бонусные
        средства сразу!
      </p>
    </div>
  );
};

export default XmasPromoPage;
