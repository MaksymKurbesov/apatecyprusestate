import { lazy, ComponentType } from 'react'

export const PartnerProgramPage = lazy(() =>
  import('./pages/PartnerProgram/PartnerProgramPage').then(
    ({ PartnerProgramPage }) => ({
      default: PartnerProgramPage
    })
  )
)

export const AboutUsPage = lazy(() =>
  import('./pages/AboutUs/AboutUsPage').then(({ AboutUsPage }) => ({
    default: AboutUsPage
  }))
)

export const OurContacts = lazy(() =>
  import('./pages/OurContacts/OurContacts').then(({ OurContacts }) => ({
    default: OurContacts
  }))
)

export const FaqPage = lazy(() =>
  import('./pages/FAQ/FaqPage').then(({ FaqPage }) => ({
    default: FaqPage
  }))
)

export const SignIn = lazy(() =>
  import('./pages/SignIn/SignIn').then(({ SignIn }) => ({
    default: SignIn
  }))
)

export const SignUp = lazy(() =>
  import('./pages/SignUp/SignUp').then(({ SignUp }) => ({
    default: SignUp
  }))
)

export const PersonalArea = lazy(() =>
  import('./pages/Profile/PersonalArea/PersonalArea').then(
    ({ PersonalArea }) => ({ default: PersonalArea })
  )
)

export const CashIn = lazy(() =>
  import('./pages/Profile/CashIn/CashIn').then(({ CashIn }) => ({
    default: CashIn
  }))
)
export const MakeDeposit = lazy(() =>
  import('./pages/Profile/MakeDeposit/MakeDeposit').then(({ MakeDeposit }) => ({
    default: MakeDeposit
  }))
)
export const Withdrawal = lazy(() =>
  import('./pages/Profile/Withdrawal/Withdrawal').then(({ Withdrawal }) => ({
    default: Withdrawal
  }))
)
export const Transactions = lazy(() =>
  import('./pages/Profile/Transactions/Transactions').then(
    ({ Transactions }) => ({ default: Transactions })
  )
)
// export const Partners = lazy(() =>
//   import('./pages/Profile/Partners/Partners').then((module) => ({
//     default: module.default
//   }))
// )
// export const Settings = lazy(() =>
//   import('./pages/Profile/Settings/Settings').then((module) => ({
//     default: module.default
//   }))
// )
