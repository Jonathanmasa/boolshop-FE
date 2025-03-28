import React, { useEffect } from 'react';
import { useProductContext } from '../../contexts/ProductContext';;
import ProductGrid from '../../components/ProductGrid';
import { useCartContext } from '../../contexts/CartContext';

const MangaPage = () => {
    const { fetchProducts, products, loading, error } = useProductContext();
    const { addToCart, removeFromCart } = useCartContext();

    useEffect(() => {

        // Chiamata per ottenere i prodotti
        fetchProducts('/api/products/category/manga',);
    }, []);

    return (
        <>

            <div className="manga-banner">
                <h1 className='titlepage'>Eggrocket Manga </h1>
            </div >
            <div>

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
        </>
    );
};

export default MangaPage;