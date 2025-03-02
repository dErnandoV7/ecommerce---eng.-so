import { Link } from "react-router-dom"
import { useState } from "react"
import { authChek } from "../db/authCheck"
import { useNavigate } from "react-router-dom"
import Blob from "../components/Blob"
import { useEcommerce } from "../Hooks/useEcommerContext"
import Loading from "../components/Loading"

import "./Login.css"

const Login = () => {
    const [state, dispatch] = useEcommerce()
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        setLoading(true)
        const user = await authChek(email, password);
        setLoading(false)

        if (user) {
            dispatch({ type: "SET_LOGADO" })
            setErrorMessage(false)
            navigate("/")
        } else {
            console.error("Falha na autenticação");
            setErrorMessage(true)
        }
    };

    return (
        <>
            {loading && <Loading />}
            <section className="login-section">
                <div className="login">
                    <h1>Seja bem vindo!</h1>
                    <p>Faça o login utilizando seu email e senha.</p>
                    <form>
                        <label>
                            <i className="fa-regular fa-user"></i>
                            <input type="text" placeholder="Insira seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        {errorMessage && <p id="error-message">Dados incorretos!</p>}
                        <button className="login-button" onClick={(e) => handleLogin(e)}>Entrar</button>
                    </form>
                    <p className="sem-conta">Ainda não tem conta? <Link>
                        <span>Crie aqui</span></Link></p>
                    <Blob></Blob>
                </div>
            </section>
        </>
    )
}

export default Login