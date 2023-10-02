import React from "react";
import SectionLabel from "../../Shared UI/SectionLabel/SectionLabel";
import styles from "./OurContacts.module.scss";
import Title from "../../Shared UI/Title/Title";
import Input from "../../Shared UI/Input/Input";
import Image from "../../assets/images/feedback-form.png";
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

const OurContacts = () => {
  const windowSize = useWindowSize();

  return (
    <div className={styles["our-contacts"]}>
      <div className={"container"}>
        <div className={styles["form-wrapper"]}>
          <div className={styles["form"]}>
            <SectionLabel text={"Get in touch"} style={{ marginBottom: 30 }} />
            <Title text={"Feedback form"} />

            {windowSize < 1024 ? (
              <img
                src={Image}
                alt={"decorate"}
                width={"80%"}
                className={styles["image-mobile"]}
              />
            ) : null}
            <p>
              We sincerely thank you for your questions, feedback and
              suggestions. Your message will be forwarded to Customer Service
              and we will respond as soon as possible.
            </p>
            <form>
              <Input
                register={() => null}
                type={"text"}
                name={"name"}
                placeholder={"Your name"}
              />
              <Input
                register={() => null}
                type={"text"}
                name={"email"}
                placeholder={"Your E-mail"}
              />
              <Input
                register={() => null}
                type={"text"}
                name={"phone-number"}
                placeholder={"Phone number"}
              />
              <Input
                register={() => null}
                type={"textarea"}
                name={"message"}
                placeholder={"Your message"}
              />
              <button className={"button"}>Send</button>
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
            <h3>Our address</h3>
            <p>Tameem house Office 701 Al Barsha Heights Dubai</p>
          </div>
          <div className={styles["info"]}>
            <img src={OpeningIcon} alt={"icon"} />
            <h3>Opening hours</h3>
            <p>
              Monday - Friday <br /> 10:00 - 18:00
            </p>
          </div>
          <div className={styles["info"]}>
            <img src={WeekendIcon} alt={"icon"} />
            <h3>Weekend</h3>
            <p>
              Saturday <br /> Sunday
            </p>
          </div>
          <div className={styles["info"]}>
            <img src={ContactsIcon} alt={"icon"} />
            <h3>Contacts</h3>
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
