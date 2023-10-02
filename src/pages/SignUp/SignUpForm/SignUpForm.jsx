import React, { useContext, useState } from "react";
import styles from "./SignUpForm.module.scss";
import { INPUTS } from "./INPUTS";
import Input from "../../../Shared UI/Input/Input";
import { ReactComponent as Exclamation } from "../../../assets/SVG/exclamation.svg";
import { FirebaseContext } from "../../../index";
import { useForm } from "react-hook-form";
import { doc, getDoc } from "firebase/firestore";
import { registerWithEmailAndPassword } from "../../../Api/Auth";

const SignUpForm = ({ handleOpenConfirmModal, handleOpenErrorModal }) => {
  const { db } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const candidateRef = doc(db, "users", data.nickname.trim());
    const candidateSnap = await getDoc(candidateRef);

    if (!candidateSnap.exists()) {
      await registerWithEmailAndPassword(data)
        .then((error) => {
          if (error) {
            handleOpenErrorModal(error);
          } else {
            handleOpenConfirmModal();
            reset();
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
            placeholder={placeholder}
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
          {...register("agreement", { required: true })}
        />
        <span>I agree with these rules</span>
        {errors?.agreement ? (
          <div className={`${styles["sign-up-error"]} error`}>
            <Exclamation />
            <p className={"error-message"}>
              Подтвердите, что вы согласны с пользовательским соглашением
            </p>
          </div>
        ) : null}
      </div>
      <button
        className={`${styles["sign-up-button"]} button`}
        type="submit"
        form="sign-up-form"
        disabled={loading}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
