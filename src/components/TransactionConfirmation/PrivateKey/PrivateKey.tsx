import React, { FC, useState } from 'react'
import styles from './PrivateKey.module.scss'
import { ReactComponent as InfoIcon } from '../../../assets/SVG/info-circle.svg'
import { ReactComponent as Exclamation } from '../../../assets/SVG/exclamation.svg'
import { ErrorMessage } from '@hookform/error-message'
import { useTranslation } from 'react-i18next'
import Popup from '../../Popup/Popup'

interface IPrivateKeyProps {
  register: any
  errors: any
  infoText: any
}

const PrivateKey: FC<IPrivateKeyProps> = ({ register, errors, infoText }) => {
  const { t } = useTranslation()
  const [isInfoHovered, setIsInfoHovered] = useState(false)

  return (
    <div className={`${styles['private-key']} custom-border`}>
      <p>
        {t('private_key.title')}
        <InfoIcon
          onMouseOver={() => setIsInfoHovered(true)}
          onMouseOut={() => setIsInfoHovered(false)}
          className={styles['info-icon']}
        />
      </p>
      <div
        className={`${isInfoHovered ? styles['show-pop-up'] : ''} ${
          styles['pop-up-wrapper']
        }`}
      >
        <Popup text={infoText} />
      </div>
      <input
        {...register('private-key', {
          required: 'Введите пожалуйста приватный финансовый ключ'
        })}
        type={'text'}
        placeholder={t('private_key.placeholder')}
      />
      <ErrorMessage
        name={'private-key'}
        errors={errors}
        render={({ message }) => (
          <div className={`${styles['private-key-error']} error`}>
            <Exclamation />
            <p>{message}</p>
          </div>
        )}
      />
    </div>
  )
}

export default PrivateKey
