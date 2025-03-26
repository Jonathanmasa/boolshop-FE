import React, { useState, useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import ProductGrid from '../components/ProductGrid';
import { useLocation } from 'react-router-dom';


const OnSalePage = () => {
    const { fetchProducts, products, loading, error } = useProductContext();
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        console.log("🔎 Nuova ricerca con query:", query);
        if (query) {
            // Aggiorna il termine di ricerca
            setSearchTerm(query);
            // Chiamata per ottenere i prodotti
            fetchProducts('/api/products/category/on-sale', {
                query,
                sort
            });


        }
    }, []);

    return (
        <div>
            <h1>Risultati della ricerca per "{searchTerm}"</h1>
            {loading ? (
                <p>Caricamento...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ProductGrid products={products} />
            )}
        </div>
    );
};

export default OnSalePage;
