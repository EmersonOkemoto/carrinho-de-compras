import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/login";
import CriarLogin from "../../pages/criarLogin";
import Home from "../../pages/home";
import Produtos from "../produtos";
import MeuPerfil from "../../pages/meuPerfil";
import PrivateRoute from "./PrivateRoute";

import CriarProduto from "../../pages/produtos/CriarProduto";
import EditarProduto from "../../pages/produtos/EditarProduto";
import RemoverProduto from "../../pages/produtos/RemoverProduto";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criar-login" element={<CriarLogin />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route
                path="/meuPerfil"
                element={
                    <PrivateRoute>
                        <MeuPerfil />
                    </PrivateRoute>
                }
            />
            <Route path="/produtos/criar" element={<CriarProduto />} />
            <Route path="/produtos/editar" element={<EditarProduto />} />
            <Route path="/produtos/remover" element={<RemoverProduto />} />
        </Routes>
    );
}