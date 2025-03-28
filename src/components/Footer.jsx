// import style from "./Footer.module.css"

// Import functions from React
import { Link } from "react-router-dom"


const Footer = () => {

    let index = 1

    const infoLinks = [{ text: "Chi siamo", url: "/about_us" }, { text: "Contatti", url: "/contacts" }];
    const assistenzaLinks = [{ text: "Spedizioni", url: "/shipments" }, { text: "Metodi di pagamento", url: "/payment_methods" }, { text: "Codici sconto", url: "/discount_codes" }, { text: "Domande frequenti", url: "/faq" },];
    const contacts = ["Orari servizio clienti", "Lun - Ven  08:00 - 16:00", "info@eggrocket.it"]

    return (
        <footer>
            <div className="container">
                <div>
                    <Link to={"/"}>
                        <img src="/eggrocket-logo-white.png" alt="Logo" />
                    </Link>
                    <p>
                        Egg Rocket Collector <br /> Roma, Italy
                    </p>
                </div>

                <nav>
                    <div>
                        <h3>INFORMAZIONI</h3>
                        {infoLinks.map(link => <Link key={index += 1} to={link.url}>{link.text}</Link>)}
                    </div>

                    <div>
                        <h3>ASSISTENZA</h3>
                        {assistenzaLinks.map(link => <Link key={index += 1} to={link.url}>{link.text}</Link>)}
                    </div>

                    <div>
                        <h3>CONTATTI</h3>
                        {contacts.map(text => <div key={index += 1} to={"/"}>{text}</div>)}

                        {/* socials  */}
                        <div className="socials">
                            <a href="http://www.instagram.com" target="_blank"> <i className="fa-brands fa-instagram"></i></a>
                            <a href="http://www.youtube.com" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                            <a href="http://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i> </a>
                        </div>
                    </div>
                </nav>
            </div>

            <Link to={"/privacy"} className="center">Privacy Policy - Cookie Policy</Link>
        </footer>
    )
}

export default Footer;