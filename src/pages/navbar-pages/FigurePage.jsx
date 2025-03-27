import React, { useEffect } from 'react';
import { useProductContext } from '../../contexts/ProductContext';;
import ProductGrid from '../../components/ProductGrid';
import { useCartContext } from '../../contexts/CartContext';


const FigurePage = () => {
    const { fetchProducts, products, loading, error } = useProductContext();
    const { addToCart, removeFromCart } = useCartContext();

    useEffect(() => {

        // Chiamata per ottenere i prodotti
        fetchProducts('/api/products/category/figure',);
    }, []);

    return (
        <div>
            <h1 className='titlepage'>Eggrocket Figure</h1>
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

export default FigurePage;