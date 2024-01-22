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
import { BUTTON_STATE } from '../../../Shared UI/ButtonWithState/ButtonWithState'
import { ISettingsFormFields } from '../../../@types/IInputs'

export const Settings: FC = () => {
  const { userData } = useOutletContext<IContextType>()
  const [buttonState, setButtonState] = useState(BUTTON_STATE.idleInfo)
  const methods = useForm<ISettingsFormFields>({
    mode: 'onChange'
  })

  const [user, userLoading] = useAuthState(auth)

  const onSubmit = async (data: ISettingsFormFields) => {
    setButtonState(BUTTON_STATE.loading)
    await updateUserInfo(data, userData.nickname)

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
        setButtonState(BUTTON_STATE.failed)
        setTimeout(() => {
          setButtonState(BUTTON_STATE.idleInfo)
        }, 2000)
        return
      }
    }

    setButtonState(BUTTON_STATE.success)
    methods.reset()

    setTimeout(() => {
      setButtonState(BUTTON_STATE.idleInfo)
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
