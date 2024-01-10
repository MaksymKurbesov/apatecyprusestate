import React from 'react'
import styles from './Input.module.scss'
import { ReactComponent as ErrorIcon } from '../../assets/SVG/exclamation.svg'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface IInput {
  name: string
  type: string
  register: UseFormRegister<any>
  placeholder: string
  validations: RegisterOptions
  error?: any
  errorMessages?: any
  watch?: any
}

const addCustomValidation = (
  validations: RegisterOptions,
  customValidation: (v: string) => string
) => {
  return { ...validations, validate: customValidation }
}

const Input = ({
  name,
  type,
  register,
  placeholder,
  validations,
  error,
  errorMessages,
  watch
}: IInput) => {
  const validateConfirmPassword = (v: string) => {
    if (watch('password') !== v) {
      return 'Пароль не совпадает'
    }

    return ''
  }

  const updatedValidations =
    name === 'confirmPassword'
      ? addCustomValidation(validations, validateConfirmPassword)
      : validations

  return (
    <div className={styles['input-wrapper']}>
      <input
        className={`${styles['custom-input']} ${
          error ? styles['input-error'] : null
        }`}
        {...register(name, {
          ...updatedValidations
        })}
        type={type ? type : 'text'}
      />
      <label className={styles['label']}>
        {validations?.required ? `${placeholder} *` : placeholder}
      </label>
      {error ? (
        <div className={`${styles['sign-up-error']} error`}>
          <p className={'error-message'}>{errorMessages[error.type]}</p>
          <ErrorIcon />
        </div>
      ) : null}
    </div>
  )
}

export default Input
