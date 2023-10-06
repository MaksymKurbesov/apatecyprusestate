import React from "react";
import SectionLabel from "../../Shared UI/SectionLabel/SectionLabel";
import styles from "./OurContacts.module.scss";
import Title from "../../Shared UI/Title/Title";
import Input from "../../Shared UI/Input/Input";
import Image from "../../assets/images/feedback-form.webp";
import AddressIcon from "../../assets/SVG/address icon.svg";
import WeekendIcon from "../../assets/SVG/weekend icon.svg";
import OpeningIcon from "../../assets/SVG/opening hours icon.svg";
import ContactsIcon from "../../assets/SVG/contacts icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/SVG/phone.svg";
import { ReactComponent as EmailIcon } from "../../assets/SVG/mail.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/SVG/youtube.svg";
import { ReactComponent as TelegramIcon } from "../../assets/SVG/telegram.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ScrollRestoration } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurContacts = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation("our-contacts");

  return (
    <div className={styles["our-contacts"]}>
      <div className={"container"}>
        <div className={styles["form-wrapper"]}>
          <div className={styles["form"]}>
            <SectionLabel text={t("label")} style={{ marginBottom: 30 }} />
            <Title text={t("title")} />

            {windowSize < 1024 ? (
              <img
                src={Image}
                alt={"decorate"}
                width={"80%"}
                className={styles["image-mobile"]}
              />
            ) : null}
            <p>{t("description")}</p>
            <form>
              <Input
                register={() => null}
                type={"text"}
                name={"name"}
                placeholder={t("your_name")}
              />
              <Input
                register={() => null}
                type={"text"}
                name={"email"}
                placeholder={t("your_email")}
              />
              <Input
                register={() => null}
                type={"text"}
                name={"phone-number"}
                placeholder={t("phone_number")}
              />
              <Input
                register={() => null}
                type={"textarea"}
                name={"message"}
                placeholder={t("your_message")}
              />
              <button className={"button"}>{t("send")}</button>
            </form>
          </div>

          {windowSize >= 1024 ? (
            <img
              src={Image}
              alt={"decorate"}
              width={"50%"}
              className={styles["image"]}
            />
          ) : null}
        </div>
        <div className={styles["additional-information"]}>
          <div className={styles["info"]}>
            <img src={AddressIcon} alt={"icon"} />
            <h3>{t("our_address")}</h3>
            <p>Tower 25, Stasinou, Nicosia 1060, Cyprus</p>
          </div>
          <div className={styles["info"]}>
            <img src={OpeningIcon} alt={"icon"} />
            <h3>{t("opening_hours")}</h3>
            <p>
              {t("monday")} - {t("friday")} <br /> 10:00 - 18:00
            </p>
          </div>
          <div className={styles["info"]}>
            <img src={WeekendIcon} alt={"icon"} />
            <h3>{t("weekend")}</h3>
            <p>
              {t("saturday")} <br /> {t("sunday")}
            </p>
          </div>
          <div className={styles["info"]}>
            <img src={ContactsIcon} alt={"icon"} />
            <h3>{t("contacts")}</h3>
            <ul className={styles["social-links"]}>
              <li>
                <PhoneIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <EmailIcon />
              </li>
              <li>
                <TelegramIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default OurContacts;
