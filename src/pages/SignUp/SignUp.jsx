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

const SignUp = () => {
  const [user, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (user) navigate("/profile/personal-area");
  }, [user]);

  const handleOpenErrorModal = (error) => {
    document.body.style.overflow = "hidden";
    setIsErrorModalOpen(true);
    setErrorMessage(error);
  };

  const handleCloseErrorModal = () => {
    document.body.style.overflow = "visible";
    setIsErrorModalOpen(false);
  };

  const handleOpenConfirmModal = () => {
    document.body.style.overflow = "hidden";
    setIsConfirmModalOpen(true);
  };

  const handleCloseConfirmModal = () => {
    document.body.style.overflow = "visible";
    setIsConfirmModalOpen(false);
  };

  if (userLoading) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles["sign-up"]}>
      <SectionLabel text={"Authorization"} style={{ marginBottom: 30 }} />
      <Title text={"Sign Up"} style={{ marginBottom: 30 }} />
      <p className={styles["subtitle"]}>
        Create an account and join our community
      </p>
      <SignUpForm
        handleOpenConfirmModal={handleOpenConfirmModal}
        handleOpenErrorModal={handleOpenErrorModal}
      />
      <ConfirmRegistrationModal
        closeHandler={handleCloseConfirmModal}
        modalStatus={isConfirmModalOpen}
      />
      <ErrorRegistrationModal
        closeHandler={handleCloseErrorModal}
        modalStatus={isErrorModalOpen}
        error={errorMessage}
      />
      <ScrollRestoration />
    </div>
  );
};

export default SignUp;
