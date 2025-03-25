// import style from "./Footer.module.css"

// Import functions from React
import { Link } from "react-router-dom"

const Footer = () => {

    let index = 1

    const infoLinks = ["Chi siamo", "Contatti", "Partners", "Eventi", "Lavora con noi"];
    const assistenzaLinks = ["Spedizioni", "Metodi di pagamento", "Codici sconto", "Domande frequenti", "Resi e rimborsi"];
    const contactsLinks = ["Orari servizio clienti", "Lun - Ven  08:00 - 16:00", "info@eggrocket.it"]

    return (
        <footer>
            <div className="container">
                <div>
                    <img src="/eggrocket-logo.png" alt="Logo" />
                    <p>
                        Egg Rocket Collector Roma, Italy
                    </p>
                </div>
                <nav>
                    <div>
                        <h3>INFORMAZIONI</h3>
                        {infoLinks.map(link => <Link key={index += 1} to={"/"}>{link}</Link>)}
                    </div>

                    <div>
                        <h3>ASSISTENZA</h3>
                        {assistenzaLinks.map(link => <Link key={index += 1} to={"/"}>{link}</Link>)}
                    </div>

                    <div>
                        <h3>CONTATTI</h3>
                        {contactsLinks.map(link => <Link key={index += 1} to={"/"}>{link}</Link>)}
                    </div>
                </nav>
            </div>

            <Link to={"/"} className="center">Privacy Policy - Cookie Policy</Link>
        </footer>
    )
}

export default Footer;