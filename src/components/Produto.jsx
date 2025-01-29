import "./Produto.css"

const Produto = ({ nome, descricao, valor, urlImagem }) => {
    return (
        <div className="produto">
            <div className="avaliacao-produto">
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="foto-produto">
                <img src={urlImagem} alt={nome} />
            </div>
            <p className="nome-produto"><abbr title="${nome}">{nome}</abbr></p>
            <div className="info-produto">
                <div className="descricao-produto">
                    <p><abbr title={descricao}>{descricao}</abbr></p>
                </div>
                <div className="valores-produto">
                    <span className="avista">R$<strong>{valor},00</strong></span>
                    <span className="parcelado">ou até 12x de R$<strong>{(valor * 1.3 / 12).toFixed(0)},00</strong></span>
                </div>
                <div className="acoes-produto">
                    <button className="comprar-produto">
                        Comprar
                    </button>
                    <button className="adicionar-carrinho">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Produto