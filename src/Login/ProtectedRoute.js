import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../userAuth/userAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  //console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;