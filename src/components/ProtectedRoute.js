import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userName = localStorage.getItem("login");

  if (!userName) {
    // Redireciona para a página de login se o usuário não estiver autenticado
    return <Navigate to="/" />;
  }

  // Se o usuário estiver logado, renderiza o conteúdo da rota protegida
  return children;
};

export default ProtectedRoute;
