import React from "react";
import SectionLabel from "../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../Shared UI/Title/Title";
import styles from "./FaqPage.module.scss";
import Accordion from "../../components/Accordion/Accordion";

const QUESTIONS = [
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough to indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough to indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough  Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enoughto indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough to indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough to indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough  Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enoughto indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough to indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough to indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
  {
    title: "How do I get started as an investor with Trust Investment?",
    content:
      "Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough  Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enough Please note that our company, when registering, does not require any personal data from you, it also does not require a bank card number, CVV, expiration date. It is enoughto indicate the details or number of wallets for depositing and withdrawing funds in your personal account on the Trust Investment online platform.",
  },
];

const FaqPage = () => {
  return (
    <div className={styles["faq-page"]}>
      <SectionLabel text={`FAQ'S`} style={{ marginBottom: 20 }} />
      <Title text={"Frequently asked questions"} style={{ marginBottom: 20 }} />
      <p className={styles["subtitle"]}>All you need to know to work with us</p>
      <Accordion data={QUESTIONS} />
    </div>
  );
};

export default FaqPage;
