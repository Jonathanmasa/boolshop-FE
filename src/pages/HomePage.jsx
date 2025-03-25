// Import functions from React
import { useContext } from "react";

// import axios
import axios from "axios";

// Import context
import GlobalContext from "../contexts/GlobalContext";

// Import components
import ProductCard from "../components/ProductCard";

// USO USESTATE USEEFFECT
import { useState, useEffect } from "react"

export default function HomePage() {
    // SETTIAMO STATO COMPONENTE
    const [products, setProduct] = useState([]);

    // FUNZIONE DI FEtCHING DATI LISTA PRODOTTI
    const fectProduct = () => {
        axios.get("http://localhost:3000/api/products/")
            .then(
                res => {
                    // console.log(res.data)
                    setProduct(res.data.slice(0, 6)); // Prende solo i primi 10 elementi
                }
            )
            .catch(err => console.log(err))
    }

    // fectProduct();
    useEffect(fectProduct, [])

    // FUNZIONE RENDERING MOVIES
    const renderProducts = () => {
        return products.map(
            product => {
                return (
                    <div key={product.id}>
                        <ProductCard productProp={product} />
                    </div>
                )
            }
        )
    }


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

            <nav className="containerevidenza">
                <h2>In evidenza</h2>
                <div className="evidenza">
                    {/* Listato */}
                    {renderProducts()}
                </div>
            </nav>

            {/* sezione prodotti  in promozione*/}

            <nav className="containerpromozioni">
                <h2>Ultime novità</h2>
                <div className="promozioni">
                    {renderProducts()}
                </div>
            </nav>

            {/* sezione img */}

            <nav className="containerimg">
                <div><img src="/Group-56.png" alt="" /></div>
            </nav>

        </main >
    );
}