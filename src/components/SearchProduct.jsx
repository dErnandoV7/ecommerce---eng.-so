import { useEcommerce } from "../Hooks/useEcommerContext"
import Produto from "./Produto"

import "./SearchProduct.css"

const SearchProduct = () => {
    const { state, dispatch } = useEcommerce()

    return (
        <>
            <div className="search-bottom">
                <input type="text" placeholder="Digite o que você procura..." onChange={(e) => dispatch({ type: "BUSCAR_PRODUTOS", search: e.target.value })} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <section className="produtos-buscados-sessao">
                <p className="result-search" id="result-search">Resultado da busca: </p>
                <div className="produtos-buscados">
                    {
                        state.produtosBuscados && state.produtosBuscados.length > 0 &&
                        (state.produtosBuscados.map((produto, index) => (
                            <Produto
                                key={index}
                                nome={produto.name}
                                descricao={produto.desc}
                                valor={produto.price}
                                urlImagem={produto.url}
                                whats={produto.whats}
                            />
                        ))
                        )
                    }

                </div>
            </section>
        </>
    )
}

export default SearchProduct