import { useRef } from "react";
import { useEcommerce } from "../Hooks/useEcommerContext"
import { Link } from "react-router-dom";

import "./HeaderTop.css"
const HeaderTop = () => {
    const [state, dispatch] = useEcommerce();
    const ref = useRef()

    return (
        <div className="header-top">
            <div className="logo">
                <img src="images/logo_branca.png" alt="Logo da empresa" />
            </div>
            <div className="header-top-right">
                <div className="search">
                    <input type="text" ref={ref} placeholder="Digite o que você procura..." onChange={() => dispatch({type: "BUSCAR_PRODUTOS", search: ref.current.value})} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="icon-header">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p><span>Nosso </span><strong>Whatsapp!</strong></p>
                </div>
                <div className="icon-header">
                    <i className="fa-brands fa-instagram"></i>
                    <p><span>Nosso </span><strong>Instagram!</strong></p>
                </div>
                <div className="icon-header">
                    <i className="fa-solid fa-circle-question"></i>
                    <p><span>Atendimento </span> <strong>e Suporte</strong></p>
                </div>
                <Link to={"/login"}><button onClick={() => dispatch({type: "VER_STATE"})}><i className="fa-solid fa-right-to-bracket"></i> Entrar</button></Link>
            </div>
        </div>
    )
}

export default HeaderTop