import { Link } from "react-router-dom";
import { useWishlistContext } from "../contexts/WishlistContext";
import { useCartContext } from "../contexts/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useCartContext();

  if (!product) {
    return <div className="text-danger">Errore: prodotto non valido</div>;
  }

  //DESTRUTTURIAMO OGGETTO PROPS
  const { id, image_url, name, price, discounted_price, category } = product;


  // Verifica se il prodotto ha un prezzo scontato valido
  const isDiscounted = discounted_price && discounted_price < price;

  const { addToWishlist, wishlist } = useWishlistContext()
  // Check if the product is in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === id);


  return (
    <>
      <div className="cardcontainer">
        <div className="imgcontainer">
          <Link to={`/products/${category}/${id}`}>
            <img src={image_url} alt={name} />
          </Link>
          <div className="iconcontainer">
            <i onClick={() => addToWishlist(product)} id="hearthome" className={`fa-regular fa-heart ${isInWishlist ? 'active' : ''}`}></i>{/* Icona cuore */}
            <i onClick={() => addToCart(product)} id="carthome" className="fa-solid fa-cart-shopping"></i>{/* Icona carrello */}
          </div >
        </div >

        <div className="textcontainer">
          <h4 className="product-card-title" >{name}</h4>
          <p className="category">{category}</p>

          {/* Mostra prezzi scontati o normali */}
          {isDiscounted ? (
            <p>
              <span className="text-muted text-decoration-line-through me-2">
                €{Number(price).toFixed(2)}
              </span>
              <span className="text-danger fw-bold">
                €{Number(discounted_price).toFixed(2)}
              </span>
            </p>
          ) : (
            <p>€{Number(price).toFixed(2)}</p>
          )}
        </div>
      </div >

    </>
  );
};

// Esporto il componente 
export default ProductCard;
