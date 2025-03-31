// Import functions from React
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    // Indici di scorrimento
    const [featuredStartIndex, setFeaturedStartIndex] = useState(0);
    const [newStartIndex, setNewStartIndex] = useState(0);

    const productsRef = useRef(null);
    const [itemsToShow, setItemsToShow] = useState(5);

    // FETCH API
    const fetchProducts = () => {
        Promise.all([
            axios.get("/api/products/on-sale"),
            axios.get("/api/products/new-arrivals")
        ])
            .then(([featuredRes, newRes]) => {
                setFeaturedProducts(featuredRes.data);
                setNewProducts(newRes.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(fetchProducts, []);

    const scrollToProducts = () => {
        productsRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsToShow(2);
            } else {
                setItemsToShow(5);
            }
        };

        handleResize(); // Imposta il valore iniziale
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // RENDER prodotti in evidenza (da featuredStartIndex, per itemsToShow elementi)
    const renderFeaturedProducts = () => {
        const slice = featuredProducts.slice(featuredStartIndex, featuredStartIndex + itemsToShow);
        return slice.map(product => (
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        ));
    };

    // RENDER nuovi arrivi (da newStartIndex, per itemsToShow elementi)
    const renderNewProducts = () => {
        const slice = newProducts.slice(newStartIndex, newStartIndex + itemsToShow);
        return slice.map(product => (
            <div key={product.id}>
                <ProductCard product={product} />
            </div>
        ));
    };

    // NAVIGAZIONE
    const handleScroll = (type, direction) => {
        const maxFeatured = featuredProducts.length;
        const maxNew = newProducts.length;

        if (type === 'featured') {
            setFeaturedStartIndex(prev =>
                direction === 'left'
                    ? Math.max(0, prev - itemsToShow)
                    : Math.min(prev + itemsToShow, maxFeatured - itemsToShow)
            );
        }

        if (type === 'new') {
            setNewStartIndex(prev =>
                direction === 'left'
                    ? Math.max(0, prev - itemsToShow)
                    : Math.min(prev + itemsToShow, maxNew - itemsToShow)
            );
        }
    };

    return (
        <main>
            {/* Banner */}
            <nav>
                <div className="containerbanner">
                    <h1>Un sito creato da collezionisti per collezionisti</h1>
                    <h5>Inizia a cercare i prodotti preferiti per la tua collezione</h5>
                    <div>
                        <button className="find" onClick={scrollToProducts}>
                            Inizia ad esplorare
                        </button>
                    </div>
                </div>
            </nav>

            {/* In evidenza */}
            <nav className="containerevidenza" ref={productsRef}>
                <h2>In evidenza</h2>
                <div className="discount">

                    <div className="evidenza">
                        <button className="scroll-button" onClick={() => handleScroll('featured', 'left')}>←</button>
                        {renderFeaturedProducts()}
                        <button className="scroll-button" onClick={() => handleScroll('featured', 'right')}>→</button>
                    </div>

                </div>
            </nav>

            {/* Divisore */}
            <div className="divisore">
                <img src="/divisore2.png" alt="" />
            </div>

            {/* Ultime novità */}
            <nav className="containerpromozioni">
                <h2>Ultime novità</h2>
                <div className="new">

                    <div className="promozioni">
                        <button className="scroll-button" onClick={() => handleScroll('new', 'left')}>←</button>
                        {renderNewProducts()}
                        <button className="scroll-button" onClick={() => handleScroll('new', 'right')}>→</button>
                    </div>

                </div>
            </nav>

            {/* Immagine finale */}
            <nav className="container-img-sopra-footer">
                <div><img src="/Group-56.png" alt="" /></div>
            </nav>
        </main>
    );
}