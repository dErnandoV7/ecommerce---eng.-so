import { useEffect } from "react";
import { useEcommerce } from "../Hooks/useEcommerContext"
import { getAllProducts } from "../db/getAllProducts";
import Produto from "./Produto"

import "./Produtos.css"
import { useNavigate } from "react-router-dom";

const Produtos = () => {
    const [state, dispatch] = useEcommerce();
    const navigate = useNavigate()

    useEffect(() => {
        if (!state.logado) navigate("/login")
        else {
            const fetchData = async () => {
                try {
                    const response = await getAllProducts();
                    dispatch({ type: 'INIT', payload: response.dados });
                } catch (error) {
                    console.error('Erro ao carregar os produtos', error);
                }
            };

            fetchData();
        }
    }, [])

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