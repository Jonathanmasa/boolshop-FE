import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { useCartContext } from '../contexts/CartContext';
import { useWishlistContext } from '../contexts/WishlistContext';

export default function SearchPage() {
    const { addToCart, removeFromCart } = useCartContext();
    const { addToWishlist, removeToWishlist } = useWishlistContext();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Recuperiamo eventuale query iniziale dalla URL
    const initialQuery = searchParams.get('query') || '';
    const [query, setQuery] = useState(initialQuery);
    const [type, setType] = useState('');
    const [sort, setSort] = useState('name_asc');

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Funzione per recuperare i prodotti filtrati dal server
    const fetchFilteredProducts = async (queryParam = query, typeParam = type, sortParam = sort) => {
        setLoading(true);
        try {
            const response = await axios.get('/api/products/searchFiltred', {
                params: {
                    query: queryParam,
                    type: typeParam,
                    sort: sortParam
                }
            });

            setProducts(response.data);
            setError(null);
        } catch (err) {
            console.error('Errore nella ricerca:', err);
            setError('Errore nel caricamento dei prodotti');
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const q = searchParams.get('query') || '';
        const t = searchParams.get('type') || '';
        const s = searchParams.get('sort') || 'name_asc';

        setQuery(q);
        setType(t);
        setSort(s);

        if (q.trim() || t.trim()) {
            fetchFilteredProducts(q, t, s);
        }
    }, [searchParams]);

    // Ricerca manuale dal form UI
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const newParams = new URLSearchParams();
        if (query) newParams.set('query', query);
        if (type) newParams.set('type', type);
        if (sort) newParams.set('sort', sort);
        navigate(`/search?${newParams.toString()}`);
        fetchFilteredProducts(query, type, sort);
    };

    return (
        <div className="container mt-4 search-page">
            <h1 className="titlepage">Cerca Prodotti</h1>

            {/* Form per UI di filtri */}
            <form onSubmit={handleSearchSubmit} className="mb-4 d-flex gap-3 flex-wrap align-items-end">
                <div className="form-group">
                    <label>Parola chiave</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Nome, brand, ecc..."
                    />
                </div>

                <div className="form-group">
                    <label>Categoria</label>
                    <select
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Tutte</option>
                        <option value="card">Card</option>
                        <option value="figure">Figure</option>
                        <option value="manga">Manga</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Ordina per</label>
                    <select
                        className="form-control"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="name_asc">Nome (A-Z)</option>
                        <option value="name_desc">Nome (Z-A)</option>
                        <option value="price_asc">Prezzo crescente</option>
                        <option value="price_desc">Prezzo decrescente</option>
                        <option value="date_desc">Ultimi arrivi</option>
                        <option value="date_asc">Data più vecchia</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Cerca
                </button>
            </form>

            {loading && <p>Caricamento in corso...</p>}
            {error && <p className="text-danger">{error}</p>}

            <ProductGrid
                products={products}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addToWishlist={addToWishlist}
                removeToWishlist={removeToWishlist}
            />
        </div>
    );
}
