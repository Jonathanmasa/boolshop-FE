import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
          <h4 className="text-primary fw-bold">€{Number(product.price).toFixed(2)}</h4>
        </div>
      </div>
    </main>
  );
}
