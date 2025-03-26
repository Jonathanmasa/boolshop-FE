import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ search, setSearch }) {
    const navigate = useNavigate(); // Usa useNavigate per navigare alla SearchPage

    // Funzione che viene chiamata ogni volta che l'utente scrive nella barra di ricerca
    const handleChange = (event) => {
        setSearch(event.target.value);  // Aggiorna lo stato con il valore digitato
    };

    // Funzione che invia la ricerca quando l'utente preme il pulsante "Cerca"
    const handleSearch = () => {
        if (search.trim()) {
            // Naviga alla pagina dei risultati con il termine di ricerca come query string
            navigate(`/search?query=${search}`);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Cerca prodotti..."
                className="search-input"
                value={search}
                onChange={handleChange}  // Aggiorna lo stato ogni volta che l'utente digita
            />
            <button className="search-button" onClick={handleSearch}>
                <Search size={28} strokeWidth={1} className="text-white hover:text-green-500 cursor-pointer" />
            </button>
        </div>
    );
}