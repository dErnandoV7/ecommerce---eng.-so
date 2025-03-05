import { Link } from "react-router-dom"
import { useState } from "react"
import { authChek } from "../db/authCheck"
import { authSignup } from "../db/authSignup"
import { checkUserLogin } from "../db/checkUserLogin"
import { useNavigate } from "react-router-dom"
import Blob from "../components/Blob"
import { useEcommerce } from "../Hooks/useEcommerContext"
import Loading from "../components/Loading"

import "./Login.css"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"

const Login = () => {
    const [state, dispatch] = useEcommerce()
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [createAccount, setCreateAccount] = useState(false)

    const [ccName, setCcName] = useState("")
    const [ccSurname, setCcSurname] = useState("")
    const [ccEmail, setCcEmail] = useState("")
    const [ccPassword, setCcPassword] = useState("")
    const [ccPasswordInvalid, setCcPasswordInvalid] = useState(false)
    const [ccEmailInvalid, setCcEmailInvalid] = useState(false)
    const [ccEmptyFields, setCcEmptyFields] = useState(false)
    const [error, setError] = useState("")

    const resetFormCc = () => {
        setCcName("")
        setCcSurname("")
        setCcEmail("")
        setCcPassword("")
    }

    const checkLogin = async () => {
        const result = await checkUserLogin();
        return result.res
    };

    const handleLogin = async (e) => {
        e.preventDefault()

        setLoading(true)
        const user = await authChek(email, password);
        setLoading(false)

        if (user) {
            if (checkLogin) {
                dispatch({ type: "SET_LOGADO", logado: true })
                setErrorMessage(false)
                navigate("/")
            }
        } else {
            console.error("Falha na autenticação");
            setErrorMessage(true)
        }
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault()
        
        setError("")
        setLoading(true)
        if (!ccName || !ccSurname || !ccEmail || !ccPassword) {
            setCcEmptyFields(true)
            setLoading(false)
            return false
        } else {
            setCcEmptyFields(false)
        }

        if (!ccEmail.includes("@") || !ccEmail.includes(".")) {
            setCcEmailInvalid(true)
            setLoading(false)
            return false
        } else {
            setCcEmailInvalid(false)
        }

        if (ccPassword.length < 8) {
            setCcPasswordInvalid(true)
            setLoading(false)
            return false
        } else {
            setCcPasswordInvalid(false)
        }

        const result = await authSignup(ccEmail, ccPassword, ccName, ccSurname);
        resetFormCc()

        setLoading(false)
        if (result.success) {
            dispatch({ type: "SET_LOGADO", logado: true })
            navigate("/")
        } else {
            setError(result.error)
        }
    }
    return (
        <>
            {loading && <Loading />}

            {createAccount ? (
                <div className="create-account">
                    <section className="create-account-section">
                        <h1>Crie sua Conta</h1>
                        <form>
                            <p>Crie a sua conta para ficar por dentro de todos os <strong>produtos disponíveis</strong>!</p>

                            <h2>Preencha os campos abaixo:</h2>
                            <label>
                                <i className="fa-regular fa-user"></i>
                                <input type="text" placeholder="Nome" value={ccName} onChange={(e) => setCcName(e.target.value)} />
                            </label>
                            <label>
                                <i className="fa-regular fa-user"></i>
                                <input type="text" placeholder="Sobrenome" value={ccSurname} onChange={(e) => setCcSurname(e.target.value)} />
                            </label>

                            <label>
                                <i className="fa-solid fa-envelope"></i>
                                <input type="email" placeholder="Email" value={ccEmail} onChange={(e) => setCcEmail(e.target.value)} />
                            </label>
                            {ccEmailInvalid && (<p className="email-invalid msg-error">Email inválido! Use @ e . {"("} ponto final {")"}</p>)}
                            <label>
                                <i className="fa-solid fa-lock"></i>
                                <input type="password" placeholder="senha" value={ccPassword} onChange={(e) => setCcPassword(e.target.value)} />
                            </label>
                            {ccPasswordInvalid && (<p className="password-invalid msg-error">A senha deve ter no mínimo 8 caracteres!</p>)}
                            {ccEmptyFields && (<p className="emptyFields msg-error">Preencha todos os campos!</p>)}
                            {error && ((<p className="msg-error">Erro ao criar conta: {error}</p>))}
                            <button className="create-account-button" onClick={(e) => handleCreateAccount(e)}>Criar Conta</button>
                        </form>
                    </section>
                </div>
            ) : (
                <section className="login-section">
                    <div className="login">
                        <h1>Seja bem vindo!</h1>
                        <p>Faça o login utilizando seu email e senha.</p>
                        <form>
                            <label>
                                <i className="fa-solid fa-envelope"></i>
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
                            <span onClick={() => setCreateAccount(true)}>Crie aqui</span></Link></p>
                        <Blob></Blob>
                    </div>
                </section>
            )}

        </>
    )
}

export default Login