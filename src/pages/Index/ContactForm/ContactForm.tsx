import React, { useState } from 'react'
import Title from '../../../Shared UI/Title/Title'
import styles from './ContactForm.module.scss'
import Input from '../../../Shared UI/Input/Input'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { contactFormNotification } from '../../../Api/Notifications'
import ButtonWithState, {
  BUTTON_STATE
} from '../../../Shared UI/ButtonWithState/ButtonWithState'
import { IContactFormFields } from '../../../@types/IInputs'

const ContactForm = () => {
  const { t } = useTranslation()
  const { register, handleSubmit, reset } = useForm<IContactFormFields>({
    mode: 'onBlur'
  })
  const [buttonState, setButtonState] = useState<BUTTON_STATE>(
    BUTTON_STATE.idleContact
  )

  const contactFormHandler: SubmitHandler<IContactFormFields> = (
    data: IContactFormFields
  ) => {
    setButtonState(BUTTON_STATE.loading)

    try {
      contactFormNotification(data).then(() => {
        setButtonState(BUTTON_STATE.success_send)
        reset()

        setTimeout(() => {
          setButtonState(BUTTON_STATE.idleContact)
        }, 2000)
      })
    } catch (e) {
      console.error(e)
      setButtonState(BUTTON_STATE.idleContact)
    }
  }

  return (
    <section className={styles['contact-form-wrapper']}>
      <Title
        align={'center'}
        text={t('contact_form.title')}
        style={{ marginBottom: 20 }}
      />
      <p data-aos={'fade-down'}>{t('contact_form.subtitle')}</p>
      <form
        className={styles['contact-form']}
        id={'contact-form'}
        onSubmit={handleSubmit(contactFormHandler)}
        data-aos={'fade-right'}
      >
        <Input
          register={register}
          name={'username'}
          type={'text'}
          placeholder={t('contact_form.your_name')}
          validations={{}}
        />
        <Input
          register={register}
          name={'telegram'}
          type={'text'}
          placeholder={t('contact_form.telegram_nickname')}
          validations={{}}
        />
        <Input
          register={register}
          name={'phoneNumber'}
          type={'phone'}
          placeholder={t('contact_form.phone_number')}
          validations={{}}
        />
        <ButtonWithState buttonState={buttonState} form={'contact-form'} />
      </form>
    </section>
  )
}

export default ContactForm
