import React, { FC, useState } from 'react'
import styles from './Settings.module.scss'
import Avatar from './Avatar/Avatar'
import UserInfo from './UserInfo/UserInfo'
import Wallets from './Wallets/Wallets'
import { useOutletContext } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { updateUserInfo } from '../../../Api/UserData'
import { auth } from '../../../index'
import {
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { useAuthState } from '../../../hooks/useAuthState'

interface IFormInputs {
  newPassword: string
  confirmPassword: string
  oldPassword: string
  phoneNumber: string
  telegram: string
  vkontakte: string
  firstName: string
  lastName: string
}

export const Settings: FC = () => {
  const { userData } = useOutletContext<IContextType>()
  const [buttonState, setButtonState] = useState('idleInfo')
  const methods = useForm<IFormInputs>({
    mode: 'onChange'
  })

  const [user, userLoading] = useAuthState(auth)

  const onSubmit = async (data: IFormInputs) => {
    setButtonState('loading')
    await updateUserInfo(data)

    if (data.newPassword !== '' && data.newPassword === data.confirmPassword) {
      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          data.oldPassword
        )

        await reauthenticateWithCredential(user, credential).then(() => {
          updatePassword(user, data.newPassword)
        })
      } catch (e) {
        console.log(e, 'error')
        setButtonState('failed')
        setTimeout(() => {
          setButtonState('idleInfo')
        }, 2000)
        return
      }
    }

    setButtonState('success')
    methods.reset()

    setTimeout(() => {
      setButtonState('idleInfo')
    }, 2000)
  }

  return (
    <div className={styles['settings']}>
      <FormProvider {...methods}>
        <form
          className={styles['user-info-wrapper']}
          id={'settings-form'}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Avatar userID={userData.uid} />
          <UserInfo userData={userData} buttonState={buttonState} />
        </form>
      </FormProvider>
      <Wallets userWallets={userData.wallets} />
    </div>
  )
}
