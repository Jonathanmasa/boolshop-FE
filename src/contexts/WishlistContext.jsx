import React, { createContext, useContext, useState, useEffect } from 'react';

// Creiamo il contesto per la wishlist
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);

    // Funzione per recuperare la wishlist dal localStorage
    const loadWishlist = () => {
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);
    };

    // Funzione per aggiungere un prodotto alla wishlist
    const addToWishlist = (product) => {
        const newWishlist = [...wishlist, product];
        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Salva nel localStorage
    };

    // Funzione per rimuovere un prodotto dalla wishlist
    const removeFromWishlist = (productId) => {
        const newWishlist = wishlist.filter((product) => product.id !== productId);
        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Salva nel localStorage
    };

    useEffect(() => {
        loadWishlist();
    }, []);

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Hook per usare il contesto della wishlist
export const useWishlistContext = () => {
    return useContext(WishlistContext);
};
