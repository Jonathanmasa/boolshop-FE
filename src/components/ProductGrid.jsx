import React from 'react';
import ProductCard from './ProductCard';

import { List, Grid3x3 } from "lucide-react";

import { useState } from 'react';

const ProductGrid = ({ products, addToCart, removeFromCart, wishlist, addToWishlist, removeToWishlist }) => {
    console.log("Products ricevuti in ProductGrid:", products);

    const [list, setList] = useState(false);


    return (
        <>
            <button onClick={() => setList(!list)} id='griglia' className="btn btn-primary">
                {list ? <Grid3x3 size={20} /> : <List size={20} />}
            </button>
            <div className={list ? "product-grid-list" : "product-grid"}>


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
                            wishlist={wishlist}
                            addToWishlist={addToWishlist}
                            removeToWishlist={removeToWishlist} />;
                    })
                )}
            </div>
        </>
    );
};

export default ProductGrid;
