// src/components/routers/index.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/login";
import CriarLogin from "../../pages/criarLogin";
import Home from "../../pages/home";
import Produtos from "../produtos";
import MeuPerfil from "../../pages/meuPerfil";
import PrivateRoute from "./PrivateRoute";

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
        </Routes>
    );
}