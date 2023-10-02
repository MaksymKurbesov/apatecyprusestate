import { MENU_ITEMS } from "../components/ProfileMenu/ProfileMenu";
import { PLANS, REFERRALS_LEVEL, WALLETS } from "./consts";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../index";

export const openModal = (stateHandler) => {
  document.body.style.overflow = "hidden";
  stateHandler(true);
};

export const closeModal = (stateHandler) => {
  document.body.style.overflow = "visible";
  stateHandler(false);
};

export const addReferralToAllLevels = async (referredBy, signedUpUser) => {
  if (referredBy === "") {
    return;
  }

  try {
    let currentReferralLevel = 1;

    const addReferral = async (referredBy) => {
      if (currentReferralLevel > REFERRALS_LEVEL || referredBy === "") {
        return;
      }

      const referredByDoc = doc(db, "users", referredBy);
      const nextReferredBy = await getDoc(referredByDoc);

      if (!nextReferredBy.exists()) {
        return;
      }

      await updateDoc(referredByDoc, {
        [`referredTo.${currentReferralLevel}`]: arrayUnion(signedUpUser),
      });

      currentReferralLevel++;

      await addReferral(nextReferredBy.data().referredBy);
    };

    await addReferral(referredBy);
  } catch (e) {
    console.error(e);
  }
};

export const getPlanByRegion = (name) => {
  return PLANS.filter((plan) => plan.name === name)[0];
};

function calculateNextInterestDate(deposit) {
  const nextInterestDate = new Date(deposit.lastAccrual.seconds * 1000);

  if (deposit.planNumber < 4) {
    nextInterestDate.setDate(nextInterestDate.getDate() + 1); // Следующий день
  } else {
    nextInterestDate.setDate(nextInterestDate.getDate() + deposit.days); // Добавить весь срок депозита
  }

  return nextInterestDate;
}

export const getNearestAccrual = (deposits) => {
  let earliestInterestDate = null;
  let depositWithEarliestInterest = null;
  const activeDeposits = deposits.filter((item) => item.isActive);

  for (const deposit of activeDeposits) {
    const nextInterestDate = calculateNextInterestDate(deposit);

    if (!earliestInterestDate || nextInterestDate < earliestInterestDate) {
      earliestInterestDate = nextInterestDate;
      depositWithEarliestInterest = deposit;
    }
  }

  return depositWithEarliestInterest;
};

export const getPagePath = (path) => {
  return path.split("/")[2];
};

export const getActiveMenuItem = (pathname) => {
  return MENU_ITEMS.find((item) => item.path === getPagePath(pathname));
};

export const checkIsDigitals = (dig) => {
  return !new RegExp(/[^0-9.]/g).test(dig);
};

export const addCustomUserFields = (user, phoneNumber) => {
  const wallets = {};

  WALLETS.forEach((wallet) => {
    wallets[wallet.name] = {
      available: 0,
      deposited: 0,
      withdrawn: 0,
      referrals: 0,
      number: "",
    };
  });

  return {
    wallets: {
      ...wallets,
    },
    referrals: 0,
    invested: 0,
    earned: 0,
    withdrawn: 0,
    registrationDate: new Date(user.metadata.creationTime),
    referredTo: { 1: [], 2: [], 3: [], 4: [], 5: [] },
    restrictions: {
      isPrivateKey: false,
    },
    firstName: "",
    lastName: "",
    contacts: {
      phoneNumber,
      telegram: "",
      vk: "",
    },
    uid: user.uid,
  };
};
