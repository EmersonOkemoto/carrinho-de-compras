import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Home() {
    const navigate = useNavigate();

    function irParaLogin() {
        navigate("/login");
    }
    function irParaCriarLogin() {
        navigate("/criar-login");
    }
    function irParaProdutos() {
        navigate("/produtos");
    }

    return (
        <div className="home-container">
            <div className="home-box">
                <h1>Bem-vindo!</h1>
                <p>Seja bem-vindo ao nosso site. Faça login para continuar.</p>
                <button className="button-1" onClick={irParaLogin}>
                    Ir para Login
                </button>
                <button className="button-2" onClick={irParaCriarLogin}>
                    Criar Login
                </button>
                <button className="button-3" onClick={irParaProdutos}>
                    Ver os produtos
                </button>
            </div>
        </div>
    );
}
