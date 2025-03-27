import React from 'react'
import './Carrinho.css'
import item01 from '../../assets/item01.png';

export default function Carrinho() {
    return (
        <div className="container-carrinho">
            <div className="itensTotais-carrinho">
                <p>Seu carrinho tem 5 itens</p>
                <button className="botaoFechar">X</button>
            </div>


            <div className="itens">
                <div className="item">
                    <img src={item01} alt="Monitor Gamer" />
                    <div className="item-informacao">
                        <a>Monitor Gamer Curvo 49"</a>
                        <div className="precoEQuantidade">
                            <p>R$ 8.599,90</p>
                            <div className="quantidade">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://m.media-amazon.com/images/I/71vY3yiU3zL._AC_SL1500_.jpg" alt="W3Schools.com" />
                    <div className="item-informacao">
                        <a>Cadeira Gamer RGB - Preta com Iluminação (Led)</a>
                        <div className="precoEQuantidade">
                            <p>R$ 959,90</p>
                            <div className="quantidade">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://m.media-amazon.com/images/I/51j87QogIbL._AC_SL1000_.jpg" alt="Teclado Gamer" />
                    <div className="item-informacao">
                        <a>Teclado Gamer Mecânico Low Profile RGB</a>
                        <div className="precoEQuantidade">
                            <p>R$ 1.002,00</p>
                            <div className="quantidade">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://m.media-amazon.com/images/I/61Q1pzot5nL._AC_SL1500_.jpg" alt="Headset Gamer" />
                    <div className="item-informacao">
                        <a>Headset Gamer RGB Preto</a>
                        <div className="precoEQuantidade">
                            <p>R$ 94.81</p>
                            <div className="quantidade">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <img src="https://m.media-amazon.com/images/I/51D8QaggeaL._AC_SL1000_.jpg" alt="Imagem de Mouse Sem Fio" />
                    <div className="item-informacao">
                        <a>Mouse Sem Fio</a>
                        <div className="precoEQuantidade">
                            <p>R$ 24,99</p>
                            <div className="quantidade">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carrinho-parteFinal">
                <div className="totalValor">
                    <p>Total:</p>
                    <p>R$ 10.681,60</p>
                </div>

                <div className="botaoCupomAndFinalizar">
                    <button className="addCupom">Adicionar cupom</button>
                    <button className="buttonFinalizarCompra">Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}
