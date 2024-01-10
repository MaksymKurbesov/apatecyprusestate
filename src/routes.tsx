import React, { Suspense } from 'react'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import IndexPage from './pages/Index/IndexPage'
import ProfileLayout from './components/ProfileLayout/ProfileLayout'
import IndexLayout from './components/IndexLayout/IndexLayout'

import {
  AboutUsPage,
  CashIn,
  FaqPage,
  MakeDeposit,
  OurContacts,
  PartnerProgramPage,
  // Partners,
  PersonalArea,
  // Settings,
  SignIn,
  SignUp,
  Transactions,
  Withdrawal
} from './lazyPages'
import Admin from './pages/Admin/Admin'
import RequireAuth from './components/RequireAuth/RequireAuth'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'
import Documents from './pages/Documents/Documents'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import XmasPromoPage from './pages/XmasPromoPage/XmasPromoPage'

export const ROUTES = [
  {
    path: '/',
    element: <IndexLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <IndexPage />
          </Suspense>
        )
      },
      {
        path: '/partner-program',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <PartnerProgramPage />
          </Suspense>
        )
      },
      {
        path: '/about-us',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <AboutUsPage />
          </Suspense>
        )
      },
      {
        path: '/our-contacts',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <OurContacts />
          </Suspense>
        )
      },
      {
        path: '/faq',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <FaqPage />
          </Suspense>
        )
      },
      {
        path: '/authorization/sign-in',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <SignIn />
          </Suspense>
        )
      },
      {
        path: '/authorization/sign-up',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <SignUp />
          </Suspense>
        )
      },
      {
        path: '/documents',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <Documents />
          </Suspense>
        )
      },
      {
        path: '/terms-of-use',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <TermsOfUse />
          </Suspense>
        )
      },
      {
        path: '/privacy-policy',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <PrivacyPolicy />
          </Suspense>
        )
      },
      {
        path: '/xmas-promotion',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <XmasPromoPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/profile',
    element: <ProfileLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/profile/personal-area',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <PersonalArea />
          </Suspense>
        )
      },
      {
        path: '/profile/cash-in',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <CashIn />
          </Suspense>
        )
      },
      {
        path: '/profile/make-deposit',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <MakeDeposit />
          </Suspense>
        )
      },
      {
        path: '/profile/withdrawal',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <Withdrawal />
          </Suspense>
        )
      },
      {
        path: '/profile/transactions',
        element: (
          <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
            <Transactions />
          </Suspense>
        )
      },
      // {
      //   path: '/profile/referrals',
      //   element: (
      //     <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
      //       <Partners />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/profile/settings',
      //   element: (
      //     <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
      //       <Settings />
      //     </Suspense>
      //   )
      // },
      {
        path: '/profile/admin',
        element: (
          <RequireAuth>
            <Suspense fallback={<div className={'suspense'}>Loading...</div>}>
              <Admin />
            </Suspense>
          </RequireAuth>
        )
      }
    ]
  }
]
