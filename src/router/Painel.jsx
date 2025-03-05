import { useEffect } from "react"
import { useEcommerce } from "../Hooks/useEcommerContext"
import { useNavigate } from "react-router-dom"
import { checkUserLogin } from "../db/checkUserLogin";

import "./Painel.css"

const Painel = () => {
    const { state, dispatch } = useEcommerce()
    const navigate = useNavigate()

    const checkLogin = async () => {
        const result = await checkUserLogin();
        return result.res
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
        <div className="painel">
            <header className="header-painel">
                <div>
                    <div className="back" onClick={() => navigate("/")}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="welcome-message">
                        <p>Olá, <strong>{state.user.name + " " + state.user.surname}</strong> <br /><span>Seja bem vindo ao Painel!</span></p>
                    </div>
                </div>
                <div className="button-cadastrar-produto">
                    <p>Cadastrar produto</p>
                </div>
            </header>
            <section className="products-user">
                
            </section>
        </div>
    )
}

export default Painel