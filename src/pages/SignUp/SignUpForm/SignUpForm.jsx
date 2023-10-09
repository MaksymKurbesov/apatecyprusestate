import React, { useContext, useState } from "react";
import styles from "./SignUpForm.module.scss";
import { INPUTS } from "./INPUTS";
import Input from "../../../Shared UI/Input/Input";
import { ReactComponent as Exclamation } from "../../../assets/SVG/exclamation.svg";
import { FirebaseContext } from "../../../index";
import { useFormContext } from "react-hook-form";
import { doc, getDoc } from "firebase/firestore";
import { logout, registerWithEmailAndPassword } from "../../../Api/Auth";
import { useTranslation } from "react-i18next";

const SignUpForm = ({
  handleOpenAgreement,
  handleOpenConfirmModal,
  handleOpenErrorModal,
}) => {
  const { t } = useTranslation();
  const { db } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useFormContext();

  const onSubmit = async (data) => {
    setLoading(true);
    const candidateRef = doc(db, "users", data.nickname.trim());
    const candidateSnap = await getDoc(candidateRef);

    if (!candidateSnap.exists()) {
      await registerWithEmailAndPassword(data)
        .then((error) => {
          if (!error) {
            logout();
            handleOpenConfirmModal();
            reset();
          } else {
            handleOpenErrorModal(error);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      handleOpenErrorModal();
      setLoading(false);
    }
  };

  return (
    <form
      className={styles["sign-up-form"]}
      id={"sign-up-form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {INPUTS.map((input) => {
        const { name, placeholder, validations, errorMessages, type } = input;

        return (
          <Input
            key={name}
            register={register}
            name={name}
            type={type}
            placeholder={t(`sign_up.${placeholder}`)}
            validations={validations}
            error={errors[name]}
            errorMessages={errorMessages}
            watch={watch}
          />
        );
      })}
      <div className={styles["agreement"]}>
        <input
          name="agreement"
          type={"checkbox"}
          {...register("agreement", {
            required: true,
          })}
        />
        <span onClick={handleOpenAgreement}>{t("sign_up.agree")}</span>
        {errors?.agreement && (
          <div className={`${styles["sign-up-error"]} error`}>
            <Exclamation />
            <p className={"error-message"}>
              Подтвердите, что вы согласны с пользовательским соглашением
            </p>
          </div>
        )}
      </div>
      <button
        className={`${styles["sign-up-button"]} button`}
        type="submit"
        form="sign-up-form"
        disabled={loading}
      >
        {t("sign_up.sign_up")}
      </button>
    </form>
  );
};

export default SignUpForm;
