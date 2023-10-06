import React, { useEffect, useState } from "react";
import SectionLabel from "../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../Shared UI/Title/Title";
import styles from "./SignIn.module.scss";
import Input from "../../Shared UI/Input/Input";
import { NavLink, ScrollRestoration, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "../../hooks/useAuthState";
import { auth } from "../../index";
import { logInWithEmailAndPassword } from "../../Api/Auth";
import { ReactComponent as Exclamation } from "../../assets/SVG/exclamation.svg";
import { ReactComponent as OpenEye } from "../../assets/SVG/eye.svg";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const { register, getValues } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (user) navigate("/profile/personal-area");
  }, [user]);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const signInHandler = async () => {
    setLoading(true);
    const email = getValues("email");
    const password = getValues("password");
    logInWithEmailAndPassword(email, password)
      .then((error) => {
        setSignInError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (userLoading) {
    return <div className={"suspense"}>Loading...</div>;
  }

  return (
    <div className={styles["sign-in"]}>
      <SectionLabel
        text={t("log_in.authorization")}
        style={{ marginBottom: 30 }}
      />
      <Title text={t("log_in.title")} style={{ marginBottom: 30 }} />
      <p className={styles["subtitle"]}>{t("log_in.subtitle")}</p>
      <form className={styles["sign-in-form"]}>
        <Input
          register={register}
          name={"email"}
          placeholder={t("log_in.your_email")}
        />
        <div className={styles["password-input"]}>
          <Input
            register={register}
            type={passwordShown ? "text" : "password"}
            name={"password"}
            placeholder={t("log_in.your_password")}
          />

          <OpenEye
            className={`${styles["eye-icon"]} ${
              passwordShown && styles["active-eye"]
            }`}
            onClick={togglePasswordVisibility}
          />
        </div>

        {signInError ? (
          <div className={`${styles["sign-in-error"]} error`}>
            <Exclamation />
            <p className={"error-message"}>{signInError}</p>
          </div>
        ) : null}

        <div className={styles["remember-me"]}>
          <input type={"checkbox"} />
          <span>{t("log_in.remember_me")}</span>
        </div>
        <p className={styles["forgot-password"]}>
          {t("log_in.forgot_password")}
        </p>
        <NavLink className={styles["dont-have-account"]} to={"/sign-up"}>
          {t("log_in.you_dont_have_account")}
        </NavLink>
        <button
          className={`${styles["log-in-button"]} button`}
          onClick={signInHandler}
          disabled={loading}
        >
          {t("log_in.log_in")}
        </button>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default SignIn;
