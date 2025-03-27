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
      <div>
        <Link to={`/product/${id}`}>
          <img src={image_url} alt={name} />
        </Link>
        <div>
          <h5>
            <span className="title">{name}</span>
            <ShoppingCart onClick={() => addToCart(product)} size={28} strokeWidth={1.5} className=" text-black hover:text-blue-500 cursor-pointer" />
            <Heart size={28} strokeWidth={1.5} className="text-black hover:text-red-500 cursor-pointer" />
          </h5>
          <span className="title">{category}</span>
          <span>{price} €</span>
        </div>
      </div >
    </>
  );
};


// Esporto il componente 
export default ProductCard;
