import React from 'react';
import ProductCard from './ProductCard';
const ProductGrid = ({ products }) => {
    console.log("🧪 Products ricevuti in ProductGrid:", products);

    return (
        <div className="product-grid">
            {!Array.isArray(products) ? (
                <p>Errore: dati prodotti non validi.</p>
            ) : products.length === 0 ? (
                <p>Nessun prodotto trovato.</p>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
};

export default ProductGrid;
