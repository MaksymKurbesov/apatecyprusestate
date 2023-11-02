import React, { useState } from "react";
import styles from "./Settings.module.scss";
import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import Wallets from "./Wallets/Wallets";
import { useOutletContext } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { updateUserInfo } from "../../../Api/UserData";
import { auth } from "../../../index";
import {
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

const Settings = () => {
  const { userData } = useOutletContext();
  const [buttonState, setButtonState] = useState("idleInfo");
  const methods = useForm({
    mode: "onChange",
  });
  const user = auth.currentUser;

  const onSubmit = async (data) => {
    setButtonState("loading");
    await updateUserInfo(data);

    if (data.newPassword !== "" && data.newPassword === data.confirmPassword) {
      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          data.oldPassword
        );

        await reauthenticateWithCredential(user, credential).then(() => {
          updatePassword(user, data.newPassword);
        });
      } catch (e) {
        console.log(e, "error");
        setButtonState("failed");
        setTimeout(() => {
          setButtonState("idleInfo");
        }, 2000);
        return;
      }
    }

    setButtonState("success");
    methods.reset();

    setTimeout(() => {
      setButtonState("idleInfo");
    }, 2000);
  };

  return (
    <div className={styles["settings"]}>
      <FormProvider {...methods}>
        <form
          className={styles["user-info-wrapper"]}
          id={"settings-form"}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Avatar userID={userData.uid} />
          <UserInfo userData={userData} buttonState={buttonState} />
        </form>
      </FormProvider>
      <Wallets userWallets={userData.wallets} />
    </div>
  );
};

export default Settings;
