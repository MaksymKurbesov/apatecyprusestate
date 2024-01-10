import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES } from './routes'
import { initializeApp } from 'firebase/app'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'
import './i18n'

const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
})

export interface IFirebaseContext {
  db: Firestore
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
export const FirebaseContext = createContext<IFirebaseContext>({ db })
export const storage = getStorage(firebaseApp)

const router = createBrowserRouter(ROUTES)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.Suspense fallback={<div>Fallback...</div>}>
    <FirebaseContext.Provider value={{ db }}>
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
  </React.Suspense>
)
