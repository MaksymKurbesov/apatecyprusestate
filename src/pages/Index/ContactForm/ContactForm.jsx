import React, { useState } from "react";
import Title from "../../../Shared UI/Title/Title";
import styles from "./ContactForm.module.scss";
import Input from "../../../Shared UI/Input/Input";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { contactFormNotification } from "../../../Api/Notifications";
import ButtonWithState from "../../../Shared UI/ButtonWithState/ButtonWithState";

const ContactForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const [buttonState, setButtonState] = useState("idleContact");

  const contactFormHandler = (data) => {
    setButtonState("loading");
    const formIsEmpty =
      data["user-name"] === "" ||
      data.telegram === "" ||
      data["phone-number"] === "" ||
      data.message === "";

    if (formIsEmpty) {
      setButtonState("idleContact");
      return;
    }

    try {
      contactFormNotification(data).then(() => {
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
        <ButtonWithState buttonState={buttonState} form={"contact-form"} />
      </form>
    </section>
  );
};

export default ContactForm;
