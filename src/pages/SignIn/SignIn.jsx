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

const SignIn = () => {
  const [user, userLoading] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState(null);

  const { register, getValues } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (user) navigate("/profile/personal-area");
  }, [user]);

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
      <SectionLabel text={"Authorization"} style={{ marginBottom: 30 }} />
      <Title
        text={"Login to your personal account"}
        style={{ marginBottom: 30 }}
      />
      <p className={styles["subtitle"]}>
        A new productive journey starts right here
      </p>
      <form className={styles["sign-in-form"]}>
        <Input register={register} name={"email"} placeholder={"Your email"} />
        <Input
          register={register}
          type={"password"}
          name={"password"}
          placeholder={"Your password"}
        />
        {signInError ? (
          <div className={`${styles["sign-in-error"]} error`}>
            <Exclamation />
            <p className={"error-message"}>{signInError}</p>
          </div>
        ) : null}

        {/*<div className={`${styles["sign-in-error"]} error`}>*/}
        {/*  <Exclamation />*/}
        {/*  <p className={"error-message"}>{signInError}</p>*/}
        {/*</div>*/}

        <div className={styles["remember-me"]}>
          <input type={"checkbox"} />
          <span>Remember Me</span>
        </div>
        <p className={styles["forgot-password"]}>Forgot Password</p>
        <NavLink className={styles["dont-have-account"]} to={"/sign-up"}>
          You don't have an account?
        </NavLink>
        <button
          className={`${styles["log-in-button"]} button`}
          onClick={signInHandler}
          disabled={loading}
        >
          Log in
        </button>
      </form>
      <ScrollRestoration />
    </div>
  );
};

export default SignIn;
