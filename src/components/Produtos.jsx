import { useEffect } from "react";
import { useEcommerce } from "../Hooks/useEcommerContext"
import { getAllProducts } from "../db/getAllProducts";
import Produto from "./Produto"

import "./Produtos.css"

const Produtos = () => {
    const [state, dispatch] = useEcommerce();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllProducts();  // Supondo que seja uma função assíncrona
                dispatch({ type: 'INIT', payload: response.dados });  // Despacha os dados para o estado
            } catch (error) {
                console.error('Erro ao carregar os produtos', error);
            }
        };

        fetchData();
        // dispatch({ type: "INIT" })
    }, [])

    return (
        <section className="produtos">
            {
                state.produtosBuscados && state.produtosBuscados.length > 0
                    ? state.produtosBuscados.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            valor={produto.valor}
                            urlImagem={produto.urlImagemProduto}
                        />
                    ))
                    : state.todosProdutos.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            valor={produto.valor}
                            urlImagem={produto.urlImagemProduto}
                        />
                    ))
            }

        </section>
    )
}

export default Produtos