import React, { FC } from 'react'
import styles from './UserInfo.module.scss'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import ButtonWithState, {
  BUTTON_STATE
} from '../../../../Shared UI/ButtonWithState/ButtonWithState'

interface IUserInfo {
  userData: any
  buttonState: BUTTON_STATE
}

const UserInfo: FC<IUserInfo> = ({ userData, buttonState }) => {
  const { register } = useFormContext()
  const { t } = useTranslation()

  return (
    <div className={styles['user-info']}>
      <h3>{t('settings.title')}</h3>
      <div className={styles['inputs-wrapper']}>
        <label className={styles['nickname']}>
          <p>{t('sign_up.Nickname')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input type={'text'} value={userData.nickname} disabled />
          </div>
        </label>
        <label className={styles['email']}>
          <p>{t('sign_up.E-mail')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input type={'text'} value={userData.email} disabled />
          </div>
        </label>
        <label className={styles['first-name']}>
          <p>{t('sign_up.first_name')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input
              {...register('firstName', {
                value: userData.firstName
              })}
              type={'text'}
            />
          </div>
        </label>
        <label className={styles['last-name']}>
          <p>{t('sign_up.last_name')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input
              {...register('lastName', {
                value: userData.lastName
              })}
              type={'text'}
            />
          </div>
        </label>
        <label className={styles['phone-number']}>
          <p>{t('sign_up.Phone number')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input
              {...register('phoneNumber', {
                value: userData.contacts.phoneNumber
              })}
              type={'text'}
            />
          </div>
        </label>
        <label className={styles['telegram']}>
          <p>Telegram</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input
              {...register('telegram', {
                value: userData.contacts.telegram
              })}
              type={'text'}
            />
          </div>
        </label>
        <label className={styles['vkontakte']}>
          <p>Vkontakte</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input
              {...register('vkontakte', {
                value: userData.contacts.vk
              })}
              type={'text'}
            />
          </div>
        </label>
        <label className={styles['old-password']}>
          <p>{t('sign_up.old_password')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input {...register('oldPassword')} type={'password'} />
          </div>
        </label>
        <label className={styles['new-password']}>
          <p>{t('sign_up.new_password')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input {...register('newPassword')} type={'password'} />
          </div>
        </label>
        <label className={styles['confirm-password']}>
          <p>{t('sign_up.Confirm password')}</p>
          <div className={`${styles['input-wrapper']} custom-border`}>
            <input {...register('confirmPassword')} type={'password'} />
          </div>
        </label>
      </div>
      <ButtonWithState buttonState={buttonState} form={'settings-form'} />
    </div>
  )
}

export default UserInfo
