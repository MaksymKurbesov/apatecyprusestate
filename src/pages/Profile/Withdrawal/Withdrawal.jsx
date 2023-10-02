import React, { useState } from "react";
import styles from "./Withdrawal.module.scss";
import Stepper from "../../../Shared UI/Stepper/Stepper";
import { useForm, FormProvider } from "react-hook-form";
import WalletsList from "../../../components/WalletsList/WalletsList";
import EnterTheAmount from "../../../components/EnterTheAmount/EnterTheAmount";
import TransactionConfirmation from "../../../components/TransactionConfirmation/TransactionConfirmation";
import { addTransaction } from "../../../Api/Transactions";
import { v4 as uuidv4 } from "uuid";
import SuccesModal from "../../../components/SuccesModal/SuccesModal";
import { closeModal, openModal } from "../../../utils/helpers";
import { auth } from "../../../index";
import { useOutletContext } from "react-router-dom";
import EnterTheAmountAddInfo from "./EnterTheAmountAddInfo";
import { getDateNow } from "../../../utils/helpers/date";

const transactionId = uuidv4();

const Withdrawal = () => {
  const { userData } = useOutletContext();
  const [isSuccessModalStatus, setIsSuccessModalStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      amount: 0,
    },
    mode: "onChange",
  });

  const selectedWallet = methods.watch("wallet");
  const amount = methods.watch("amount");

  const onSubmit = async (data) => {
    setLoading(true);
    await addTransaction({
      ...data,
      id: transactionId,
      type: "Вывод",
      executor: data.wallet,
      nickname: auth.currentUser.displayName,
    })
      .then(() => {
        openModal(setIsSuccessModalStatus);
        methods.reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const STEPS = [
    {
      stepName: "wallet",
      title: "Choose a wallet",
      content: <WalletsList />,
    },
    {
      stepName: "amount",
      title: "Enter the amount",
      content: (
        <EnterTheAmount
          additionalInfo={<EnterTheAmountAddInfo amount={amount} />}
          isWithdrawn
        />
      ),
    },
    {
      stepName: "cashInConfirm",
      title: "Transaction confirmation",
      content: (
        <TransactionConfirmation
          isPrivateKey={userData.restrictions.isPrivateKey}
          bill={[
            {
              label: "Payment system",
              value: <p>{selectedWallet}</p>,
            },
            {
              label: "Amount",
              value: <p>{amount.toFixed(2)}</p>,
            },
            {
              label: "Commission",
              value: <p>0.00</p>,
            },
            {
              label: "Date",
              value: getDateNow(),
            },
            {
              label: "Transaction ID",
              value: transactionId.slice(1, 17),
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className={styles["withdrawal"]}>
      <FormProvider {...methods}>
        <form id={"cash-in-form"} onSubmit={methods.handleSubmit(onSubmit)}>
          <Stepper steps={STEPS} loading={loading} />
        </form>
      </FormProvider>
      <SuccesModal
        closeHandler={() => closeModal(setIsSuccessModalStatus)}
        modalStatus={isSuccessModalStatus}
        toTransactionButton
      >
        <h3>Заявка на вывод средств успешно принята!</h3>
        <div className={styles["text"]}>
          <p>
            Мы рады сообщить вам, что ваша заявка на вывод средств была успешно
            принята и находится в обработке. Наши специалисты скоро проверят ваш
            запрос и проведут необходимые действия.
          </p>
          <p>
            Следите за статусом вашей заявки в разделе <span>"Транзакции"</span>
            .
          </p>
        </div>
      </SuccesModal>
    </div>
  );
};

export default Withdrawal;
