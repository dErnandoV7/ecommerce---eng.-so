import { useRef } from "react";
import { useEcommerce } from "../Hooks/useEcommerContext"
import { Link } from "react-router-dom";

import "./HeaderTop.css"
const HeaderTop = () => {
    const { state, dispatch } = useEcommerce();
    const ref = useRef()

    return (
        <div className="header-top">
            <div className="logo">
                <img src="images/logo_branca.png" alt="Logo da empresa"/>
            </div>
            <div className="header-top-right">
                <div className="search">
                    <input type="text" ref={ref} placeholder="Digite o que você procura..." onChange={() => dispatch({ type: "BUSCAR_PRODUTOS", search: ref.current.value })} />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="icon-header">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p><a href="https://wa.me/5588997244032" target="_blank"><span>Nosso </span><strong>Whatsapp!</strong></a></p>
                </div>
                <div className="icon-header">
                    <i className="fa-brands fa-instagram"></i>
                    <p><a href="https://www.instagram.com/ernando.ma/" target="_blank"><span>Nosso </span><strong>Instagram!</strong></a></p>
                </div>
                {!state.logado ?
                    (<Link to={"/login"}><button ><i className="fa-solid fa-right-to-bracket"></i> Entrar</button></Link>)
                    :
                    (
                        <div className="user-icon" onClick={() => dispatch({ type: "SET_SHOW_SIDEBAR", show: true })}>
                            <p>{state.user ? state.user.name[0] : "X"}</p>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default HeaderTop