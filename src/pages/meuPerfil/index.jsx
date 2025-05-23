// src/pages/meuPerfil/index.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function MeuPerfil() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const nomeArmazenado = localStorage.getItem("nome");
    const emailArmazenado = localStorage.getItem("email");

    if (nomeArmazenado) setNome(nomeArmazenado);
    if (emailArmazenado) setEmail(emailArmazenado);
  }, []);

  function irParaHome() {
    navigate("/home");
  }
  
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    window.location.href = "/login";
  }
  

  return (
    <div className="perfil-container">
      <h1>Página - Perfil</h1>
      <p>Aula - rota privada.</p>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Aula - rota privada.</p>

      <button className="go-home-button" onClick={irParaHome}>
        Home
      </button>

      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
}
