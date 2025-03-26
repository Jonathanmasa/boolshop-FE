// Import functions from React
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";

import NavBar from "./NavBar";

import { Heart, ShoppingCart } from "lucide-react";

const Header = ({ search, setSearch }) => {


    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center p-3">
                {/* Logo del sito */}
                <div>
                    <img
                        src="/eggrocket-logo.png"
                        alt="Eggrocket Logo"
                        style={{ height: "50px" }}
                    />
                </div>

                {/* Search Bar */}
                <div className="d-flex justify-content-center">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>

                {/* Carrello e lista desideri */}
                <div className="d-flex space-x-4">
                    <Link to="/wishlist" className="me-2">
                        <Heart size={28} strokeWidth={1.2} className="text-black hover:text-red-500 cursor-pointer" />
                    </Link>
                    <Link to="/cart">
                        <ShoppingCart size={28} strokeWidth={1.2} className=" text-black hover:text-blue-500 cursor-pointer" />
                    </Link>
                </div>
            </nav>

            <nav>
                <NavBar />
            </nav>
        </header >

    )
}

export default Header;