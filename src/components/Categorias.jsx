import { useEcommerce } from "../Hooks/useEcommerContext"

import "./Categorias.css"

const Categorias = () => {
    const { state, dispatch } = useEcommerce()

    return (
        <>
            <div className="categorias-section">
                <h3>Categorias</h3>
                <div>
                    <div className="categoria computadores">
                        <a href="#computadores">
                            <img src="/images/computadores.png" alt="Computadores" />
                        </a>
                        <h2>Computadores</h2>
                    </div>
                    <div className="categoria perifericos">
                        <a href="#perifericos">
                            <img src="/images/perifericos.png" alt="Perifericos" />
                        </a>
                        <h2>Periféricos</h2>
                    </div>
                </div>
                <div>
                    <div className="categoria componentes">
                        <a href="#componentes">
                            <img src="/images/componentes.png" alt="Componentes" />
                        </a>
                        <h2>Componentes</h2>
                    </div>
                    <div className="categoria smartphones-tablets">
                        <a href="#smartphones">
                            <img src="/images/smartphone.png" alt="Smartphones e Tablets" />
                        </a>
                        <h2>Smartphones & <br />Tablets</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorias