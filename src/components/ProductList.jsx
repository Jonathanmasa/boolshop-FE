// Import functions from React
import { useState, useEffect } from "react";

// Import axios
import axios from "axios";

// Import components
import ProductCard from "../components/ProductCard";

export default function ProductList() {
    // Stati per i prodotti
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    // Funzione di fetching per due chiamate API in parallelo
    const fetchProducts = () => {
        Promise.all([
            axios.get("/api/products/on-sale"),  // Chiamata per i prodotti in evidenza
            axios.get("/api/products/new-arrivals")  // Chiamata per le ultime novità
        ])
            .then(([featuredRes, newRes]) => {
                setFeaturedProducts(featuredRes.data.slice(1, 5));
                setNewProducts(newRes.data.slice(5, 10));
            })
            .catch(err => console.log(err));
    };

    // Esegui la chiamata API al montaggio del componente
    useEffect(fetchProducts, []);

    // Rendering prodotti in evidenza
    const renderFeaturedProducts = () => {
        return featuredProducts.map(product => (
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        ));
    };

    // Rendering prodotti in promozione
    const renderNewProducts = () => {
        return newProducts.map(product => (
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        ));
    };

    // RENDER
    return (
        <main>
            {/* Sezione banner */}
            <nav>
                <div className="containerbanner">
                    <h1>Un sito creato da collezionisti per collezionisti</h1>
                    <h5>Inizia a cercare i prodotti preferiti per la tua collezione</h5>
                    <div><button className="find">Inizia ad esplorare</button></div>
                </div>
            </nav>

            {/* Sezione prodotti in evidenza */}
            <nav className="containerevidenza">
                <h2>In evidenza</h2>
                <div className="evidenza">
                    {renderFeaturedProducts()}
                </div>
            </nav>

            {/* Sezione prodotti in promozione */}
            <nav className="containerpromozioni">
                <h2>Ultime novità</h2>
                <div className="promozioni">
                    {renderNewProducts()}
                </div>
            </nav>

            {/* Sezione immagine */}
            <nav className="containerimg">
                <div><img src="/Group-56.png" alt="" /></div>
            </nav>
        </main>
    );
}
