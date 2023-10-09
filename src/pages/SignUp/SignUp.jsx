import React, { useState } from "react";
import SectionLabel from "../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../Shared UI/Title/Title";
import styles from "./SignUp.module.scss";
import {
  ScrollRestoration,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import SignUpForm from "./SignUpForm/SignUpForm";
import ConfirmRegistrationModal from "./ConfirmRegistrationModal/ConfirmRegistrationModal";
import ErrorRegistrationModal from "./ErrorRegistrationModal/ErrorRegistrationModal";
import { closeModal, openModal } from "../../utils/helpers";
import { useTranslation } from "react-i18next";
import Agreement from "../../components/Agreement/Agreement";
import { useForm, FormProvider } from "react-hook-form";

const SignUp = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isAgreementOpen, setIsAgreementOpen] = useState(false);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      referredBy: searchParams.get("ref"),
    },
  });

  const agreementHandler = (value) => {
    methods.setValue("agreement", value);
    methods.trigger("agreement");
  };

  return (
    <div className={styles["sign-up"]}>
      <SectionLabel
        text={t("sign_up.authorization")}
        style={{ marginBottom: 30 }}
      />
      <Title text={t("sign_up.sign_up")} style={{ marginBottom: 30 }} />
      <p className={styles["subtitle"]}>{t("sign_up.subtitle")}</p>
      <FormProvider {...methods}>
        <SignUpForm
          handleOpenAgreement={() => openModal(setIsAgreementOpen)}
          handleOpenConfirmModal={() => openModal(setIsConfirmModalOpen)}
          handleOpenErrorModal={(error) => {
            setErrorMessage(error);
            openModal(setIsErrorModalOpen);
          }}
        />
        <Agreement
          agreementHandler={agreementHandler}
          closeHandler={() => closeModal(setIsAgreementOpen)}
          modalStatus={isAgreementOpen}
        />
        <ConfirmRegistrationModal
          closeHandler={() => closeModal(setIsConfirmModalOpen)}
          modalStatus={isConfirmModalOpen}
        />
        <ErrorRegistrationModal
          closeHandler={() => closeModal(setIsErrorModalOpen)}
          modalStatus={isErrorModalOpen}
          error={errorMessage}
        />
      </FormProvider>
      <ScrollRestoration />
    </div>
  );
};

export default SignUp;
