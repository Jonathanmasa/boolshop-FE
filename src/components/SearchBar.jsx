// Definizione del componente SearchBar che riceve due props:
// - search: il valore attuale della barra di ricerca
// - setSearch: funzione per aggiornare il valore della ricerca

import { Search } from 'lucide-react';

export default function SearchBar({ search, setSearch }) {

    // Funzione che viene chiamata ogni volta che l'utente scrive nella barra di ricerca
    const handleChange = (event) => {
        setSearch(event.target.value);  // Aggiorna lo stato con il valore digitato
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Cerca prodotti..."
                className="search-input"
            />
            <button className="search-button">
                <Search size={28} strokeWidth={1} className="text-white hover:text-green-500 cursor-pointer" />
            </button>
        </div>
    );
}