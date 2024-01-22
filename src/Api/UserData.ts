import {
  doc,
  updateDoc,
  increment,
  Firestore,
  DocumentData,
  getDoc,
  DocumentReference
} from 'firebase/firestore'
import { auth, db, storage } from '../index'
import { getAuth, updateProfile } from 'firebase/auth'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { IUser, RESTRICTIONS } from '../@types/IUser'
import { IWallets } from '../@types/IWallets'
import { ISettingsFormFields } from '../@types/IInputs'
import { Dispatch, SetStateAction } from 'react'

export const fetchUserData = async (user: string): Promise<IUser> => {
  const userDoc = doc(db, 'users', user)
  const userSnap: DocumentData = await getDoc(userDoc)

  return userSnap.data()
}

export const updateUserBalanceAfterDeposit = async (
  wallet: string,
  amount: number,
  nickname: string
) => {
  const userDoc = doc(db, 'users', nickname)

  await updateDoc(userDoc, {
    [`wallets.${wallet}.available`]: increment(-amount),
    invested: increment(amount)
  })
}

export const updateUserBalanceAfterCashIn = async (
  wallet: string,
  amount: number,
  nickname: string
) => {
  const userDoc = doc(db, 'users', nickname)

  await updateDoc(userDoc, {
    [`wallets.${wallet}.available`]: increment(amount),
    [`wallets.${wallet}.deposited`]: increment(amount)
  })
}

export const updateUserBalanceAfterWithdrawn = async (
  wallet: string,
  amount: number,
  nickname: string
) => {
  const userDoc = doc(db, 'users', nickname)

  await updateDoc(userDoc, {
    [`wallets.${wallet}.available`]: increment(-amount),
    [`wallets.${wallet}.withdrawn`]: increment(amount),
    withdrawn: increment(amount)
  })
}

export const updateUserAvatar = async (
  avatar: File,
  setUserAvatar: Dispatch<SetStateAction<string>>
) => {
  try {
    const auth = getAuth()

    const userAvatarRef = ref(
      storage,
      `userAvatars/${auth.currentUser?.displayName}`
    )

    await uploadBytes(userAvatarRef, avatar).then(async (uploadedAvatar) => {
      const photoURL = await getDownloadURL(uploadedAvatar.ref)

      if (auth.currentUser !== null) {
        await updateProfile(auth.currentUser, {
          photoURL
        })

        setUserAvatar(photoURL)
      }
    })
  } catch (e) {
    alert(e)
    console.error(e)
  }
}

export const updateUserInfo = async (
  userInfo: ISettingsFormFields,
  username: string
) => {
  try {
    const userDoc = doc(db, 'users', username) as DocumentReference<IUser>
    const updatedSettings: ISettingsFormFields = {
      phoneNumber: userInfo.phoneNumber,
      telegram: userInfo.telegram,
      vk: userInfo.vkontakte,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName
    }

    await updateDoc(userDoc, updatedSettings)
  } catch (e) {
    alert(e)
    console.error(e)
  }
}

export const updateUserWallets = async (
  wallets: IWallets,
  username: string
) => {
  try {
    const userDoc = doc(db, 'users', username)
    const updatedWallets = {} as IWallets

    for (const [walletName, walletNumber] of Object.entries(wallets)) {
      updatedWallets[`wallets.${walletName}.number`] = walletNumber
    }

    await updateDoc(userDoc, {
      ...updatedWallets
    })
  } catch (e) {
    alert(e)
    console.error(e)
  }
}

export const setUserRestriction = async (
  restriction: RESTRICTIONS,
  nickname: string
) => {
  try {
    const userDoc = doc(db, 'users', nickname)

    await updateDoc(userDoc, {
      [`restrictions.${restriction}`]: true
    })
  } catch (e) {
    alert(e)
    console.error(e)
  }
}
