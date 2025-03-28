import { useState } from "react";

// Import functions from React
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";

import NavBar from "./NavBar";


const Header = ({ search, setSearch }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header>
            <nav className="egg">

                 {/* Hamburger menu per mobile */}
                 <button className="menu-button" onClick={() => setIsSidebarOpen(true)}>
                    <Menu size={32} strokeWidth={1.5} />
                </button>


                {/* Logo del sito */}
                <Link to={"/"}>
                    <img
                        src="/Group 57.png"
                        alt="Eggrocket Logo"
                        style={{ height: "50px" }}
                    />
                </Link>

                
                {/* Search Bar */}
                <div className="search-bar">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>

                     {/* Carrello e lista desideri */}
                     <div className="wish-cart">
                    
                    <Link to="/wishlist" className="heart">
                        <i className="fa-regular fa-heart"></i>{/* Icona cuore */}
                    </Link>
                    <Link to="/cart" className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>{/* Icona carrello */}
                    </Link>
                </div>

            </nav>

            <nav>
                <NavBar />
            </nav>

             {/* Sidebar per mobile */}
             <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <div className="sidebar-content">
                    {/* Bottone chiusura sidebar */}
                    <button className="close-button" onClick={() => setIsSidebarOpen(false)}>
                        <X size={32} strokeWidth={1.5} />
                    </button>

                    {/* Logo in alto */}
                    <Link to={"/"} className="sidebar-logo">
                        <img src="/eggrocket-logo.png" alt="Eggrocket Logo" />
                    </Link>

                    {/* Categorie della navbar */}
                    <nav className="sidebar-nav">
                        <Link to="/card" onClick={() => setIsSidebarOpen(false)}>Carte</Link>
                        <Link to="/figure" onClick={() => setIsSidebarOpen(false)}>Figure</Link>
                        <Link to="/manga" onClick={() => setIsSidebarOpen(false)}>Manga</Link>
                        <Link to="/new-arrival" onClick={() => setIsSidebarOpen(false)}>Nuovi arrivi</Link>
                        <Link to="/on-sale" onClick={() => setIsSidebarOpen(false)}>Promozioni</Link>
                        <Link to="/search" onClick={() => setIsSidebarOpen(false)}>Cerca</Link>
                    </nav>
                </div>
            </div>

        </header >

    )
}

export default Header;