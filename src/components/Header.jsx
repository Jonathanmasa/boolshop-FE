// Import functions from React
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";

import NavBar from "./NavBar";

import { Heart, ShoppingCart } from "lucide-react";

const Header = ({ search, setSearch }) => {


    return (
        <header>
            <nav className="egg">
                {/* Logo del sito */}
                <Link to={"/"}>
                    <img
                        src="/eggrocket-logo.png"
                        alt="Eggrocket Logo"
                        style={{ height: "50px" }}
                    />
                </Link>

                {/* Search Bar */}
                <div className="">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>

                {/* Carrello e lista desideri */}
                <div className="">
                    <Link to="/wishlist" className="heart">
                        <Heart size={28} strokeWidth={1.5} className="text-black hover:text-red-500 cursor-pointer" />
                    </Link>
                    <Link to="/cart">
                        <ShoppingCart size={28} strokeWidth={1.5} className=" text-black hover:text-blue-500 cursor-pointer" />
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