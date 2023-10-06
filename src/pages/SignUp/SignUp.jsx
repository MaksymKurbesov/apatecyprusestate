import React, { useEffect, useState } from "react";
import SectionLabel from "../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../Shared UI/Title/Title";
import styles from "./SignUp.module.scss";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm/SignUpForm";
import ConfirmRegistrationModal from "./ConfirmRegistrationModal/ConfirmRegistrationModal";
import ErrorRegistrationModal from "./ErrorRegistrationModal/ErrorRegistrationModal";
import { useAuthState } from "../../hooks/useAuthState";
import { auth } from "../../index";
import { closeModal, openModal } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const [user, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   if (isConfirmModalOpen) return;
  //   if (user) navigate("/profile/personal-area");
  // }, [user, isConfirmModalOpen]);

  if (userLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles["sign-up"]}>
      <SectionLabel
        text={t("sign_up.authorization")}
        style={{ marginBottom: 30 }}
      />
      <Title text={t("sign_up.sign_up")} style={{ marginBottom: 30 }} />
      <p className={styles["subtitle"]}>{t("sign_up.subtitle")}</p>
      <SignUpForm
        handleOpenConfirmModal={() => openModal(setIsConfirmModalOpen)}
        handleOpenErrorModal={(error) => {
          setErrorMessage(error);
          openModal(setIsErrorModalOpen);
        }}
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
      <ScrollRestoration />
    </div>
  );
};

export default SignUp;
