// Import functions from React
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";

import { Heart, ShoppingCart } from "lucide-react";

const Header = () => {


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
                    <SearchBar />
                </div>

                {/* Carrello e lista desideri */}
                <div className="d-flex space-x-4">
                    <Link to="/wishlist" className="me-3">
                        <Heart size={28} strokeWidth={1} className="text-black hover:text-red-500 cursor-pointer" />
                    </Link>
                    <Link to="/cart">
                        <ShoppingCart size={28} strokeWidth={1} className=" text-black hover:text-blue-500 cursor-pointer" />
                    </Link>
                </div>
            </nav>

            <nav>
                <Link></Link>
            </nav>
        </header>

    )
}

export default Header;