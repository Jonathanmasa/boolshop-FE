// Import functions from React
import React from "react";
// Import NavLink from react-router-dom for navigation
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navpages">
            <NavLink to="/card" className={({ isActive }) => (isActive ? "active" : "")}>
                Carte
            </NavLink>
            <NavLink to="/figure" className={({ isActive }) => (isActive ? "active" : "")}>
                Figures
            </NavLink>
            <NavLink to="/manga" className={({ isActive }) => (isActive ? "active" : "")}>
                Manga
            </NavLink>
            <NavLink to="/new-arrival" className={({ isActive }) => (isActive ? "active" : "")}>
                Nuovi arrivi
            </NavLink>
            <NavLink to="/on-sale" className={({ isActive }) => (isActive ? "active" : "")}>
                Promozioni
            </NavLink>
            <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>
                Cerca
            </NavLink>
        </nav>
    );
}