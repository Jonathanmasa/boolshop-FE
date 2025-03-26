// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import context
import ProductProvider from "./contexts/ProductContext";
import { WishlistProvider } from './WishlistContext';
import { CartProvider } from './CartContext';

// Import layouts
import DefaultLayout from "./layouts/DefaultLayout";



// Import pages
import HomePage from "./pages/HomePage";
import ProductCard from "./components/ProductCard";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";

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
                <Route path="/product/:category/:id" element={<ProductDetailPage />} />
                {/* route 404 not found */}
                <Route path="/footer/about_us" element={<AboutUs />} />
                <Route path="/footer/contacts" element={<Contacts />} />
                <Route path="/footer/privacy" element={<Privacy />} />
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