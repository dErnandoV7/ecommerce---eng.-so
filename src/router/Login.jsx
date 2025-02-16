import { Link } from "react-router-dom"
import Blob from "../components/Blob"

import "./Login.css"

const Login = () => {
    return (
        <>
            <section className="login-section">
                <div className="login">
                    <h1>Seja bem vindo!</h1>
                    <p>Faça o login utilizando seu email e senha.</p>
                    <form>
                        <label>
                            <i class="fa-regular fa-user"></i>
                            <input type="text" placeholder="Insira seu email" />
                        </label>
                        <label>
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Insira sua senha" />
                        </label>
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