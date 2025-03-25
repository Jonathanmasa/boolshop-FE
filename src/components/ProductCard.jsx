import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="card border-0 shadow-sm">
        {/* Placeholder immagine se non disponibile */}
        <div className="card-img-wrapper">
          <img
            src={product.image_url}
            className="card-img-top"
            alt={product.name}
          />
        </div>

        <div className="card-body text-center">
          {/* Nome del prodotto */}
          <h6 className="card-title">{product.name}</h6>

          {/* Prezzo del prodotto */}
          <p className="card-text fw-bold">€{product.price.toFixed(2)}</p>

          {/* Link alla pagina dettagli */}
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary">
            Vedi dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};


// Esporto il componente 
export default ProductCard;
