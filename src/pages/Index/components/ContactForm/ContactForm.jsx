import React from "react";
import Title from "../../../../../Shared UI/Title/Title";
import styles from "./ContactForm.module.scss";
import Input from "../../../../../Shared UI/Input/Input";
import Button from "../../../../../Shared UI/Button/Button";

const ContactForm = () => {
  return (
    <section className={styles["contact-form-wrapper"]}>
      <Title text={"Start your journey with us"} style={{ marginBottom: 20 }} />
      <p>Want to get into the investor chat? Contact us.</p>
      <form className={styles["contact-form"]}>
        <Input type={"text"} placeholder={"Your name"} />
        <Input type={"text"} placeholder={"Telegram nickname"} />
        <Input type={"phone"} placeholder={"Phone number"} />
        <Button text={"Contact Us"} />
      </form>
    </section>
  );
};

export default ContactForm;
