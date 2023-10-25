import { MENU_ITEMS } from "../components/ProfileLayout/ProfileMenu/ProfileMenu";
import { PLANS, WALLETS } from "./consts";
import {
  arrayUnion,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import { db } from "../index";
import { addTransaction } from "../Api/Transactions";
import { v4 as uuidv4 } from "uuid";
import { RANKS } from "./PERCENTAGES_BY_RANK";

export const openModal = (stateHandler) => {
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "17px";
  stateHandler(true);
};

export const closeModal = (stateHandler) => {
  document.body.style.overflow = "visible";
  document.body.style.paddingRight = "0";
  stateHandler(false);
};

export const addReferralRewards = async (
  executorNickname,
  amount,
  wallet,
  userRank
) => {
  const referralLength = Object.keys(userRank).length;

  try {
    let currentReferralLevel = 1;

    const addReward = async (referredBy, amount, wallet) => {
      const referredByDoc = doc(db, "users", referredBy);
      const referredBySnap = await getDoc(referredByDoc);
      const referralNotFound = referredBy === "" || !referredBySnap.exists();

      if (currentReferralLevel > referralLength || referralNotFound) {
        return;
      }

      const referralReward = (amount / 100) * userRank[currentReferralLevel];

      await updateDoc(referredByDoc, {
        referals: increment(referralReward),
        [`wallets.${wallet}.referrals`]: increment(referralReward),
        [`wallets.${wallet}.available`]: increment(referralReward),
      });

      await addTransaction({
        amount: referralReward,
        executor: executorNickname,
        id: uuidv4(),
        nickname: referredBySnap.data().nickname,
        status: "Выполнено",
        type: "Реферальные",
        wallet,
      });

      currentReferralLevel++;

      await addReward(referredBySnap.data().referredBy, amount, wallet);
    };

    const userRef = doc(db, "users", executorNickname);

    await getDoc(userRef).then(async (user) => {
      await addReward(user.data().referredBy, amount, wallet);
    });
  } catch (e) {
    console.error(e);
  }
};

export const addReferralToAllLevels = async (referredBy, signedUpUser) => {
  if (referredBy === "") {
    return;
  }

  try {
    let currentReferralLevel = 1;

    const addReferral = async (referredBy) => {
      const referredByDoc = doc(db, "users", referredBy);
      const nextReferredBy = await getDoc(referredByDoc);

      const referralLength = Object.keys(
        RANKS[nextReferredBy.rank || "DEFAULT"]
      ).length;

      if (currentReferralLevel > referralLength || referredBy === "") {
        return;
      }

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

export const sortWalletsByAvailable = (wallets) => {
  return wallets.sort((a, b) => b.available - a.available);
};

export const getCorrectWallets = (userWallets) => {
  return WALLETS.filter((wallet) =>
    userWallets.hasOwnProperty(wallet.name)
  ).map((wallet) => ({
    ...wallet,
    available: userWallets[wallet.name].available,
    deposited: userWallets[wallet.name].deposited,
    withdrawn: userWallets[wallet.name].withdrawn,
    referrals: userWallets[wallet.name].referrals,
    number: userWallets[wallet.name].number,
  }));
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

export const hasActiveRestrictions = (restrictions) => {
  return Object.keys(restrictions).some((key) => {
    if (typeof restrictions[key] === "boolean" && key !== "isPrivateKey") {
      return restrictions[key];
    }
    if (
      typeof restrictions[key] === "object" &&
      restrictions[key].isActive !== undefined
    ) {
      return restrictions[key].isActive;
    }
    return false;
  });
};

export const getActiveRestriction = (restrictions) => {
  for (let key in restrictions) {
    if (
      typeof restrictions[key] === "boolean" &&
      restrictions[key] &&
      key !== "isPrivateKey"
    ) {
      return key;
    }
    if (typeof restrictions[key] === "object" && restrictions[key].isActive) {
      return key;
    }
  }
  return null;
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
    referredTo: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] },
    restrictions: {
      isWithdrawnLimit: false,
      isFinancialGateway: false,
      isPrivateKey: false,
      isPrivateKeyInvalid: false,
      isReferralCheater: {
        isActive: false,
        users: [],
      },
      isMultiAcc: {
        isActive: false,
        users: [],
      },
    },
    firstName: "",
    lastName: "",
    contacts: {
      phoneNumber,
      telegram: "",
      vk: "",
    },
    uid: user.uid,
    privateKey: "",
    rank: "DEFAULT",
  };
};
