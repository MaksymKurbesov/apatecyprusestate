import { lazy } from "react";

export const PartnerProgramPage = lazy(() =>
  import("./pages/PartnerProgram/PartnerProgramPage")
);

export const AboutUsPage = lazy(() => import("./pages/AboutUs/AboutUsPage"));

export const OurContacts = lazy(() =>
  import("./pages/OurContacts/OurContacts")
);

export const FaqPage = lazy(() => import("./pages/FAQ/FaqPage"));

export const SignIn = lazy(() => import("./pages/SignIn/SignIn"));

export const SignUp = lazy(() => import("./pages/SignUp/SignUp"));

export const PersonalArea = lazy(() =>
  import("./pages/Profile/PersonalArea/PersonalArea")
);

export const CashIn = lazy(() => import("./pages/Profile/CashIn/CashIn"));
export const MakeDeposit = lazy(() =>
  import("./pages/Profile/MakeDeposit/MakeDeposit")
);
export const Withdrawal = lazy(() =>
  import("./pages/Profile/Withdrawal/Withdrawal")
);
export const Transactions = lazy(() =>
  import("./pages/Profile/Transactions/Transactions")
);
export const Partners = lazy(() => import("./pages/Profile/Partners/Partners"));
export const Settings = lazy(() => import("./pages/Profile/Settings/Settings"));
