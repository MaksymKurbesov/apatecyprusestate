import React, { FC, useEffect, useState } from 'react'
import SectionLabel from '../../Shared UI/SectionLabel/SectionLabel'
import Title from '../../Shared UI/Title/Title'
import styles from './SignIn.module.scss'
import Input from '../../Shared UI/Input/Input'
import { NavLink, ScrollRestoration, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuthState } from '../../hooks/useAuthState'
import { auth } from '../../index'
import { logInWithEmailAndPassword } from '../../Api/Auth'
import { ReactComponent as Exclamation } from '../../assets/SVG/exclamation.svg'
import { ReactComponent as OpenEye } from '../../assets/SVG/eye.svg'
import { useTranslation } from 'react-i18next'
import Modal from '../../Shared UI/Modal/Modal'
import { closeModal, openModal } from '../../utils/helpers'
import { sendPasswordResetEmail } from 'firebase/auth'

interface IFormInput {
  email: string
  password: string
}

export const SignIn: FC = () => {
  const { t } = useTranslation()
  const [user, userLoading] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [signInError, setSignInError] = useState<string>()
  const [passwordShown, setPasswordShown] = useState(false)
  const { register, handleSubmit } = useForm<IFormInput>({
    mode: 'onBlur'
  })

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('')
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('')
  const [isOpenForgotPasswordModal, setIsOpenForgotPasswordModal] =
    useState(false)

  useEffect(() => {
    if (user) navigate('/profile/personal-area')
  }, [user])

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown)
  }

  const forgotPasswordHandler = async () => {
    try {
      await sendPasswordResetEmail(auth, forgotPasswordEmail)
      setForgotPasswordEmail('')
      setForgotPasswordMessage(
        'Письмо с восстановлением пароля успешно отправлено!'
      )
    } catch (e) {
      setForgotPasswordMessage('Такого пользователя не существует!')
      console.log(e, 'error')
    }
  }

  const signInHandler = async (data: IFormInput) => {
    setLoading(true)

    await logInWithEmailAndPassword(data.email, data.password)
      .then((error) => {
        setSignInError(error)
      })
      .catch((e) => {
        alert(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  if (userLoading) {
    return <div className={'suspense'}>Loading...</div>
  }

  return (
    <div className={styles['sign-in']}>
      <SectionLabel
        text={t('log_in.authorization')}
        style={{ marginBottom: 30 }}
      />
      <Title text={t('log_in.title')} style={{ marginBottom: 30 }} />
      <p className={styles['subtitle']}>{t('log_in.subtitle')}</p>
      <form
        id={'sign-in-form'}
        onSubmit={handleSubmit(signInHandler)}
        className={styles['sign-in-form']}
      >
        <Input
          type={'text'}
          register={register}
          name={'email'}
          placeholder={t('log_in.your_email')}
          validations={{}}
        />
        <div className={styles['password-input']}>
          <Input
            register={register}
            type={passwordShown ? 'text' : 'password'}
            name={'password'}
            placeholder={t('log_in.your_password')}
            validations={{}}
          />

          <OpenEye
            className={`${styles['eye-icon']} ${
              passwordShown && styles['active-eye']
            }`}
            onClick={togglePasswordVisibility}
          />
        </div>

        {signInError ? (
          <div className={`${styles['sign-in-error']} error`}>
            <Exclamation />
            <p className={'error-message'}>{signInError}</p>
          </div>
        ) : null}

        <div className={styles['remember-me']}>
          <input type={'checkbox'} />
          <span>{t('log_in.remember_me')}</span>
        </div>
        <p
          onClick={() => openModal(setIsOpenForgotPasswordModal)}
          className={styles['forgot-password']}
        >
          {t('log_in.forgot_password')}
        </p>
        <NavLink
          className={styles['dont-have-account']}
          to={'/authorization/sign-up'}
        >
          {t('log_in.you_dont_have_account')}
        </NavLink>
        <button
          type={'submit'}
          className={`${styles['log-in-button']} button`}
          form="sign-in-form"
          disabled={loading}
        >
          {t('log_in.log_in')}
        </button>
      </form>
      <ScrollRestoration />
      <Modal
        handleClose={() => closeModal(setIsOpenForgotPasswordModal)}
        isOpen={isOpenForgotPasswordModal}
        closeOnEsc
      >
        <div
          onClick={() => closeModal(setIsOpenForgotPasswordModal)}
          className={styles['close-button']}
        >
          <span></span>
          <span></span>
        </div>
        <h3>Забыли пароль?</h3>
        <p>
          Уважаемый пользователь! Если вы забыли свой пароль, не беспокойтесь!
          Вы можете легко восстановить доступ к своему аккаунту. Просто введите
          свой электронный адрес в поле ниже, и мы отправим вам инструкции по
          сбросу пароля.
        </p>
        <div className={styles['forgot-password-wrapper']}>
          <input
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            className={styles['forgot-password-input']}
            placeholder={'Введите email'}
          />
          <p
            className={`${
              forgotPasswordMessage !== 'Такого пользователя не существует!'
                ? styles['success-message']
                : styles['error-message']
            } ${styles['message']}`}
          >
            {forgotPasswordMessage}
          </p>
          <button onClick={forgotPasswordHandler} className={'button'}>
            Восстановить пароль
          </button>
        </div>
      </Modal>
    </div>
  )
}
