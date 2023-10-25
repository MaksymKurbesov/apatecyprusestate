import React, { useState } from "react";
import Title from "../../../Shared UI/Title/Title";
import styles from "./ContactForm.module.scss";
import Input from "../../../Shared UI/Input/Input";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { contactFormNotification } from "../../../Api/Notifications";

const ContactForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const [buttonState, setButtonState] = useState("idle");

  const contactFormHandler = (data) => {
    setButtonState("loading");

    try {
      contactFormNotification(data).then(() => {
        setButtonState("success");
        reset();

        setTimeout(() => {
          setButtonState("idle");
        }, 2000);
      });
    } catch (e) {
      console.error(e);
      setButtonState("idle");
    }
  };

  return (
    <section className={styles["contact-form-wrapper"]}>
      <Title text={t("contact_form.title")} style={{ marginBottom: 20 }} />
      <p data-aos={"fade-down"}>{t("contact_form.subtitle")}</p>
      <form
        className={styles["contact-form"]}
        id={"contact-form"}
        onSubmit={handleSubmit(contactFormHandler)}
        data-aos={"fade-right"}
      >
        <Input
          register={register}
          name={"user-name"}
          type={"text"}
          placeholder={t("contact_form.your_name")}
        />
        <Input
          register={register}
          name={"telegram"}
          type={"text"}
          placeholder={t("contact_form.telegram_nickname")}
        />
        <Input
          register={register}
          name={"phone-number"}
          type={"phone"}
          placeholder={t("contact_form.phone_number")}
        />
        <button
          className={`${
            buttonState === "success" ? styles["success-button"] : ""
          } button`}
          style={{ width: "100%" }}
          type="submit"
          form="contact-form"
          disabled={buttonState === "loading"}
        >
          {buttonState === "success"
            ? t("contact_form.success")
            : t("contact_form.contact_us")}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
