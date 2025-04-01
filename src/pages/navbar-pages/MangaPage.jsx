// Importa React e il hook useEffect per gestire gli effetti collaterali
import React, { useEffect } from 'react';

// Importa il contesto dei prodotti per accedere ai dati e alle funzioni relative ai prodotti
import { useProductContext } from '../../contexts/ProductContext';

// Importa il componente ProductGrid per visualizzare i prodotti in una griglia
import ProductGrid from '../../components/ProductGrid';

// Importa il contesto del carrello per gestire l'aggiunta e la rimozione dei prodotti dal carrello
import { useCartContext } from '../../contexts/CartContext';

const MangaPage = () => {
    // Estrai le funzioni e i dati dal contesto dei prodotti
    const { fetchProducts, products, loading, error } = useProductContext();
    // Estrai le funzioni per aggiungere e rimuovere prodotti dal carrello
    const { addToCart, removeFromCart } = useCartContext();

    // Effettua una chiamata per ottenere i prodotti della categoria "card" quando il componente viene montato
    useEffect(() => {

        // Chiamata per ottenere i prodotti
        fetchProducts('/api/products/category/manga',);// Chiamata API per ottenere i prodotti
    }, []); // Dipendenza vuota: esegue l'effetto solo al montaggio del componente

    // Funzione per scorrere alla sezione dei prodotti
    const scrollToProducts = () => {
        const productSection = document.getElementById('product-section');
        const header = document.querySelector('header'); // Seleziona l'header
        const navbar = document.querySelector('.navpages'); // Seleziona la navbar

        console.log('header:', header); // Debug per controllare se è stato selezionato
        console.log('Navbar:', navbar); // Debug per controllare se è stato selezionato


        if (productSection) {
            const headerHeight = header ? header.offsetHeight : 0;
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const offset = headerHeight + navbarHeight - 75;

            console.log('header Height:', headerHeight); // Debug per controllare se è stato selezionato
            console.log('Navbar Height:', navbarHeight);
            console.log('Offset:', offset);

            const productPosition = productSection.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: productPosition - offset,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div>
            {/* Banner della pagina con il titolo cliccabile */}
            <div className="manga-banner">
                <h1
                    className='titlepage' onClick={scrollToProducts} // Al clic, esegui lo scroll alla sezione dei prodotti
                    style={{ cursor: 'pointer' }} // Cambia il cursore per indicare che è cliccabile
                >Eggrocket Manga</h1>
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
                    />
                )}
            </div>
        </div>
    );
};

export default MangaPage;