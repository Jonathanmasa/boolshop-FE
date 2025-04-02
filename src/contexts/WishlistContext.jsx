import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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
        // Check if the product is already in the wishlist
        const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);

        if (isAlreadyInWishlist) {
            // If the product is already in the wishlist, remove it
            const newWishlist = wishlist.filter((item) => item.id !== product.id);
            setWishlist(newWishlist);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Save to localStorage

            // Show toast notification for removal
            toast.error(`${product.name} rimosso dalla wishlist!`, {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            // If the product is not in the wishlist, add it
            const newWishlist = [...wishlist, product];
            setWishlist(newWishlist);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Save to localStorage

            // Show toast notification for addition
            toast.success(`${product.name} aggiunto alla wishlist!`, {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
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
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, toast }}>
            {children}
        </WishlistContext.Provider>
    );
};

// Hook per usare il contesto della wishlist
export const useWishlistContext = () => {
    return useContext(WishlistContext);
};
