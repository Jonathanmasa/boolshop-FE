
// aggiornami




// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import context
import { ProductProvider } from "./contexts/ProductContext";
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';

// Import layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import WishlistPage from "./pages/WishlistPage";
import CardPage from "./pages/navbar-pages/CardPage";
import FigurePage from "./pages/navbar-pages/FigurePage";
import MangaPage from "./pages/navbar-pages/MangaPage";
import OnSalePage from "./pages/navbar-pages/OnSalePage";
import NewArrivalPage from "./pages/navbar-pages/NewArrivalsPage";
import SearchPage from './pages/SearchPage';
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import Shipments from "./pages/Shipments";
import PaymentMethods from "./pages/paymentMethods";
import DiscountCodes from "./pages/DiscountCodes";
import Faq from "./pages/Faq";

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  // RENDER
  return (
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route index path="/" element={<HomePage />} />
                {/* navbar-pages */}
                <Route path="/card" element={<CardPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/figure" element={<FigurePage />} />
                <Route path="/manga" element={<MangaPage />} />
                <Route path="/on-sale" element={<OnSalePage />} />
                <Route path="/new-arrival" element={<NewArrivalPage />} />

                <Route path="/products/:category/:id" element={<ProductDetailPage />} />
                <Route path="/search" element={<SearchPage />} />

                {/* footer */}
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/privacy" element={<Privacy />} />

                <Route path="/shipments" element={<Shipments />} />
                <Route path="/payment_methods" element={<PaymentMethods />} />
                <Route path="/discount_codes" element={<DiscountCodes />} />
                <Route path="/faq" element={<Faq />} />
                {/* route 404 not found */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>

  );

}

export default App;