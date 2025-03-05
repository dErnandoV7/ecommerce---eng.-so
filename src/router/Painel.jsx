import { useEffect, useRef } from "react"
import { useEcommerce } from "../Hooks/useEcommerContext"
import { useNavigate } from "react-router-dom"
import { checkUserLogin } from "../db/checkUserLogin";
import { fetchUserData } from "../db/fetchUserData";

import Modal from "../components/Modal";

import "./Painel.css"

const Painel = () => {
    const { state, dispatch } = useEcommerce()
    const ref = useRef()
    const navigate = useNavigate()

    const checkLogin = async () => {
        const result = await checkUserLogin();

        if (result.res) {
            const resUser = await fetchUserData(result.user.uid)
            dispatch({ type: "SET_USUARIO", user: resUser })
        }
        return result.res
    };

    const showMessegePCreated = () => {
        ref.current.classList.toggle("show-temp", false);
        ref.current.classList.toggle("show-temp", true);
    };    

    useEffect(() => {
        const fetchData = async () => {
            const result = await checkLogin()

            if (result) dispatch({ type: "SET_LOGADO", logado: true })
            else navigate("/login")
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="product-created" ref={ref}>
                <div>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Produto criado com sucesso!</span>
                </div>
            </div>
            <div className="painel">
                {state.showModal && <Modal func={showMessegePCreated}/>}
                <header className="header-painel">
                    <div>
                        <div className="back" onClick={() => navigate("/")}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                        <div className="welcome-message">
                            <p>Olá, <strong>{state.user ? (state.user.name + " " + state.user.surname) : "Carregando..."}</strong> <br /><span>Seja bem vindo ao Painel!</span></p>
                        </div>
                    </div>
                    <div className="button-cadastrar-produto" onClick={() => dispatch({ type: "SET_SHOW_MODAL", showModal: true })}>
                        <p>Cadastrar produto</p>
                    </div>
                </header>
                <section className="products-user">

                </section>
            </div>
        </>
    )
}

export default Painel