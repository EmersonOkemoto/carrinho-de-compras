import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CriarProduto.css';

function CriarProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagemURL, setImagemURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !preco || !imagemURL) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, preco: parseFloat(preco), imagemURL }),
      });

      if (response.ok) {
        alert('Produto criado com sucesso!');
        navigate('/produtos');
      } else {
        alert('Erro ao criar produto.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="criar-produto-container">
      <h2>Criar Produto</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <p>Nome:</p>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome"
        />

        <p>Preço:</p>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Digite o preço"
        />

        <p>Imagem:</p>
        <input
          type="text"
          value={imagemURL}
          onChange={(e) => setImagemURL(e.target.value)}
          placeholder="Cole a URL da imagem"
        />

        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
}

export default CriarProduto;
