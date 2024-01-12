import React, { FC } from 'react'
import styles from './Wallet.module.scss'
import ColoredLabel from '../../../../../components/ColoredLabel/ColoredLabel'
import { useTranslation } from 'react-i18next'
import { IWallet } from '../../../../../@types/IWallets'

interface IWalletProps {
  wallet: IWallet
}

const Wallet: FC<IWalletProps> = ({ wallet }) => {
  const { t } = useTranslation()
  const { name, label, available, deposited, withdrawn, referrals } = wallet

  return (
    <div className={`${styles['wallet']} custom-bg custom-border`}>
      <div className={styles['name']}>
        <div className={styles['icon']}>
          <img src={wallet.icon} alt={'Wallet Icon'} />
        </div>
        <span>{name}</span>
        <ColoredLabel text={label} />
      </div>
      <ul className={styles['information']}>
        <li>
          <p>{t('personal_area.available')}</p>
          <span>${available.toFixed(2)}</span>
        </li>
        <li>
          <p>{t('personal_area.deposited')}</p>
          <span>${deposited.toFixed(2)}</span>
        </li>
        <li>
          <p>{t('personal_area.withdrawn')}</p>
          <span>${withdrawn.toFixed(2)}</span>
        </li>
        <li>
          <p>{t('personal_area.referrals')}</p>
          <span>${referrals.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  )
}

export default Wallet
