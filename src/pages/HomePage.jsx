// Import functions from React
import { useContext } from "react";

// import axios
import axios from "axios";

// Import context
import GlobalContext from "../contexts/GlobalContext";

// Import components
import ProductCard from "../components/ProductCard";

export default function HomePage() {


    // RENDER
    return (
        <main>
            {/* sezione banner */}

            <nav>
                <div className="containerbanner">
                    <h1>Un sito creato da collezionisti per collezionisti</h1>
                    <h5>inizia a cercare i prodotti preferiti per la tua collezione</h5>
                    <div><button className="find">inizia ad esplorare</button></div>
                </div>
            </nav>

            {/* sezione prodotti  in evidenza*/}

            <nav>
                <div className="evidenza">
                    <h2>In evidenza</h2>
                </div>
            </nav>

            {/* sezione prodotti  in promozione*/}

            <nav>
                <div className="promozioni">
                    <h2>Ultime novità</h2>
                </div>
            </nav>

            {/* sezione img */}

            <nav>
                <div></div>
            </nav>

        </main >
    );
}