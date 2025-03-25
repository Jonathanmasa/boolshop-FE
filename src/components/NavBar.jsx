// Import functions from React
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navpages" >
            <Link>Carte</Link>
            <Link>Figure</Link>
            <Link>Manga</Link>
            <Link>Nuovi arrivi</Link>
            <Link>Promozioni</Link>
        </nav>
    );
}