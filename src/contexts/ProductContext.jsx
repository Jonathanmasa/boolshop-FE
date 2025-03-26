import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// crea contesto globale per i prodotti
const ProductContext = createContext();



// crea provider per gestire lo stato dei prodotti
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // funzione per recuperare i prodotti dal backend
    const fetchProducts = async (endpoint, params = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(endpoint, { params });
            setProducts(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider value={{ products, loading, error, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );
};


// hook per utilizzare il contesto
export const useProductContext = () => {
    return useContext(ProductContext);
};











export default ProductContext;