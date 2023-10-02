import React from "react";
import { Navigate, useOutletContext } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { userData } = useOutletContext();

  if (!userData.isAdmin) {
    return <Navigate to={"/authorization/login"} />;
  }

  return children;
};

export default RequireAuth;
