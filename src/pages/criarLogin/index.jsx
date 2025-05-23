import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CriarLogin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    function irParaHome() {
        navigate("/home");
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Dados enviados:", formData);
        // Futuramente, adicionar lógica para enviar os dados para um backend
    }

    return (
        <div className="criar-login-container">
            <button className="voltar-button" onClick={irParaHome}>
                Voltar para Home
            </button>
            <h2>Criar Conta</h2>
            <form onSubmit={handleSubmit} className="form-cadastro">
                <div className="input-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="input-group">
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="input-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                        autoComplete="new-password"
                    />
                </div>
                <button type="submit" className="cadastrar-button">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
