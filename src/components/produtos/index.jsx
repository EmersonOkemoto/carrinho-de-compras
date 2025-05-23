// src/components/produtos/index.jsx
import React, { useState } from "react";
import "./style.css";
import { produtos } from "./produtos";
import Carrinho from "../carrinho";

export default function Produtos() {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    function addItem(item) {
        setCartItems((prevItems) => [...prevItems, item]);
    }

    return (
        <div>
            <div className="button-cart">
                <button onClick={() => setShowCart(true)}>Carrinho</button>
                {cartItems.length > 0 && (
                    <span className="cartCount">{cartItems.length}</span>
                )}
            </div>

            {showCart && (
                <Carrinho
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    onClose={() => setShowCart(false)}
                />
            )}

            <div className="produtos">
                {produtos.map((item, index) => (
                    <div key={index} className="produto">
                        <img src={item.imagem} alt={item.nome} />
                        <h4>{item.nome}</h4>
                        <p>R$ {item.preco.toFixed(2)}</p>
                        <button onClick={() => addItem(item)}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
