import React, { FC, useState } from 'react'
import Stepper from '../../../Shared UI/Stepper/Stepper'
import WalletsList from '../../../components/WalletsList/WalletsList'
import styles from './CashIn.module.scss'
import EnterTheAmount from '../../../components/EnterTheAmount/EnterTheAmount'
import { useForm, FormProvider } from 'react-hook-form'
import TransactionConfirmation from '../../../components/TransactionConfirmation/TransactionConfirmation'
import ColoredLabel from '../../../components/ColoredLabel/ColoredLabel'
import { addTransaction } from '../../../Api/Transactions'
import { closeModal, openModal } from '../../../utils/helpers'
import { v4 as uuidv4 } from 'uuid'
import SuccessModal from '../../../components/SuccesModal/SuccessModal'
import { auth } from '../../../index'
import { getDateNow } from '../../../utils/helpers/date'
import { useTranslation } from 'react-i18next'
import { telegramNotification } from '../../../Api/Notifications'
import { useOutletContext } from 'react-router-dom'
import { IContextType } from '../../../components/ProfileLayout/ProfileLayout'
import { ICashInFormFields } from '../../../@types/IInputs'
import { serverTimestamp } from 'firebase/firestore'

export const CashIn: FC = () => {
  const { t } = useTranslation()
  const [isSuccessModalStatus, setIsSuccessModalStatus] = useState(false)
  const [loading, setLoading] = useState(false)
  const { userData } = useOutletContext<IContextType>()

  const methods = useForm<ICashInFormFields>({
    mode: 'onChange'
  })

  const selectedWallet = methods.watch('wallet')
  const amount = methods.watch('amount')

  const onSubmit = async (data: ICashInFormFields) => {
    setLoading(true)
    await addTransaction({
      ...data,

      id: uuidv4(),
      type: 'Пополнение',
      executor: data.wallet,
      nickname: userData.nickname,
      status: 'Ожидание',
      date: serverTimestamp(),
      rank: userData.rank || 'DEFAULT'
    })
    await telegramNotification({ ...data, type: 'Пополнение' })
    openModal(setIsSuccessModalStatus)
    methods.reset()
    setLoading(false)
  }

  const STEPS = [
    {
      stepName: 'wallet',
      title: t('stepper.choose_wallet'),
      content: <WalletsList />
    },
    {
      stepName: 'amount',
      title: t('stepper.enter_amount'),
      content: (
        <EnterTheAmount
          // additionalInfo={
          //   <p>
          //     {t('bill.commission')}:<span> 0.00 USD</span>
          //   </p>
          // }
          amount={amount}
          selectedWallet={selectedWallet}
        />
      )
    },
    {
      stepName: 'cashInConfirm',
      title: t('stepper.transaction_confirmation'),
      content: (
        <TransactionConfirmation
          info
          infoText={t('popups.cash_in_popup')}
          isInstruction={true}
          bill={[
            {
              label: t('bill.payment_system'),
              value: <p>{selectedWallet}</p>
            },
            {
              label: t('bill.amount'),
              value: <p>{Number(amount).toFixed(2)}</p>
            },
            {
              label: t('bill.commission'),
              value: <p>0.00</p>
            },
            {
              label: t('bill.date'),
              value: getDateNow()
            },
            {
              label: t('bill.status'),
              value: <ColoredLabel text={t('waiting_for_payment')} />
            }
          ]}
        />
      )
    }
  ]

  return (
    <div className={styles['cash-in']}>
      <FormProvider {...methods}>
        <form id={'cash-in-form'} onSubmit={methods.handleSubmit(onSubmit)}>
          <Stepper steps={STEPS} loading={loading} />
        </form>
      </FormProvider>
      <SuccessModal
        closeHandler={() => closeModal(setIsSuccessModalStatus)}
        modalStatus={isSuccessModalStatus}
        toTransactionButton
      >
        <h3>Заявка на пополнение кошелька успешно принята!</h3>
        <div className={styles['text']}>
          <p>
            Мы хотели бы сообщить вам, что ваша заявка на пополнение личного
            кошелька успешно принята и находится в обработке. Наши специалисты
            скоро проверят ваш запрос и проведут необходимые действия.
          </p>
          <p>
            Следите за статусом вашей заявки в разделе <span>"Транзакции"</span>
            .
          </p>
        </div>
      </SuccessModal>
    </div>
  )
}
