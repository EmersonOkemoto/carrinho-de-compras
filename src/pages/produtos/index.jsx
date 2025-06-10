import { useEffect, useState } from "react";
import axios from "axios";
import CriarProduto from "./CriarProduto";
import EditarProduto from "./EditarProduto";
import RemoverProduto from "./RemoverProduto";


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
        <CriarProduto
          onClose={() => setModalCriarAberto(false)}
          onRefresh={carregarProdutos}
        />
      )}
      {modalEditarAberto && (
        <EditarProduto
          produto={produtoSelecionado}
          onClose={() => setModalEditarAberto(false)}
          onRefresh={carregarProdutos}
        />
      )}
      {modalDeletarAberto && (
        <RemoverProduto
          produto={produtoSelecionado}
          onClose={() => setModalDeletarAberto(false)}
          onRefresh={carregarProdutos}
        />
      )}
    </div>
  );
}
