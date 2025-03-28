import React, { useEffect } from 'react';
import { useProductContext } from '../../contexts/ProductContext';
import ProductGrid from '../../components/ProductGrid';
import { useCartContext } from '../../contexts/CartContext';

const CardPage = () => {
    const { fetchProducts, products, loading, error } = useProductContext();
    const { addToCart, removeFromCart } = useCartContext();

    useEffect(() => {

        // Chiamata per ottenere i prodotti
        fetchProducts('/api/products/category/card',);
    }, []);

    return (
        <div>

            <div className="card-banner">
                <h1 className='titlepage'>Eggrocket cards </h1>
            </div >


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

export default CardPage;
