// src/components/carrinho/index.jsx
import React from "react";
import "./carrinho.css";

export default function Carrinho({ cartItems, setCartItems, onClose }) {
    const totalValor = cartItems.reduce((total, item) => total + item.preco, 0).toFixed(2);

    return (
        <div className="container-carrinho">
            <div className="itensTotais-carrinho">
                <p>Seu carrinho tem {cartItems.length} item(s)</p>
                <button className="botaoFechar" onClick={onClose}>X</button>
            </div>

            <div className="itens">
                {cartItems.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.imagem} alt={item.nome} />
                        <div className="item-informacao">
                            <strong>{item.nome}</strong>
                            <div className="precoEQuantidade">
                                <span>R$ {item.preco.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carrinho-parteFinal">
                <div className="totalValor">
                    <p>Total:</p>
                    <p>R$ {totalValor}</p>
                </div>

                <div className="botaoCupomAndFinalizar">
                    <button className="addCupom">Adicionar cupom</button>
                    <button className="buttonFinalizarCompra">Finalizar compra</button>
                </div>
            </div>
        </div>
    );
}
