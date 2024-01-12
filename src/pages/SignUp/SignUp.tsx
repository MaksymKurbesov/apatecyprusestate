import React, { FC, useState } from 'react'
import SectionLabel from '../../Shared UI/SectionLabel/SectionLabel'
import Title from '../../Shared UI/Title/Title'
import styles from './SignUp.module.scss'
import { ScrollRestoration, useSearchParams } from 'react-router-dom'
import SignUpForm from './SignUpForm/SignUpForm'
import ConfirmRegistrationModal from './ConfirmRegistrationModal/ConfirmRegistrationModal'
import ErrorRegistrationModal from './ErrorRegistrationModal/ErrorRegistrationModal'
import { closeModal, openModal } from '../../utils/helpers'
import { useTranslation } from 'react-i18next'
import Agreement from '../../components/Agreement/Agreement'
import { useForm, FormProvider } from 'react-hook-form'
import { ISignUpFields } from '../../@types/IInputs'

export const SignUp: FC = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [isAgreementOpen, setIsAgreementOpen] = useState(false)

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  const methods = useForm<ISignUpFields>({
    mode: 'onBlur',
    defaultValues: {
      referredBy: searchParams.get('ref') || ''
    }
  })

  const agreementHandler = (value: boolean) => {
    methods.setValue('agreement', value)
    methods.trigger('agreement')
  }

  return (
    <div className={styles['sign-up']}>
      <SectionLabel
        text={t('sign_up.authorization')}
        style={{ marginBottom: 30 }}
      />
      <Title text={t('sign_up.sign_up')} style={{ marginBottom: 30 }} />
      <p className={styles['subtitle']}>{t('sign_up.subtitle')}</p>
      <FormProvider {...methods}>
        <SignUpForm
          handleOpenAgreement={() => openModal(setIsAgreementOpen)}
          handleOpenConfirmModal={() => openModal(setIsConfirmModalOpen)}
          handleOpenErrorModal={(error: string) => {
            setErrorMessage(error)
            openModal(setIsErrorModalOpen)
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
  )
}
