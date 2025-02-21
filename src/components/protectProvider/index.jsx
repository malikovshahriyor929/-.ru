import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  let tokenToast = () =>
    toast.error("You are not authorized to access this page");
  if (!JSON.parse(localStorage.getItem("token"))) {
    localStorage.removeItem("token");
    tokenToast();
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
