// Import functions from React
import { Outlet } from "react-router-dom";
import { useState } from "react";

// Import page_main_components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    const [search, setSearch] = useState("");

    // RENDER
    return (
        <>
            <Header search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </>
    );
}