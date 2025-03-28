// Import functions from React
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navpages" >
            <Link to="/card" >Carte</Link>
            <Link to="/figure" >Figure</Link>
            <Link to="/manga" >Manga</Link>
            <Link to="/new-arrival" >Nuovi arrivi</Link>
            <Link to="/on-sale" >Promozioni</Link>
            <Link to="/search" >Cerca</Link>
        </nav>
    );
}