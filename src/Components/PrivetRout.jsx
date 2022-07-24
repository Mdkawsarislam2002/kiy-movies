import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const PrivetRout = ({ children }) => {
  const TheAuthValue = useAuth();

  if (!TheAuthValue.currentUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivetRout;
