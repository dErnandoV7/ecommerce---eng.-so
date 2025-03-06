import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="team">
                <h3>Team</h3>
                <ul>
                    <li>joseeric2310@gmail.com</li>
                    <li>d.ernandov7@gmail.com</li>
                    <li>jorgeluisl.costa@alu.ufc.br</li>
                    <li>alisonbmagalhaes4300@gmail.com</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/ernando.ma/" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</a>
                    </li>
                    <li>
                        <a href="https://wa.me/5588997244032" target="_blank"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer