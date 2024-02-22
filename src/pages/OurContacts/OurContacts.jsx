import React, { useState } from "react";
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
import { ReactComponent as InstagramIcon } from "../../assets/SVG/instagram.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ScrollRestoration } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ourContactsFormNotification } from "../../Api/Notifications";
import { useForm } from "react-hook-form";
import ButtonWithState from "../../Shared UI/ButtonWithState/ButtonWithState";

const OurContacts = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation("our-contacts");
  const [buttonState, setButtonState] = useState("idleContact");
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });

  const contactFormHandler = (data) => {
    setButtonState("loading");

    const formIsEmpty =
      data["user-name"] === "" ||
      data.telegram === "" ||
      data["phone-number"] === "";

    console.log(data, "data");

    if (formIsEmpty) {
      setButtonState("idleContact");
      return;
    }

    try {
      ourContactsFormNotification(data).then(() => {
        setButtonState("success_send");
        reset();

        setTimeout(() => {
          setButtonState("idleContact");
        }, 2000);
      });
    } catch (e) {
      console.error(e);
      setButtonState("idleContact");
    }
  };

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
            <form
              id={"contact-us-form"}
              onSubmit={handleSubmit(contactFormHandler)}
            >
              <Input
                register={register}
                type={"text"}
                name={"user-name"}
                placeholder={t("your_name")}
              />
              <Input
                register={register}
                type={"text"}
                name={"email"}
                placeholder={t("your_email")}
              />
              <Input
                register={register}
                type={"text"}
                name={"phone-number"}
                placeholder={t("phone_number")}
              />
              <Input
                register={register}
                type={"textarea"}
                name={"message"}
                placeholder={t("your_message")}
              />
              <ButtonWithState
                buttonState={buttonState}
                form={"contact-us-form"}
              />
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
            <p>
              Basilissis Phreiderikis, 20, EL GRECO HOUSE, <br />
              Floor 1, Flat/Office 104 1066, Leukosia, Cyprus
            </p>
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
                <a href={"tel:35722761795"}>
                  <PhoneIcon />
                </a>
              </li>
              <li>
                <YoutubeIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <a href={"mailto:support@apatecyprusestate.com"}>
                  <EmailIcon />
                </a>
              </li>
              <li>
                <a href={"https://t.me/apatenews"}>
                  <TelegramIcon />
                </a>
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
