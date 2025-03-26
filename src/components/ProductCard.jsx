import { Link } from "react-router-dom";

import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, addToCart }) => {

  if (!product) {
    return <div className="text-danger">Errore: prodotto non valido</div>;
  }

  //DESTRUTTURIAMO OGGETTO PROPS
  const { id, image_url, name, price, category } = product;


  return (
    <div className="">
      <div className="">

        {/* Placeholder immagine se non disponibile */}
        <img
          src={image_url}
          className=""
          alt={name}
        />


        <div className="">
          {/* Nome del prodotto */}
          <h6 className="">{name}</h6>

          {/* desacrizione del prodotto */}
          <p className="">{category}</p>

          {/* Prezzo del prodotto */}
          <p>€{price}</p>

          {/* Link alla pagina dettagli */}
          <Link to={`/product/${id}`} className="">
            Vedi dettagli
          </Link>

          {/* Bottoni carrello */}
          <span className="">
            <ShoppingCart onClick={() => addToCart(product)} size={28} strokeWidth={1.5} className=" text-black hover:text-blue-500 cursor-pointer" />
            <Heart size={28} strokeWidth={1.5} className="text-black hover:text-red-500 cursor-pointer" />
          </span>

        </div>
      </div>
    </div>
  );
};


// Esporto il componente 
export default ProductCard;
