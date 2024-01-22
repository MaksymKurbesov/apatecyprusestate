import React, { FC, useState } from 'react'
import styles from './Bill.module.scss'
import { ReactComponent as InfoIcon } from '../../../assets/SVG/info-circle.svg'
import ColoredLabel from '../../ColoredLabel/ColoredLabel'
import { WALLETS } from '../../../utils/consts'
import { useTranslation } from 'react-i18next'
import Popup from '../../Popup/Popup'

export interface IBill {
  label: any
  value: any
}

interface IBillProps {
  bill: IBill[]
  info?: boolean
  infoText: any
  selectedWallet: string
}

const Bill: FC<IBillProps> = ({ bill, info, infoText, selectedWallet }) => {
  const { t } = useTranslation()
  const [isInfoHovered, setIsInfoHovered] = useState(false)

  return (
    <div className={`${styles['bill']} custom-bg custom-border`}>
      <h3>
        {t('bill.transaction_confirmation')}
        {info && (
          <InfoIcon
            onMouseOver={() => setIsInfoHovered(true)}
            onMouseOut={() => setIsInfoHovered(false)}
            className={styles['info-icon']}
          />
        )}
      </h3>

      <div
        className={`${isInfoHovered ? styles['show-pop-up'] : ''} ${
          styles['pop-up-wrapper']
        }`}
      >
        <Popup text={infoText} />
      </div>

      <ul>
        {bill.map((row) => {
          let rowWithCurrencyLabel =
            row.label === t('bill.amount') ||
            row.label === t('bill.income_in_day') ||
            row.label === t('bill.total_income') ||
            row.label === t('bill.commission') ||
            row.label === t('bill.will_be_received')

          const wallet = WALLETS.find(
            (wallet) => wallet.name === selectedWallet
          )

          // const walletIcon =
          //   !!selectedWallet &&
          //   WALLETS.find((wallet) => wallet.name === selectedWallet).icon

          return (
            <li className={styles['row']} key={row.label}>
              <p>{row.label}:</p>
              <span className={styles['dotted-line']}></span>
              <div className={styles['value']}>
                {row.label === t('bill.payment_system') && (
                  <div className={styles['wallet-icon']}>
                    {wallet && (
                      <img src={wallet.icon} alt={'selected wallet'} />
                    )}
                  </div>
                )}
                {row.value}
                {rowWithCurrencyLabel && <ColoredLabel text={'USD'} />}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bill
