// import style from "./Footer.module.css"

// Import functions from React
import { Link } from "react-router-dom"

// lucide icons
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {

    let index = 1

    const infoLinks = [{ text: "Chi siamo", url: "/footer/about_us" }, { text: "Contatti", url: "/footer/contacts" }];

    const assistenzaLinks = ["Spedizioni", "Metodi di pagamento", "Codici sconto", "Domande frequenti"];
    const contacts = ["Orari servizio clienti", "Lun - Ven  08:00 - 16:00", "info@eggrocket.it"]

    return (
        <footer>
            <div className="container">
                <div>
                    <img src="/eggrocket-logo-white.png" alt="Logo" />
                    <p>
                        Egg Rocket Collector Roma, Italy
                    </p>
                </div>

                <nav>
                    <div>
                        <h3>INFORMAZIONI</h3>
                        {infoLinks.map(link => <Link key={index += 1} to={link.url}>{link.text}</Link>)}
                    </div>

                    <div>
                        <h3>ASSISTENZA</h3>
                        {assistenzaLinks.map(link => <Link key={index += 1} to={"/"}>{link}</Link>)}
                    </div>

                    <div>
                        <h3>CONTATTI</h3>
                        {contacts.map(text => <div key={index += 1} to={"/"}>{text}</div>)}

                        {/* socials  */}
                        <div className="socials">
                            <a href="http://www.instagram.com" target="_blank"> <Instagram /></a>
                            <a href="http://www.youtube.com" target="_blank"> <Youtube /></a>
                            <a href="http://www.facebook.com" target="_blank"> <Facebook /></a>
                        </div>
                    </div>
                </nav>
            </div>

            <Link to={"/footer/privacy"} className="center">Privacy Policy - Cookie Policy</Link>
        </footer>
    )
}

export default Footer;