import React from "react";
import styles from "./TransactionConfirmation.module.scss";
import Bill from "./Bill/Bill";
import Instruction from "./Instruction/Instruction";
import PrivateKey from "./PrivateKey/PrivateKey";
import { useFormContext } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

const TransactionConfirmation = ({
  isPrivateKey,
  isInstruction,
  bill,
  info,
  infoText,
  userWithWallet,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const { userData } = useOutletContext();

  return (
    <>
      {isPrivateKey && (
        <PrivateKey register={register} errors={errors} infoText={infoText} />
      )}
      <Bill
        bill={bill}
        info={info}
        infoText={infoText}
        selectedWallet={watch("wallet")}
      />
      {isInstruction && <Instruction register={register} errors={errors} />}
      {!userWithWallet && (
        <p className={"error"}>
          Укажите кошелёк в настройках для вывода средств!
        </p>
      )}
    </>
  );
};

export default TransactionConfirmation;
