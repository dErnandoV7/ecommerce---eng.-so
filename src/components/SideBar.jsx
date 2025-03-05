import { useEcommerce } from "../Hooks/useEcommerContext";
import { authLogOff } from "../db/authLogOff";
import { Link } from "react-router-dom";

import "./SideBar.css"

const SideBar = () => {
    const [state, dispatch] = useEcommerce()

    const handleLogOff = () => {
        dispatch({ type: "SET_LOGADO", logado: false })
        dispatch({ type: "SET_USUARIO", user: false })
        dispatch({ type: "SET_SHOW_SIDEBAR", show: false })

        authLogOff()
    }

    return (
        <div className={state.showSideBar ? "side-bar show-side-bar" : "side-bar"}>
            <div className="close-icon" onClick={() => dispatch({ type: "SET_SHOW_SIDEBAR", show: false })}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="user-name">
                <p>Seja bem vindo{"("}a{")"}, <span>{state.user.name}</span>!</p>
            </div>
            <div className="ver-meus-produtos">
                <Link to={"/painel"}><span id="span-meus-produtos">Meus produtos</span></Link>
            </div>
            <div className="atendimento">
                <a href="https://mail.google.com/mail/?view=cm&to=d.ernandov7@gmail.com&subject=Assunto%20Aqui&body=Escreva%20sua%20mensagem%20aqui
" target="_blank">Atendimento & Suporte</a>
            </div>
            <div onClick={() => handleLogOff()} className="logoff-icon">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span> Sair</span>
            </div>
        </div>
    )
}

export default SideBar