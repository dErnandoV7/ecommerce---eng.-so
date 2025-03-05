import { useEffect } from "react";
import { useEcommerce } from "../Hooks/useEcommerContext"
import { getAllProducts } from "../db/getAllProducts";
import Produto from "./Produto"
import { checkUserLogin } from "../db/checkUserLogin";
import { fetchUserData } from "../db/fetchUserData";

import "./Produtos.css"

const Produtos = () => {
    const [state, dispatch] = useEcommerce();

    const checkLogin = async () => {
        const result = await checkUserLogin();

        if (result.res) {
            const resUser = await fetchUserData(result.user.uid)
            dispatch({ type: "SET_USUARIO", user: resUser })
        }

        return result.res
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await checkLogin()
            if (result) dispatch({ type: "SET_LOGADO", logado: true })

            try {
                const response = await getAllProducts();
                dispatch({ type: 'INIT', payload: response.dados });
            } catch (error) {
                console.error('Erro ao carregar os produtos', error);
            }
        };

        fetchData();
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