import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import IndexPage from "./pages/Index/IndexPage";
import PartnerProgramPage from "./pages/PartnerProgram/PartnerProgramPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import OurContacts from "./pages/OurContacts/OurContacts";
import FaqPage from "./pages/FAQ/FaqPage";

export const ROUTES = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/partner-program",
        element: <PartnerProgramPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/our-contacts",
        element: <OurContacts />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
    ],
  },
];
