// Importa React e il hook useEffect per gestire gli effetti collaterali
import React, { useEffect } from 'react';

// Importa il contesto dei prodotti per accedere ai dati e alle funzioni relative ai prodotti
import { useProductContext } from '../../contexts/ProductContext';

// Importa il componente ProductGrid per visualizzare i prodotti in una griglia
import ProductGrid from '../../components/ProductGrid';

// Importa il contesto del carrello per gestire l'aggiunta e la rimozione dei prodotti dal carrello
import { useCartContext } from '../../contexts/CartContext';


const OnSalePage = () => {
    const { fetchProducts, products, loading, error } = useProductContext();
    const { addToCart, removeFromCart } = useCartContext();
    useEffect(() => {

        // Chiamata per ottenere i prodotti
        fetchProducts('/api/products/on-sale',);
    }, []);

    return (
        <div>
            <h1 className='titlepage'>Eggrocket Promozioni</h1>
            {loading ? (
                <p>Caricamento...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ProductGrid products={products}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            )}
        </div>
    );
};

export default OnSalePage;
