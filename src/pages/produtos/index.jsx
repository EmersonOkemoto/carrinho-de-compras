import { useEffect, useState } from "react";
import axios from "axios";
import ModalCriar from "./ModalCriar";
import ModalEditar from "./ModalEditar";
import ModalDeletar from "./ModalDeletar";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [modalCriarAberto, setModalCriarAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalDeletarAberto, setModalDeletarAberto] = useState(false);

  const carregarProdutos = () => {
    axios.get("http://localhost:3000/produtos").then((res) => {
      setProdutos(res.data);
    });
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <button onClick={() => setModalCriarAberto(true)}>Criar Produto</button>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - {produto.preco}
            <button onClick={() => {
              setProdutoSelecionado(produto);
              setModalEditarAberto(true);
            }}>Editar</button>
            <button onClick={() => {
              setProdutoSelecionado(produto);
              setModalDeletarAberto(true);
            }}>Deletar</button>
          </li>
        ))}
      </ul>

      {modalCriarAberto && (
        <ModalCriar
          onClose={() => setModalCriarAberto(false)}
          onRefresh={carregarProdutos}
        />
      )}
      {modalEditarAberto && (
        <ModalEditar
          produto={produtoSelecionado}
          onClose={() => setModalEditarAberto(false)}
          onRefresh={carregarProdutos}
        />
      )}
      {modalDeletarAberto && (
        <ModalDeletar
          produto={produtoSelecionado}
          onClose={() => setModalDeletarAberto(false)}
          onRefresh={carregarProdutos}
        />
      )}
    </div>
  );
}
