import "./HeaderBottom.css"
const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <nav className="categorias">
                <details>
                    <ul>
                        <li>Desktops</li>
                        <li>Notebooks</li>
                    </ul>
                    <summary>Computadores</summary>
                </details>
                <details>
                    <ul>
                        <li>Teclados</li>
                        <li>Mouses</li>
                        <li>Headsets</li>
                        <li>Fones de ouvido</li>
                        <li>Microfones</li>
                    </ul>
                    <summary>Periféricos</summary>
                </details>
                <details>
                    <ul>
                        <li>Processadores</li>
                        <li>Placas-mãe</li>
                        <li>Memórias RAM</li>
                        <li>Placas de vídeo</li>
                        <li>Armazenamento</li>
                        <li>Gabinetes</li>
                    </ul>
                    <summary>Componentes</summary>
                </details>
                <details>
                    <ul>
                        <li>Smartphones</li>
                        <li>Tablets</li>
                        <li>Acessórios</li>
                    </ul>
                    <summary>Smartphones e Tablets</summary>
                </details>
            </nav>
        </div>
    )
}

export default HeaderBottom