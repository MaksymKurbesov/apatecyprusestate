import React, { useEffect } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const IndexLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default IndexLayout;
