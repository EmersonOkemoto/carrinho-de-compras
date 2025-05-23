//src/components/routers/PrivateRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";

// Verifica se o usuário está logado
const isAuthenticated = () => {
  // verifica se tem um token no localStorage
  return localStorage.getItem("token") !== null;
};

export default function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
