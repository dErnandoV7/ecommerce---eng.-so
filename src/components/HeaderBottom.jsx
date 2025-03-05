import { useRef } from "react"
import { useEcommerce } from "../Hooks/useEcommerContext"

import "./HeaderBottom.css"

const HeaderBottom = () => {
    const ref = useRef()
    const {state, dispatch} = useEcommerce()
    
    return (
        <div className="header-bottom">
            <div className="search-bottom">
                <input type="text" ref={ref} placeholder="Digite o que você procura..." onChange={() => dispatch({ type: "BUSCAR_PRODUTOS", search: ref.current.value })} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <nav className="categorias-header">
                <h2 className="categoria-header">Computadores</h2>
                <h2 className="categoria-header">Periféricos</h2>
                <h2 className="categoria-header">Componentes</h2>
                <h2 className="categoria-header">Smartphones & Tablets</h2>
            </nav>
        </div>
    )
}

export default HeaderBottom