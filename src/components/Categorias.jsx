import "./Categorias.css"


const Categorias = () => {
    return (
        <div className="categorias-section">
            <h3>Categorias</h3>
            <div>
                <div className="categoria computadores">
                    <img src="/images/computadores.png" alt="Computadores" />
                    <h2>Computadores</h2>
                </div>
                <div className="categoria perifericos">
                    <img src="/images/perifericos.png" alt="Perifericos" />
                    <h2>Periféricos</h2>
                </div>
            </div>
            <div>
                <div className="categoria componentes">
                    <img src="/images/componentes.png" alt="Componentes" />
                    <h2>Componentes</h2>
                </div>
                <div className="categoria smartphones-tablets">
                    <img src="/images/smartphone.png" alt="Smartphones e Tablets" />
                    <h2>Smartphones  <br />e Tablets</h2>
                </div>
            </div>
        </div>
    )
}

export default Categorias