import { useEffect } from "react";
import { useEcommerce } from "../Hooks/useEcommerContext"
import { getAllProducts } from "../db/getAllProducts";
import Produto from "./Produto"
import { checkUserLogin } from "../db/checkUserLogin";
import { fetchUserData } from "../db/fetchUserData";

import "./Produtos.css"

const Produtos = () => {
    const { state, dispatch } = useEcommerce();

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

    const produtosComputadores = state.todosProdutos?.filter(produto => produto.category === "Computadores");
    const produtosPerifericos = state.todosProdutos?.filter(produto => produto.category === "Periféricos");
    const produtosSmartphones = state.todosProdutos?.filter(produto => produto.category === "Smartphones");
    const produtosComponentes = state.todosProdutos?.filter(produto => produto.category === "Componentes");
    const produtosOutro = state.todosProdutos?.filter(produto => produto.category === "Outro");

    return (
        <section className="produtos">
            <h3>Produtos por Categoria</h3>
            <div className="produtos-computadores produtos-sessoes" id="computadores">
                <h2>Computadores</h2>
                <div>
                    {produtosComputadores && produtosComputadores.length > 0 && (produtosComputadores.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.name}
                            descricao={produto.desc}
                            valor={produto.price}
                            urlImagem={produto.url}
                            whats={produto.whats}
                        />
                    )))}

                </div>
            </div>
            <div className="produtos-componentes produtos-sessoes" id="componentes">
                <h2>Componentes</h2>
                <div>
                    {produtosComponentes && produtosComponentes.length > 0 && (produtosComponentes.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.name}
                            descricao={produto.desc}
                            valor={produto.price}
                            urlImagem={produto.url}
                            whats={produto.whats}
                        />
                    )))}
                </div>
            </div>
            <div className="produtos-smartphones produtos-sessoes" id="smartphones">
                <h2>Smartphones & Tablets</h2>
                <div>
                    {produtosSmartphones && produtosSmartphones.length > 0 && (produtosSmartphones.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.name}
                            descricao={produto.desc}
                            valor={produto.price}
                            urlImagem={produto.url}
                            whats={produto.whats}
                            id={""}
                            painel={false}
                        />
                    )))}
                </div>
            </div>
            <div className="produtos-perifericos produtos-sessoes" id="perifericos">
                <h2>Periféricos</h2>
                <div>
                    {produtosPerifericos && produtosPerifericos.length > 0 && (produtosPerifericos.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.name}
                            descricao={produto.desc}
                            valor={produto.price}
                            urlImagem={produto.url}
                            whats={produto.whats}
                        />
                    )))}
                </div>
            </div>
            <div className="produtos-outros produtos-sessoes" id="outros">
                <h2>Outros</h2>
                <div>
                    {produtosOutro && produtosOutro.length > 0 && (produtosOutro.map((produto, index) => (
                        <Produto
                            key={index}
                            nome={produto.name}
                            descricao={produto.desc}
                            valor={produto.price}
                            urlImagem={produto.url}
                            whats={produto.whats}
                        />
                    )))}
                </div>
            </div>
        </section>
    )
}

export default Produtos