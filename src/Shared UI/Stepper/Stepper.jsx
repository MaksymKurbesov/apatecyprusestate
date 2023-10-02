import React, { useState } from "react";
import styles from "./Stepper.module.scss";
import { ReactComponent as Exclamation } from "../../assets/SVG/exclamation.svg";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Stepper = ({ steps = [], loading }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    clearErrors,
    trigger,
    formState: { errors },
  } = useFormContext();

  const stepIsValid = (stepName) => {
    return trigger(stepName);
  };

  const goPrevPage = (event) => {
    event.preventDefault();

    clearErrors();

    if (currentStep <= 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep((prevState) => prevState - 1);
    }
  };

  const goNextPage = (event, stepName) => {
    event.preventDefault();

    stepIsValid(stepName).then((stepValidity) => {
      if (!stepValidity) {
        return;
      }

      const isLastStep = currentStep >= steps.length;

      if (!isLastStep) {
        setCurrentStep((prevState) => prevState + 1);
      } else {
        setCurrentStep(steps.length);
      }
    });

    clearErrors();
  };

  return (
    <>
      <ul
        className={`${styles["stepper-head"]} ${
          styles[`step${currentStep}of${steps.length}`]
        }`}
      >
        {steps.map((step, index) => {
          return (
            <li
              className={index + 1 === currentStep ? styles["active"] : null}
              key={index}
            >
              {step.title}
            </li>
          );
        })}
      </ul>

      <div className={styles[`step-${steps[currentStep - 1].stepName}`]}>
        {steps[currentStep - 1].content}

        {steps.map((step) => {
          return (
            <ErrorMessage
              key={step.stepName}
              name={step.stepName}
              errors={errors}
              render={({ message }) => (
                <div className={`${styles["stepper-error"]} error`}>
                  <Exclamation />
                  <p>{message}</p>
                </div>
              )}
            />
          );
        })}

        <div className={styles["buttons"]}>
          {currentStep !== 1 ? (
            <button
              onClick={goPrevPage}
              className={`${styles["step-button-back"]} custom-border button`}
            >
              Back
            </button>
          ) : null}

          {currentStep === steps.length ? (
            <button
              type="submit"
              form="cash-in-form"
              className={`${styles["step-button-next"]} button`}
              disabled={loading}
            >
              Done
            </button>
          ) : (
            <button
              onClick={(event) =>
                goNextPage(event, steps[currentStep - 1].stepName)
              }
              className={`${styles["step-button-next"]} button`}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
