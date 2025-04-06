// import style from "./Footer.module.css"

// Import functions from React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"



const Footer = () => {

    const [isOpenInfo, setIsOpenInfo] = useState(false);
    const [isOpenAssistance, setIsOpenAssistance] = useState(false);
    const [isOpenContacts, setIsOpenContacts] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Funzione per aggiornare isMobile al resize della finestra
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                        <h3 onClick={() => setIsOpenInfo(!isOpenInfo)} className="accordion-title">
                            INFORMAZIONI {isOpenInfo ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                        </h3>
                        {(isOpenInfo || !isMobile) && (
                            infoLinks.map(link => <Link key={index += 1} to={link.url}>{link.text}</Link>)
                        )}
                    </div>

                    <div>
                        <h3 onClick={() => setIsOpenAssistance(!isOpenAssistance)} className="accordion-title">
                            ASSISTENZA {isOpenAssistance ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                        </h3>
                        {(isOpenAssistance || !isMobile) && (
                            assistenzaLinks.map(link => <Link key={index += 1} to={link.url}>{link.text}</Link>)
                        )}
                    </div>

                    <div>
                        <h3 onClick={() => setIsOpenContacts(!isOpenContacts)} className="accordion-title">
                            CONTATTI {isOpenContacts ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
                        </h3>
                        {(isOpenContacts || !isMobile) && (
                            contacts.map(text => <div key={index += 1} to={"/"}>{text}</div>)
                        )}

                        {/* socials  */}
                        <div className="socials">
                            <a href="https://www.instagram.com/eggrocket_collector?igsh=bmgycnAxNWVvM29q" target="_blank"> <i className="fa-brands fa-instagram"></i></a>
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