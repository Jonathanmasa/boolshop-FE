import { Link } from "react-router-dom";


const ProductCard = ({ product, addToCart, addToWishlist }) => {

  if (!product) {
    return <div className="text-danger">Errore: prodotto non valido</div>;
  }

  //DESTRUTTURIAMO OGGETTO PROPS
  const { id, image_url, name, price, category } = product;


  return (
    <>
      <div className="cardcontainer">
        <div className="imgcontainer">
          <Link to={`/products/${category}/${id}`}>
            <img src={image_url} alt={name} />
          </Link>
          <div className="iconcontainer">
            <i onClick={() => addToWishlist(product)} id="hearthome" className="fa-regular fa-heart"></i>{/* Icona cuore */}
            <i onClick={() => addToCart(product)} id="carthome" className="fa-solid fa-cart-shopping"></i>{/* Icona carrello */}
          </div >
        </div >
        <div className="textcontainer">
          <h4>{name}</h4>
          <p className="category">{category}</p>
          <p>{price} €</p>
        </div>
      </div >

    </>
  );
};

// Esporto il componente 
export default ProductCard;
