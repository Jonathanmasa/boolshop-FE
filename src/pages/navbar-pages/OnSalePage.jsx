// Importa React e il hook useEffect per gestire gli effetti collaterali
import React, { useEffect } from 'react';

// Importa il contesto dei prodotti per accedere ai dati e alle funzioni relative ai prodotti
import { useProductContext } from '../../contexts/ProductContext';

// Importa il componente ProductGrid per visualizzare i prodotti in una griglia
import ProductGrid from '../../components/ProductGrid';

// Importa il contesto del carrello per gestire l'aggiunta e la rimozione dei prodotti dal carrello
import { useCartContext } from '../../contexts/CartContext';
// Importa il contesto della wishlist per gestire l'aggiunta e la rimozione dei prodotti dalla wishlist
import { useWishlistContext } from '../../contexts/WishlistContext';


const OnSalePage = () => {
    // Estrai le funzioni e i dati dal contesto dei prodotti
    const { fetchProducts, products, loading, error } = useProductContext();
    // Estrai le funzioni per aggiungere e rimuovere prodotti dal carrello
    const { addToCart, removeFromCart } = useCartContext();

    const { addToWishlist, removeFromWishlist } = useWishlistContext();


    // Effettua una chiamata per ottenere i prodotti della categoria "card" quando il componente viene montato
    useEffect(() => {

        // Chiamata per ottenere i prodotti
        fetchProducts('/api/products/on-sale',);// Chiamata API per ottenere i prodotti
    }, []); // Dipendenza vuota: esegue l'effetto solo al montaggio del componente


    // Funzione per scorrere alla sezione dei prodotti
    const scrollToProducts = () => {
        const productSection = document.getElementById('product-section'); // Trova l'elemento con id "product-section"
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth' }); // Scorri alla sezione con un'animazione fluida
        }
    };

    return (
        <div>
            {/* Banner della pagina con il titolo cliccabile */}
            <div className="onsale-banner">
                <h1
                    className='titlepage' onClick={scrollToProducts} // Al clic, esegui lo scroll alla sezione dei prodotti
                    style={{ cursor: 'pointer' }} // Cambia il cursore per indicare che è cliccabile
                >Eggrocket Promozioni</h1>
            </div >





            {/* Sezione dei prodotti */}
            <div id="product-section">
                {loading ? ( // Mostra un messaggio di caricamento se i dati sono in fase di fetch
                    <p>Caricamento...</p>
                ) : error ? ( // Mostra un messaggio di errore se c'è un problema con la chiamata API
                    <p>{error}</p>
                ) : (
                    // Mostra la griglia dei prodotti se i dati sono stati caricati correttamente
                    <ProductGrid
                        products={products} // Passa i prodotti al componente ProductGrid
                        addToCart={addToCart} // Passa la funzione per aggiungere prodotti al carrello
                        removeFromCart={removeFromCart} // Passa la funzione per rimuovere prodotti dal carrello
                        addToWishlist={addToWishlist}
                        removeToWishlist={removeFromWishlist}
                    />
                )}
            </div>
        </div>
    );
};

export default OnSalePage;


