import { deleteDocument } from "../db/deleteDocument"

import "./Produto.css"

const Produto = ({ nome, descricao, valor, urlImagem, whats, id, painel = false }) => {

    const deleteProduct = async () => {
        const res = await deleteDocument(id)
        
        if (res) window.location.reload();
        else alert("Erro ao excluir produto!")
    }

    return (
        <div className="produto">
            <div className="foto-produto">
                <img src={urlImagem} alt={nome} />
            </div>
            <p className="nome-produto"><abbr title={nome}>{nome}</abbr></p>
            <div className="info-produto">
                <div className="descricao-produto">
                    <p><abbr title={descricao}>{descricao}</abbr></p>
                </div>
                <div className="valores-produto">
                    <span className="avista">R$<strong>{valor},00</strong></span>
                </div>
                <div className="acoes-produto">
                    {painel ? (<button className="excluir-produto" onClick={() => deleteProduct()}>Excluir Produto
                    </button>) : (<button className="comprar-produto">
                        <a href={"https://wa.me/55" + whats + "?text=Olá,%20tenho%20interesse%20no%20" + nome} target="_blank">Entrar em contato</a>
                    </button>)}

                </div>
            </div >
        </div >
    )
}

export default Produto