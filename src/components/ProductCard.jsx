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
          <Link to={`/products/${category}/${id}`}>
            <img src={image_url} alt={name} />
          </Link>
          <div className="iconcontainer">
            <ShoppingCart onClick={() => addToCart(product)} size={20} strokeWidth={1.5} className=" text-black hover:text-blue-500 cursor-pointer m-1" />
            <Heart id="wish" size={20} strokeWidth={1.5} className="text-black hover:text-red-500 cursor-pointer" />
          </div>
        </div>
        <div className="textcontainer">
          <h5>{name}</h5>
          <p className="category">{category}</p>
          <p>{price} €</p>
        </div>
      </div >

    </>
  );
};


// Esporto il componente 
export default ProductCard;
