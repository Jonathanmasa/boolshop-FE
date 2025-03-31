import { useCartContext } from "../contexts/CartContext";
import { useWishlistContext } from "../contexts/WishlistContext";
import { Link } from "react-router-dom";

const WishlistPage = () => {

    const { wishlist, removeFromWishlist } = useWishlistContext();
    const { addToCart } = useCartContext();


    // Funzione per scorrere alla sezione dei prodotti
    const scrollToProducts = () => {
        const productSection = document.getElementById('product-section'); // Trova l'elemento con id "product-section"
        if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth' }); // Scorri alla sezione con un'animazione fluida
        }
    };




    return (
        <>
            {/* Banner della pagina con il titolo cliccabile */}
            <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light wishlist-banner">
                <div className="card p-5  text-center w-75 border-0 card-cart ">
                    <h2 className="mb-4 text-primary">La tua Lista dei desideri</h2>
                    {wishlist.length === 0 ? (
                        <>
                            <p className="text-muted fs-5">La tua Lista dei desideri è vuota.</p>
                            <Link to="/" className="btn btn-outline-primary mt-3">Torna allo shop</Link>
                        </>
                    ) : (
                        <>
                            <ul className="list-group list-group-flush text-start wishlist-cart">
                                {wishlist.map(product => (
                                    <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div className="d-flex flex-column">
                                            <strong>{product.name}</strong>
                                            <span className="text-muted">€{Number(product.price).toFixed(2)} x</span>
                                            <input
                                                type="number"
                                                value={product.quantity}
                                                min="1"
                                                className="form-control form-control-sm w-auto mt-1"
                                                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                                            />
                                        </div>
                                        <button className="btn btn-success btn-sm" onClick={() => addToCart(product.id)}>Aggiungi al carello</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => removeFromWishlist(product.id)}>Rimuovi</button>
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
        </>
    )
}

export default WishlistPage;