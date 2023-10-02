import React, { useState } from "react";
import Stepper from "../../../Shared UI/Stepper/Stepper";
import WalletsList from "../../../components/WalletsList/WalletsList";
import EnterTheAmount from "../../../components/EnterTheAmount/EnterTheAmount";
import PlansList from "../../../components/PlansList/PlansList";
import styles from "./MakeDeposit.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import TransactionConfirmation from "../../../components/TransactionConfirmation/TransactionConfirmation";
import { v4 as uuidv4 } from "uuid";
import { closeModal, getPlanByRegion, openModal } from "../../../utils/helpers";
import { addTransaction } from "../../../Api/Transactions";
import { openDeposit } from "../../../Api/Deposits";
import SuccesModal from "../../../components/SuccesModal/SuccesModal";
import { auth } from "../../../index";
import { updateUserBalanceAfterDeposit } from "../../../Api/UserData";
import Projects from "../../../components/Projects/Projects";
import EnterTheAmountAddInfo from "./EnterTheAmountAddInfo";
import {
  calculateIncomeInDay,
  calculateTotalIncome,
} from "../../../utils/helpers/calculates";
import { getDateNow } from "../../../utils/helpers/date";

const transactionId = uuidv4();

const MakeDeposit = () => {
  const [isSuccessModalStatus, setIsSuccessModalStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      amount: 0,
    },
    mode: "onChange",
  });

  const selectedPlan = methods.watch("region");
  const selectedProject = methods.watch("project");
  const selectedWallet = methods.watch("wallet");
  const amount = methods.watch("amount");

  const onSubmit = async (data) => {
    setLoading(true);
    await addTransaction({
      ...data,
      id: transactionId,
      status: "Выполнено",
      type: "Вклад",
      executor: data.wallet,
      nickname: auth.currentUser.displayName,
    });

    await openDeposit({ ...data, ...getPlanByRegion(data.region) })
      .then(() => {
        openModal(setIsSuccessModalStatus);
        methods.reset();
      })
      .finally(() => {
        setLoading(false);
      });

    await updateUserBalanceAfterDeposit(data.wallet, data.amount);
  };

  const STEPS = [
    {
      stepName: "region",
      title: "Choose a region",
      content: <PlansList isPayNow={false} />,
    },
    {
      stepName: "project",
      title: "Choose a project",
      content: <Projects />,
    },
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
          additionalInfo={
            <EnterTheAmountAddInfo
              amount={amount}
              selectedPlan={selectedPlan}
            />
          }
          isMakeDeposit
        />
      ),
    },
    {
      stepName: "makeDepositConfirm",
      title: "Transaction confirmation",
      content: (
        <TransactionConfirmation
          bill={[
            {
              label: "Region",
              value: <p>{selectedPlan}</p>,
            },
            {
              label: "Project",
              value: <p>{selectedProject}</p>,
            },
            {
              label: "Payment system",
              value: <p>{selectedWallet}</p>,
            },
            {
              label: "Amount",
              value: <p>{amount.toFixed(2)}</p>,
            },
            {
              label: "Income in day",
              value: <p>{calculateIncomeInDay(amount, selectedPlan)}</p>,
            },
            {
              label: "Total income",
              value: <p>{calculateTotalIncome(amount, selectedPlan)}</p>,
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
    <div className={styles["make-deposit"]}>
      <FormProvider {...methods}>
        <form id={"cash-in-form"} onSubmit={methods.handleSubmit(onSubmit)}>
          <Stepper steps={STEPS} loading={loading} />
        </form>
      </FormProvider>
      <SuccesModal
        closeHandler={() => closeModal(setIsSuccessModalStatus)}
        modalStatus={isSuccessModalStatus}
      >
        <h3>Инвестиционный план успешно открыт!</h3>
        <div className={styles["text"]}>
          <p>
            Мы рады сообщить вам, что ваш запрос на открытие инвестиционного
            плана (депозита) был успешно выполнен.
          </p>
          <p>
            Вы можете отслеживать начисления и дополнительную информацию по
            депозиту в личном кабинете.
          </p>
        </div>
      </SuccesModal>
    </div>
  );
};

export default MakeDeposit;
