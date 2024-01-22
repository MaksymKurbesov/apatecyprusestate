import React, { FC, useState } from 'react'
import styles from './Wallets.module.scss'
import { useForm } from 'react-hook-form'
import { updateUserWallets } from '../../../../Api/UserData'
import { normalizeUserWallets } from '../../../../utils/helpers/transformersData'
import { useTranslation } from 'react-i18next'
import ButtonWithState, {
  BUTTON_STATE
} from '../../../../Shared UI/ButtonWithState/ButtonWithState'
import { IWallets } from '../../../../@types/IWallets'
import { IContextType } from '../../../../components/ProfileLayout/ProfileLayout'
import { useOutletContext } from 'react-router-dom'

interface IWalletsProps {
  userWallets: IWallets
}

const Wallets: FC<IWalletsProps> = ({ userWallets }) => {
  const { userData } = useOutletContext<IContextType>()
  const { t } = useTranslation()
  const [buttonState, setButtonState] = useState(BUTTON_STATE.idleWallet)

  const { register, handleSubmit } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    setButtonState(BUTTON_STATE.loading)
    updateUserWallets(data, userData.nickname)
      .then(() => {
        setButtonState(BUTTON_STATE.walletsUpdated)
      })
      .catch((e) => {
        setButtonState(BUTTON_STATE.failed)
      })
      .finally(() => {
        setTimeout(() => {
          setButtonState(BUTTON_STATE.idleWallet)
        }, 2000)
      })
  }

  return (
    <div className={styles['wallets']}>
      <h3>{t('settings.wallets')}</h3>

      <form
        className={styles['wallets-form']}
        id={'wallets-form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        {normalizeUserWallets(userWallets).map((wallet) => {
          return (
            <div className={styles['wallet']} key={wallet.name}>
              <label htmlFor={wallet.name}>{wallet.name}</label>
              <div
                className={`${styles['input-wrapper']} custom-bg custom-border`}
              >
                <img
                  className={styles['wallet-icon']}
                  src={wallet.icon}
                  alt={'wallet icon'}
                />
                <input
                  {...register(wallet.name, {
                    value: wallet.number
                  })}
                  type={'text'}
                  placeholder={wallet.placeholder}
                  id={wallet.name}
                />
              </div>
            </div>
          )
        })}
      </form>
      <ButtonWithState buttonState={buttonState} form={'wallets-form'} />
    </div>
  )
}

export default Wallets
