import React from 'react'
import Bill from './Bill/Bill'
import Instruction from './Instruction/Instruction'
import PrivateKey from './PrivateKey/PrivateKey'
import { useFormContext } from 'react-hook-form'

interface ITransactionConfirmation {
  isPrivateKey?: boolean
  isInstruction?: boolean
  bill: any[]
  info?: boolean
  infoText?: any
  userWithWallet?: boolean
  isWithdrawal?: boolean
}

const TransactionConfirmation = ({
  isPrivateKey,
  isInstruction,
  bill,
  info,
  infoText,
  userWithWallet,
  isWithdrawal
}: ITransactionConfirmation) => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      {isPrivateKey && (
        <PrivateKey register={register} errors={errors} infoText={infoText} />
      )}
      <Bill
        bill={bill}
        info={info}
        infoText={infoText}
        selectedWallet={watch('wallet')}
      />
      {isInstruction && <Instruction register={register} errors={errors} />}
      {!userWithWallet && isWithdrawal && (
        <p className={'error'}>
          Укажите кошелёк в настройках для вывода средств!
        </p>
      )}
    </>
  )
}

export default TransactionConfirmation
