// Definizione del componente SearchBar che riceve due props:
// - search: il valore attuale della barra di ricerca
// - setSearch: funzione per aggiornare il valore della ricerca

import { Search } from 'lucide-react'; // Assicurati di importare l'icona della lente di ingrandimento

export default function SearchBar({ search, setSearch }) {

    // Funzione che viene chiamata ogni volta che l'utente scrive nella barra di ricerca
    const handleChange = (event) => {
        setSearch(event.target.value);  // Aggiorna lo stato con il valore digitato
    };

    return (
        <nav >
            <div >
                <form >
                    <input type="search" placeholder="Cerca prodotti..."
                        aria-label="Search" value={search} onChange={handleChange} />
                </form>
            </div>
        </nav>
    );
}