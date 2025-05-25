// src/components/routers/PrivateRoute.jsx

/*Aula anotacao - Componente de Rota Privada
    Componente para verificar se o usuário está autenticado.
    Se não estiver autenticado, redirecionar para rota pública (página inicial).
    Se estiver autenticado, pode acessar a rota.
*/

import { useContext } from "react";
import { AuthContext } from "../context/auth"; // Importa o contexto de autenticação
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  // Acessa o valor do estado de autenticação (auth) a partir do contexto
  const { auth } = useContext(AuthContext);

  // Se o usuário NÃO estiver autenticado (auth === false) ou (!auth)
  // redirecionar para uma rota pública, como a página inicial ("/") 
  if (auth === false) {
    return <Navigate to="/" />;
  }

  // Se estiver autenticado, renderiza os componentes filhos (rota protegida)
  return children;
}
