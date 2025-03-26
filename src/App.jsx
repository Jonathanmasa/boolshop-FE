
// aggiornami




// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

// Import context
import { ProductProvider } from "./contexts/ProductContext";
import { WishlistProvider } from './contexts/WishlistContext';
import { CartProvider } from './contexts/CartContext';

// Import layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Import pages
import HomePage from "./pages/HomePage";
import Card from "./pages/Card";
import Figure from "./pages/Figure";
import Manga from "./pages/Manga";
import OnSale from "./pages/OnSale";
import NewArrival from "./pages/NewArrival";
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
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route index path="/" element={<HomePage />} />
                {/* navbar-pages */}
                <Route path="/card" element={<Card />} />
                <Route path="/figure" element={<Figure />} />
                <Route path="/manga" element={<Manga />} />
                <Route path="/on-sale" element={<OnSale />} />
                <Route path="/new-arrival" element={<NewArrival />} />

                <Route path="/product/:id" element={<ProductDetailPage />} />
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