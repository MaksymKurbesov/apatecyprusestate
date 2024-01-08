import React, { useContext, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import styles from "./ProfileLayout.module.scss";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useAuthState } from "../../hooks/useAuthState";
import { auth, FirebaseContext } from "../../index";
import { doc, onSnapshot } from "firebase/firestore";
import { getAllDeposits } from "../../Api/Deposits";
import AccountBlocked from "./AccountBlocked/AccountBlocked";
import axios from "axios";

const ProfileLayout = () => {
  const windowSize = useWindowSize();
  const [userData, setUserData] = useState(null);
  const [userDeposits, setUserDeposits] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    const unsubscribeDeposits = getAllDeposits(setUserDeposits);

    const unsubscribeUserData = onSnapshot(
      doc(db, "users", user.displayName),
      async (userSnap) => {
        setUserData(userSnap.data());
        try {
          await axios.post("https://apatecyprusestate-server.site:8000/ip", {
            username: userSnap.data().nickname,
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (e) {
          console.log(e, "profile layout error");
        }

        if (userSnap.data().isBlocked) {
          console.log("work");
          document.body.style.overflow = "hidden";
        }
      }
    );

    return () => {
      unsubscribeDeposits();
      unsubscribeUserData();
    };
  }, [user, loading]);

  if (!userData) {
    return null;
  }

  return (
    <div className={styles["profile-layout"]}>
      <Header rank={userData.rank || "DEFAULT"} />
      {windowSize > 1024 && <ProfileMenu userData={userData} />}
      <Outlet context={{ userData, userDeposits }} />
      {userData.isBlocked && <AccountBlocked />}
      <ScrollRestoration />
    </div>
  );
};

export default ProfileLayout;
