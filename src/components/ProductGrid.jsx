import React from 'react';
import ProductCard from './ProductCard';
const ProductGrid = ({ products }) => {
    return (
        <div className="product-grid">
            {products.length === 0 ? (
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
