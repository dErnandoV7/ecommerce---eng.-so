import { useEcommerce } from "../Hooks/useEcommerContext"

import "./HeaderBottom.css"

const HeaderBottom = () => {

    return (
        <div className="header-bottom">
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