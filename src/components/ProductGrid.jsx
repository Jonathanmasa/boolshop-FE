import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart, removeFromCart, addToWishlist, removeToWishlist }) => {
    console.log("Products ricevuti in ProductGrid:", products);



    return (
        <div className="product-grid">
            {!Array.isArray(products) ? (
                <p>Errore: dati prodotti non validi.</p>
            ) : products.length === 0 ? (
                <p>Nessun prodotto trovato.</p>
            ) : (
                products.map((product, index) => {
                    console.log(`🔹 Product [${index}]`, product);
                    return <ProductCard key={product?.id || index}
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        addToWishlist={addToWishlist}
                        removeToWishlist={removeToWishlist} />;
                })
            )}
        </div>
    );
};

export default ProductGrid;
