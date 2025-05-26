/* Aula
    Contexto de autenticação em React
    Componente que fornece um contexto de autenticação para os filhos (children)
    Com isso, qualquer componente dentro desse provedor tem acesso ao estado de autenticação (auth)
 */

import React, { createContext, useState } from "react";

// Criando um contexto de autenticação
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // Estado para armazenar o status de autenticação
    const [auth, setAuth] = useState(true); // Inicialmente, o usuário está autenticado (true)

    /**
     * Função teste
     * Futuramente, colocar uma função real para login/logout ou verificação de autenticação.
     */
    const teste = () => {
        console.log("teste"); // Exibe "teste" no console quando chamada

        return (
            // Provedor do contexto, permitindo que componentes filhos acessem auth, setAuth e teste
            <AuthContext.Provider value={{ auth, setAuth, teste }}>
                {children}
            </AuthContext.Provider>
        );
    }
}