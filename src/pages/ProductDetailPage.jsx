import { useParams } from "react-router-dom"; // Hook per ottenere i parametri dalla URL
import { useState, useEffect } from "react"; // useState per la gestione dello stato, useEffect per effetti collaterali
import axios from "axios"; // Axios per effettuare chiamate API

import ProductCard from "../components/ProductCard"; // Componente per visualizzare i prodotti correlati

const API_URL = "http://localhost:5000"; // URL dell'API

export default function ProductDetailPage() {
  // Estrae id e categoria dai parametri della URL
  const { id, category } = useParams();
  
  // Stati per gestire il prodotto, i prodotti correlati, errori e caricamento
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect per recuperare i dettagli del prodotto principale
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Chiamata API per ottenere i dettagli del prodotto specificato
        const response = await axios.get(`${API_URL}/products/${category}/${id}`);
        
        // Se la risposta è valida, aggiorna lo stato
        if (response.status === 200) {
          setProduct(response.data); // Aggiorna lo stato con i dati del prodotto
        } else {
          setError('Prodotto non trovato.'); // Mostra errore se la risposta non è 200
        }

        setLoading(false); // Imposta il caricamento su false
      } catch (error) {
        // In caso di errore, gestisci l'errore
        setError("Errore nel recupero del prodotto.");
        console.error(error);
        setLoading(false); // Imposta il caricamento su false anche in caso di errore
      }
    };

    fetchProduct();
  }, [id, category]); // Riapre l'effetto solo se id o category cambiano

  // useEffect per recuperare i prodotti correlati (appena il prodotto principale è caricato)
  useEffect(() => {
    if (!product) return; // Se il prodotto non è stato ancora caricato, non fare nulla
    
    const fetchRelatedProducts = async () => {
      try {
        // Chiamata API per ottenere tutti i prodotti della stessa categoria
        const response = await axios.get(`${API_URL}/products/${category}`);
        
        if (response.status === 200) {
          // Filtra i prodotti correlati rimuovendo il prodotto principale dalla lista
          setRelatedProducts(response.data.filter((p) => p.id !== product.id));
        } else {
          setError('Prodotti correlati non trovati.');
        }
      } catch (error) {
        // In caso di errore, gestisci l'errore
        setError("Errore nel recupero dei prodotti correlati.");
        console.error(error);
      }
    };

    fetchRelatedProducts();
  }, [product, category]); // Questo effetto si attiva quando il prodotto cambia (ovvero, quando è stato caricato)

  // Gestione del caricamento
  if (loading) return <p>Caricamento...</p>;

  // Gestione degli errori
  if (error) return <p>{error}</p>;

  return (
    <main className="container mt-4">
      {/* Sezione per i dettagli del prodotto */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image_url} 
            className="img-fluid" 
            alt={product.name} 
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary fw-bold">€{product.price.toFixed(2)}</h4>
        </div>
      </div>

      {/* Sezione per i prodotti correlati */}
      {relatedProducts.length > 0 && (
        <section className="mt-5">
          <h2>Potrebbe interessarti anche</h2>
          <div className="d-flex gap-3 overflow-auto">
            {relatedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
