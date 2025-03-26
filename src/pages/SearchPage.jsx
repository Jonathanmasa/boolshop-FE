import React, { useState, useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import ProductGrid from '../components/ProductGrid';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const { fetchProducts, products, loading, error } = useProductContext();
    const [searchTerm, setSearchTerm] = useState('');

    // Ottieni i parametri della query dalla URL
    const queryParams = new URLSearchParams(useLocation().search);
    const query = queryParams.get('query') || '';
    const sort = queryParams.get('sort') || 'name_asc';

    useEffect(() => {
        //quando la query cambia, chiamiamo la funzione fetchProducts
        if (query) {
            // Aggiorna il termine di ricerca
            setSearchTerm(query);
            // Chiamata per ottenere i prodotti
            fetchProducts('/api/products/search', {
                query,
                sort
            });


        }
    }, [query, sort]);

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

export default SearchPage;
