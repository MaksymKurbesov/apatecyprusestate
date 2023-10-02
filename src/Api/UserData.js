import { doc, updateDoc, increment } from "firebase/firestore";
import { auth, db, storage } from "../index";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const userDoc = doc(db, "users", auth.currentUser.displayName);

export const updateUserBalanceAfterDeposit = async (wallet, amount) => {
  await updateDoc(userDoc, {
    [`wallets.${wallet}.available`]: increment(-amount),
    invested: increment(amount),
  });
};

export const updateUserBalanceAfterCashIn = async (wallet, amount) => {
  await updateDoc(userDoc, {
    [`wallets.${wallet}.available`]: increment(amount),
    [`wallets.${wallet}.deposited`]: increment(amount),
  });
};

export const updateUserBalanceAfterWithdrawn = async (wallet, amount) => {
  await updateDoc(userDoc, {
    [`wallets.${wallet}.available`]: increment(-amount),
    [`wallets.${wallet}.withdrawn`]: increment(amount),
    withdrawn: increment(amount),
  });
};

export const updateUserAvatar = async (avatar, setUserAvatar) => {
  try {
    const userAvatarRef = ref(
      storage,
      `userAvatars/${auth.currentUser.displayName}`
    );

    await uploadBytes(userAvatarRef, avatar).then(async (uploadedAvatar) => {
      const photoURL = await getDownloadURL(uploadedAvatar.ref);

      await updateProfile(auth.currentUser, {
        photoURL,
      });

      setUserAvatar(photoURL);
    });
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

export const updateUserInfo = async (userInfo) => {
  try {
    await updateDoc(userDoc, {
      "contacts.phoneNumber": userInfo.phoneNumber,
      "contacts.telegram": userInfo.telegram,
      "contacts.vk": userInfo.vkontakte,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    });
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

export const updateUserWallets = async (wallets) => {
  try {
    const updatedWallets = {};

    for (const [walletName, walletNumber] of Object.entries(wallets)) {
      updatedWallets[`wallets.${walletName}.number`] = walletNumber;
    }

    await updateDoc(userDoc, {
      ...updatedWallets,
    });
  } catch (e) {
    alert(e);
    console.error(e);
  }
};
