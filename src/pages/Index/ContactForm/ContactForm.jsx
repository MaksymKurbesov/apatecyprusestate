import React from "react";
import Title from "../../../Shared UI/Title/Title";
import styles from "./ContactForm.module.scss";
import Input from "../../../Shared UI/Input/Input";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className={styles["contact-form-wrapper"]}>
      <Title text={t("contact_form.title")} style={{ marginBottom: 20 }} />
      <p>{t("contact_form.subtitle")}</p>
      <form className={styles["contact-form"]}>
        <Input
          register={() => null}
          type={"text"}
          placeholder={t("contact_form.your_name")}
        />
        <Input
          register={() => null}
          type={"text"}
          placeholder={t("contact_form.telegram_nickname")}
        />
        <Input
          register={() => null}
          type={"phone"}
          placeholder={t("contact_form.phone_number")}
        />
        <button
          className={"button"}
          style={{ width: "100%" }}
          type="submit"
          form="contact-form"
        >
          {t("contact_form.contact_us")}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
