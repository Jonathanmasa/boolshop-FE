import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Componente principale per la visualizzazione dettagliata di un prodotto
export default function ProductDetailPage() {
  // Recupero parametri dall'URL
  const { id, category } = useParams();

  // Inizializzazione stati
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hook per il recupero dati del prodotto
  useEffect(() => {
    // Funzione asincrona per chiamata API
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`/api/products/${category}/${id}`);
        if (response.status === 200) {
          setProduct(response.data);
          console.log(response.data);

        } else {
          setError("Prodotto non trovato.");
        }
      } catch (err) {
        console.error(err);
        setError("Errore nel recupero del prodotto.");
      } finally {
        setLoading(false);
      }
    };


    fetchProduct();
  }, [id, category]);

  // Gestione stati di caricamento e errore
  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Prodotto non disponibile.</p>;

  return (
    <main className="container mt-4 d-flex justify-content-center">
      {/* Sezione per i dettagli del prodotto */}
      <div className="row">
        {/* Sezione immagine */}
        <div className="col-md-4">
          <img
            src={product.image_url}
            className="img-fluid detail-img"
            alt={product.name}
          />
        </div>
        {/* Sezione informazioni prodotto */}
        <div className="col-md-4">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary fw-bold">€{Number(product.price).toFixed(2)}</h4>

          {/* Aggiunta dei dettagli del prodotto */}
          {product.details && (
            <div className="product-details mt-4">
              <h5>Dettagli prodotto:</h5>
              {/* Lista dettagli prodotto con rendering condizionale */}
              <ul className="list-unstyled">
                {product.details.author && (
                  <li><strong>Autore:</strong> {product.details.author}</li>
                )}
                {product.details.edition && (
                  <li><strong>Edizione:</strong> {product.details.edition}</li>
                )}
                {product.details.gradation && (
                  <li><strong>Gradazione:</strong> {product.details.gradation}</li>
                )}
                {product.details.rarity && (
                  <li><strong>Rarità:</strong> {product.details.rarity}</li>
                )}
                {product.details.cover_type && (
                  <li><strong>Tipo copertina:</strong> {product.details.cover_type}</li>
                )}
                {product.details.genre && (
                  <li><strong>Genere:</strong> {product.details.genre}</li>
                )}
                {product.details.language && (
                  <li><strong>Lingua:</strong> {product.details.language}</li>
                )}
                {product.details.publisher && (
                  <li><strong>Editore:</strong> {product.details.publisher}</li>
                )}
                {product.details.series && (
                  <li><strong>Serie:</strong> {product.details.series}</li>
                )}
                {product.details.character && (
                  <li><strong>Personaggio:</strong> {product.details.character}</li>
                )}
                {product.details.franchise && (
                  <li><strong>Franchise:</strong> {product.details.franchise}</li>
                )}
                {product.details.height_cm && (
                  <li><strong>Altezza (cm):</strong> {product.details.height_cm}</li>
                )}
                {product.details.material && (
                  <li><strong>Materiale:</strong> {product.details.material}</li>
                )}
                {product.details.manufacturer && (
                  <li><strong>Produttore:</strong> {product.details.manufacturer}</li>
                )}
                {product.details.limited_edition && (
                  <li>
                    <strong>Edizione Limitata:</strong> {product.details.limited_edition === 1 ? "SI" : "NO"}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
