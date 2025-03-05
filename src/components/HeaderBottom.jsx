import { useEcommerce } from "../Hooks/useEcommerContext"

import "./HeaderBottom.css"

const HeaderBottom = () => {

    return (
        <div className="header-bottom">
            <nav className="categorias-header">
                <h2 className="categoria-header"><a href="#computadores">Computadores</a></h2>
                <h2 className="categoria-header"><a href="#perifericos">Periféricos</a></h2>
                <h2 className="categoria-header"><a href="#componentes">Componentes</a></h2>
                <h2 className="categoria-header"><a href="#smartphones">Smartphones & Tablets</a></h2>
            </nav>
        </div>
    )
}

export default HeaderBottom