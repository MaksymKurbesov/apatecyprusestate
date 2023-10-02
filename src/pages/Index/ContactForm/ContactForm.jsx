import React from "react";
import Title from "../../../Shared UI/Title/Title";
import styles from "./ContactForm.module.scss";
import Input from "../../../Shared UI/Input/Input";

const ContactForm = () => {
  return (
    <section className={styles["contact-form-wrapper"]}>
      <Title text={"Start your journey with us"} style={{ marginBottom: 20 }} />
      <p>Want to get into the investor chat? Contact us.</p>
      <form className={styles["contact-form"]}>
        <Input register={() => null} type={"text"} placeholder={"Your name"} />
        <Input
          register={() => null}
          type={"text"}
          placeholder={"Telegram nickname"}
        />
        <Input
          register={() => null}
          type={"phone"}
          placeholder={"Phone number"}
        />
        <button
          className={"button"}
          style={{ width: "100%" }}
          type="submit"
          form="contact-form"
        >
          Contact Us
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
