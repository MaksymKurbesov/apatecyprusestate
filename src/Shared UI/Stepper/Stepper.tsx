import React, { MouseEvent, useState } from 'react'
import styles from './Stepper.module.scss'
import { ReactComponent as Exclamation } from '../../assets/SVG/exclamation.svg'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useTranslation } from 'react-i18next'

interface IStepper {
  steps: any[]
  loading: boolean
  isRestrictions?: boolean
}

const Stepper = ({ steps = [], loading, isRestrictions }: IStepper) => {
  const { t } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)

  const {
    clearErrors,
    trigger,
    formState: { errors },
    getValues
  } = useFormContext()

  const stepIsValid = (stepName: string) => {
    return trigger(stepName)
  }

  const goPrevPage = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    clearErrors()

    if (currentStep <= 1) {
      setCurrentStep(1)
    } else {
      setCurrentStep((prevState) => prevState - 1)
    }
  }

  const goNextPage = (
    event: MouseEvent<HTMLButtonElement>,
    stepName: string
  ) => {
    event.preventDefault()

    if (getValues('region') === 'Individual') {
      return
    }

    stepIsValid(stepName).then((stepValidity) => {
      if (!stepValidity) {
        return
      }

      const isLastStep = currentStep >= steps.length

      if (!isLastStep) {
        setCurrentStep((prevState) => prevState + 1)
      } else {
        setCurrentStep(steps.length)
      }
    })

    clearErrors()
  }

  return (
    <>
      <ul
        className={`${styles['stepper-head']} ${
          styles[`step${currentStep}of${steps.length}`]
        }`}
      >
        {steps.map((step, index) => {
          return (
            <li
              className={index + 1 === currentStep ? styles['active'] : null}
              key={index}
            >
              {step.title}
            </li>
          )
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
                <div className={`${styles['stepper-error']} error`}>
                  <Exclamation />
                  <p>{message}</p>
                </div>
              )}
            />
          )
        })}

        <div className={styles['buttons']}>
          {currentStep !== 1 ? (
            <button
              onClick={(e) => goPrevPage(e)}
              className={`${styles['step-button-back']} custom-border button`}
            >
              {t('back')}
            </button>
          ) : null}

          {currentStep === steps.length ? (
            <button
              type="submit"
              form="cash-in-form"
              className={`${styles['step-button-next']} button`}
              disabled={loading}
            >
              {t('done')}
            </button>
          ) : (
            <button
              onClick={(event) =>
                goNextPage(event, steps[currentStep - 1].stepName)
              }
              className={`${styles['step-button-next']} button`}
              disabled={isRestrictions}
            >
              {t('next')}
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default Stepper
