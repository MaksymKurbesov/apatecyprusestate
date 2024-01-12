import React, { FC } from 'react'
import styles from './ButtonWithState.module.scss'
import { useTranslation } from 'react-i18next'

export enum BUTTON_STATE {
  success,
  success_send,
  failed,
  walletsUpdated,
  idleInfo,
  idleWallet,
  idleContact,
  loading
}

interface IButtonWithState {
  buttonState: BUTTON_STATE
  form: string
}

const ButtonWithState: FC<IButtonWithState> = ({ buttonState, form }) => {
  const { t } = useTranslation(['main', 'our-contacts'])

  const BUTTON_STATE_MAP = {
    [BUTTON_STATE.success]: t('settings.updated'),
    [BUTTON_STATE.success_send]: t('success_send', { ns: 'our-contacts' }),
    [BUTTON_STATE.failed]: t('settings.error'),
    [BUTTON_STATE.walletsUpdated]: t('settings.wallets_updated'),
    [BUTTON_STATE.idleInfo]: t('settings.update_info'),
    [BUTTON_STATE.idleWallet]: t('settings.update_wallet'),
    [BUTTON_STATE.idleContact]: t('contact_form.contact_us'),
    [BUTTON_STATE.loading]: t('settings.loading')
  }

  const isSuccess =
    buttonState === BUTTON_STATE.success ||
    buttonState === BUTTON_STATE.walletsUpdated ||
    buttonState === BUTTON_STATE.success_send

  return (
    <button
      className={`${isSuccess ? styles['success-button'] : ''} ${
        buttonState === BUTTON_STATE.failed ? styles['failed-button'] : ''
      } ${styles['buttonState']} button`}
      type="submit"
      form={form}
      disabled={buttonState === BUTTON_STATE.loading}
    >
      {BUTTON_STATE_MAP[buttonState]}
    </button>
  )
}

export default ButtonWithState
