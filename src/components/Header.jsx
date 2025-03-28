// Import functions from React
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar";

import NavBar from "./NavBar";



const Header = ({ search, setSearch }) => {


    return (
        <header>
            <nav className="egg">
                {/* Logo del sito */}
                <Link to={"/"}>
                    <img
                        src="/eggrocket-logo.png"
                        alt="Eggrocket Logo"
                        style={{ height: "70px" }}
                    />
                </Link>

                {/* Search Bar */}
                <div className="">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>

                {/* Carrello e lista desideri */}
                <div className="">
                    <Link to="/wishlist" className="heart">
                        <i class="fa-regular fa-heart"></i>{/* Icona cuore */}
                    </Link>
                    <Link to="/cart" className="cart">
                        <i class="fa-solid fa-cart-shopping"></i>{/* Icona carrello */}
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