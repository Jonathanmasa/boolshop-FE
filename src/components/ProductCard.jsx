import { Link } from "react-router-dom";

import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, addToCart }) => {

  if (!product) {
    return <div className="text-danger">Errore: prodotto non valido</div>;
  }

  //DESTRUTTURIAMO OGGETTO PROPS
  const { id, image_url, name, price, category } = product;


  return (
    <>
      <div className="cardcontainer">
        <div className="imgcontainer">
          <Link to={`/product/${id}`}>
            <img src={image_url} alt={name} />
          </Link>
        </div>
        <div className="textcontainer">
          <h5>{name}</h5>
          <div className="iconcontainer">
            <ShoppingCart onClick={() => addToCart(product)} size={20} strokeWidth={1.5} className=" text-black hover:text-blue-500 cursor-pointer" />
            <Heart size={20} strokeWidth={1.5} className="text-black hover:text-red-500 cursor-pointer" />
          </div>
        </div>
        <div className="pricecontainer">
          <p className="category">{category}</p>
          <p>{price} €</p>
        </div>
      </div >

    </>
  );
};


// Esporto il componente 
export default ProductCard;
