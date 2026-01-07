import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <ClimbingBoxLoader></ClimbingBoxLoader>;
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
