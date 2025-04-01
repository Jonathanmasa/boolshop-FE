import { useWishlistContext } from "../contexts/WishlistContext";
import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const WishlistPage = () => {

    const { wishlist, removeFromWishlist, updateWishlistQuantity } = useWishlistContext();
    const { addToCart } = useCartContext();

    // Calcola il totale della wishlist
    const subtotal = wishlist.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container-fluid wishlist-banner d-flex justify-content-center align-items-center min-vh-100 wishlist-cover mt-0">
            <div className="card card-cart p-5 text-center w-100 border-0 card-wishlist">
                <h2 className="mb-4" style={{ color: '#6f42c1' }}>La tua Lista dei Desideri</h2>

                {wishlist.length === 0 ? (
                    <>
                        <p className="text-muted fs-5"> La tua Lista dei desideri è vuota.</p>
                        <Link to="/" className="btn btn-outline-primary mt-3" >Torna allo shop</Link>
                    </>
                ) : (
                    <>
                        <ul className="list-group list-group-flush text-start">
                            {wishlist.map(product => (
                                <li key={product.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center card-wishlist card-cart">
                                    <div className="d-flex flex-column flex-md-row align-items-center w-100">
                                        <strong className="me-3 flex-grow-1 text-center text-md-start" style={{ minWidth: '160px' }}>{product.name}</strong>
                                        <div className="d-flex align-items-center flex-column flex-sm-row" style={{ minWidth: '200px' }}>
                                            <span className="text-muted me-3" style={{ minWidth: '65px', textAlign: 'left' }}>€{Number(product.price).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2 mt-2 mt-md-0">
                                        <button className="btn btn-success btn-sm" onClick={() => addToCart(product.id)}>
                                            <FaShoppingCart /> {/* Icona del carrello */}
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => removeFromWishlist(product.id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {/* <div className="mt-4 border-top pt-3 text-start">
                            <p className="fw-bold fs-5">💰 Subtotale: <span className="text-dark">€{subtotal.toFixed(2)}</span></p>
                            <p className="fw-bold fs-5">🚚 Spedizione: <span className="text-dark">€{shipping.toFixed(2)}</span></p>
                            <h4 className="fw-bold text-success">Totale: €{total.toFixed(2)}</h4>
                            <button className="btn btn-success mt-3 w-100">Procedi al checkout</button>
                        </div> */}
                    </>
                )}
            </div>
        </div>
    );
}

export default WishlistPage;








