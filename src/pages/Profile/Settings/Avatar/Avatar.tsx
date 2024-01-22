import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import styles from './Avatar.module.scss'
import { ReactComponent as UploadIcon } from '../../../../assets/SVG/upload.svg'
import { useFormContext } from 'react-hook-form'
import { auth } from '../../../../index'
import AvatarPlaceholder from '../../../../assets/images/avatar-placeholder.jpg'
import { updateUserAvatar } from '../../../../Api/UserData'
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner'
import { useTranslation } from 'react-i18next'
import { getAuth } from 'firebase/auth'
import { useAuthState } from '../../../../hooks/useAuthState'

interface IAvatar {
  userID: string
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

const Avatar: FC<IAvatar> = ({ userID }) => {
  const { t } = useTranslation()
  const { register } = useFormContext()
  const [userAvatar, setUserAvatar] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user.photoURL) {
      setUserAvatar(user.photoURL)
    } else {
      setUserAvatar(AvatarPlaceholder)
    }
  }, [])

  return (
    <div className={`${styles['avatar-wrapper']} custom-bg custom-border`}>
      <div className={styles['avatar']}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <img
            src={userAvatar}
            alt={'User Avatar'}
            width={'100%'}
            height={'100%'}
          />
        )}
      </div>
      <div>
        <span>Your ID</span>
        <p className={styles['user-id']}>{userID.slice(1, 10)}</p>
        <input
          {...register('avatar', {
            onChange: async (e: ChangeEvent) => {
              setLoading(true)

              const target = e.target as HTMLInputElement
              const files = target.files

              if (!files) return

              updateUserAvatar(files[0], setUserAvatar).then(() => {
                setLoading(false)
              })
            }
          })}
          type={'file'}
          id={'upload-avatar'}
          hidden
        />
        <label htmlFor={'upload-avatar'} className={styles['upload-button']}>
          <UploadIcon />
          {t('settings.upload_photo')}
        </label>
      </div>
    </div>
  )
}

export default Avatar
