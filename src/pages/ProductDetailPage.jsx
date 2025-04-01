import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Componente principale per la visualizzazione dettagliata di un prodotto
export default function ProductDetailPage() {
  const { id, category } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/products/${category}/${id}`);
        if (response.status === 200) {
          setProduct(response.data);
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

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Prodotto non disponibile.</p>;



  // Verifica se il prodotto ha un prezzo scontato valido
  const isDiscounted = product.discounted_price && product.discounted_price < product.price;


  console.log({
    price: product.price,
    discounted_price: product.discounted_price,
    isDiscounted: isDiscounted
  });

  return (
    <main className="product-detail-container">
      {/* Contenitore principale */}
      <div className="product-detail-wrapper">
        {/* Sezione immagine */}
        <div className="product-image-container">
          <img
            src={product.image_url}
            className="product-image"
            alt={product.name}
          />
        </div>

        {/* Sezione informazioni prodotto */}
        <div className="product-info-container">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          {/* <h4 className="product-price">€{Number(product.price).toFixed(2)}</h4> */}
          {/* Mostra prezzi scontati o normali */}
          {isDiscounted ? (
            <p>
              <h4 className="text-muted text-decoration-line-through me-2">
                €{Number(product.price).toFixed(2)}
              </h4>
              <h4 className="text-danger fw-bold">
                €{Number(product.discounted_price).toFixed(2)}
              </h4>
            </p>
          ) : (
            <p>€{Number(product.price).toFixed(2)}</p>
          )}




          {product.details && (
            <div className="product-details">
              <h5 className="product-details-title">Dettagli prodotto:</h5>
              <ul className="product-details-list">
                {product.details.author && (
                  <li className="product-detail-item"><strong>Autore:</strong> {product.details.author}</li>
                )}
                {product.details.edition && (
                  <li className="product-detail-item"><strong>Edizione:</strong> {product.details.edition}</li>
                )}
                {product.details.gradation && (
                  <li className="product-detail-item"><strong>Gradazione:</strong> {product.details.gradation}</li>
                )}
                {product.details.rarity && (
                  <li className="product-detail-item"><strong>Rarità:</strong> {product.details.rarity}</li>
                )}
                {product.details.cover_type && (
                  <li className="product-detail-item"><strong>Tipo copertina:</strong> {product.details.cover_type}</li>
                )}
                {product.details.genre && (
                  <li className="product-detail-item"><strong>Genere:</strong> {product.details.genre}</li>
                )}
                {product.details.language && (
                  <li className="product-detail-item"><strong>Lingua:</strong> {product.details.language}</li>
                )}
                {product.details.publisher && (
                  <li className="product-detail-item"><strong>Editore:</strong> {product.details.publisher}</li>
                )}
                {product.details.series && (
                  <li className="product-detail-item"><strong>Serie:</strong> {product.details.series}</li>
                )}
                {product.details.character && (
                  <li className="product-detail-item"><strong>Personaggio:</strong> {product.details.character}</li>
                )}
                {product.details.franchise && (
                  <li className="product-detail-item"><strong>Franchise:</strong> {product.details.franchise}</li>
                )}
                {product.details.height_cm && (
                  <li className="product-detail-item"><strong>Altezza (cm):</strong> {product.details.height_cm}</li>
                )}
                {product.details.material && (
                  <li className="product-detail-item"><strong>Materiale:</strong> {product.details.material}</li>
                )}
                {product.details.manufacturer && (
                  <li className="product-detail-item"><strong>Produttore:</strong> {product.details.manufacturer}</li>
                )}
                {product.details.limited_edition && (
                  <li className="product-detail-item">
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
