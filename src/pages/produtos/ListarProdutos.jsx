import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => response.json())
      .then(data => setProdutos(data))
      .catch(error => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <Link to="/criar">
        <button>Criar Novo Produto</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco.toFixed(2)}</td>
              <td>
                <Link to={`/editar/${produto.id}`}>
                  <button>Editar</button>
                </Link>
                <Link to={`/deletar/${produto.id}`}>
                  <button>Excluir</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;
