import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarProduto() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`);
        if (response.ok) {
          const produto = await response.json();
          setNome(produto.nome);
          setPreco(produto.preco);
        } else {
          alert('Produto não encontrado.');
          navigate('/');
        }
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        alert('Erro ao buscar produto.');
        navigate('/');
      }
    };

    fetchProduto();
  }, [id, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !preco) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, preco: parseFloat(preco) }),
      });

      if (response.ok) {
        alert('Produto atualizado com sucesso!');
        navigate('/');
      } else {
        alert('Erro ao atualizar produto.');
      }
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>
      <h2>Editar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </label>
        <br />
        <label>
          Preço:
          <input
            type="number"
            value={preco}
            step="0.01"
            onChange={(event) => setPreco(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}

export default EditarProduto;
