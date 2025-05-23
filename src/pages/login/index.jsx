import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        senha: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Tentativa de login:", formData);
        // Lógica para autenticação
        // Simulação de login bem-sucedido
        if (formData.email && formData.senha) {

            localStorage.setItem("token", "fake-token"); // Salva o token
            localStorage.setItem("nome", "Aluno 123"); // Exemplo fixo ou vindo de API
            localStorage.setItem("email", formData.email);

            navigate("/meuPerfil"); // Vai para a rota protegida
        } else {
            alert("Email ou Senha, ou ambos, inválidos!");
        }
    }
    
    function irParaHome() {
        navigate("/home");
    }

    function irParaCriarLogin() {
        navigate("/criar-login");
    }

    return (
        <div className="login-container">
            <h2>Página de Login</h2>
            <form onSubmit={handleSubmit} className="form-login">
                <div className="input-group">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Digite sua senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="login-button">
                    OK
                </button>
            </form>
            <button className="home-button" onClick={irParaHome}>
                Voltar para Home
            </button>
            <button className="criar-conta-button" onClick={irParaCriarLogin}>
                Criar Conta
            </button>
        </div>
    );
}
