import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RemoverProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(`http://localhost:3000/produtos/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduto(data);
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

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Produto removido com sucesso!');
        navigate('/');
      } else {
        alert('Erro ao remover produto.');
      }
    } catch (error) {
      console.error('Erro ao remover produto:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Remover Produto</h2>
      {produto ? (
        <div>
          <p>Tem certeza que deseja remover o produto <strong>{produto.nome}</strong>?</p>
          <button onClick={handleDelete}>Sim, remover</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      ) : (
        <p>Carregando produto...</p>
      )}
    </div>
  );
}

export default RemoverProduto;
