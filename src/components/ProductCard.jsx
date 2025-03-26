import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  if (!product) {
    return <div className="text-danger">Errore: prodotto non valido</div>;
  }

  //DESTRUTTURIAMO OGGETTO PROPS
  const { id, image_url, name, price } = product;







  return (
    <div className="product-card">
      <div className="card border-0 shadow-sm">
        {/* Placeholder immagine se non disponibile */}
        <div className="card-img-wrapper">
          <img
            src={image_url}
            className="card-img-top"
            alt={name}
          />
        </div>

        <div className="card-body text-center">
          {/* Nome del prodotto */}
          <h6 className="card-title">{name}</h6>

          {/* Prezzo del prodotto */}
          <p className="card-text fw-bold">€{price}</p>

          {/* Link alla pagina dettagli */}
          <Link to={`/product/${id}`} className="btn btn-sm btn-outline-primary">
            Vedi dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};


// Esporto il componente 
export default ProductCard;
