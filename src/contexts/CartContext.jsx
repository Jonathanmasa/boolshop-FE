import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';



// Creiamo il contesto per il carrello
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Funzione per recuperare il carrello dal localStorage
    const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    };

    // Funzione per aggiungere un prodotto al carrello
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        let newCart;
        if (existingProductIndex !== -1) {
            // Se il prodotto è già nel carrello, incrementiamo la quantità
            newCart = [...cart];
            newCart[existingProductIndex].quantity += 1;
            toast.info(`Quantità aggiornata per ${product.name}`, {
                position: "bottom-right",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            // Altrimenti aggiungiamo il prodotto con quantità 1
            newCart = [...cart, { ...product, quantity: 1 }];
            toast.success(`${product.name} aggiunto al carrello`, {
                position: "bottom-right",
                autoClose: 800,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart)); // Salva nel localStorage
    };

    // Funzione per rimuovere un prodotto dal carrello
    const removeFromCart = (productId) => {

        // Troviamo il prodotto che vogliamo rimuovere
        const removedProduct = cart.find((product) => product.id === productId);
        // Rimuoviamo il prodotto dal carrello
        const newCart = cart.filter((product) => product.id !== productId);


        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart)); // 

        // Mostra la notifica solo se il prodotto è stato trovato
        if (removedProduct) {
            toast.warn(`${removedProduct.name} rimosso dal carrello`);
        }
    };

    // Funzione per aggiornare la quantità di un prodotto nel carrello
    const updateQuantity = (productId, quantity) => {
        const newCart = cart.map((product) =>
            product.id === productId ? { ...product, quantity } : product
        );
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart)); // Salva nel localStorage
    };

    useEffect(() => {
        loadCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, toast }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook per usare il contesto del carrello
export const useCartContext = () => {
    return useContext(CartContext);
};
