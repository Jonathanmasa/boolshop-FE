// Import functions from React
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import context
import GlobalContext from "./contexts/GlobalContext"

// Import layouts
import DefaultLayout from "./layouts/DefaultLayout";
// Import pages
import HomePage from "./pages/HomePage"
import ProductDetailPage from "./pages/ProductDetailPage"
import NotFoundPage from "./pages/NotFoundPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // RENDER
  return (
    <GlobalContext.Provider>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            {/* route 404 not found */}
            <Route path="/footer/about_us" element={<AboutUs />} />
            <Route path="/footer/contacts" element={<Contacts />} />
            <Route path="/footer/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </GlobalContext.Provider>
  );

}

export default App;