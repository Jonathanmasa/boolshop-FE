// Import delle dipendenze necessarie
import { useCartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

// Componente principale per la visualizzazione del carrello
const CartPage = () => {
    // Recupero funzioni e stato dal contesto del carrello
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    // Calcolo totali del carrello
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal >= 50 ? 0 : 10;
    const total = subtotal + shipping;

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 cart-cover">
            <div className="card p-5 text-center w-100 border-0 card-cart">
                <h2 className="mb-4 text-primary">Il tuo carrello</h2>
                {cart.length === 0 ? (
                    <>
                        <p className="text-muted fs-5">Il carrello è vuoto.</p>
                        <Link to="/" className="btn btn-outline-primary mt-3">Torna allo shop</Link>
                    </>
                ) : (
                    <>
                        <ul className="list-group list-group-flush text-start">
                            {cart.map(product => (
                                <li key={product.id} className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center card-cart">
                                    <div className="d-flex flex-column flex-md-row align-items-center w-100">
                                        <div className="img-container">
                                            <img src={product.image_url} alt={product.name} />
                                        </div>
                                        <strong className="me-3 flex-grow-1 text-center text-md-start" style={{ minWidth: '160px' }}>{product.name}</strong>

                                        <div className="d-flex align-items-center flex-column flex-sm-row" style={{ minWidth: '200px' }}>
                                            <span className="text-muted me-3 fw-bold" style={{ minWidth: '65px', textAlign: 'left' }}>€{Number(product.price).toFixed(2)}</span>

                                            <div className="input-group input-group-sm w-auto">
                                                <button className="btn btn-outline-secondary" onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))}>-
                                                </button>
                                                <input
                                                    type="text"
                                                    className="form-control text-center"
                                                    value={product.quantity}
                                                    readOnly
                                                    style={{ width: '35px' }}
                                                />
                                                <button className="btn btn-outline-secondary" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger btn-sm mt-2 mt-md-0" onClick={() => removeFromCart(product.id)}>
                                        <FaTrash />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 border-top pt-3 text-start">
                            <p className="fw-bold fs-5">💰 Subtotale: <span className="text-dark">€{subtotal.toFixed(2)}</span></p>
                            <p className="fw-bold fs-5">🚚 Spedizione: <span className="text-dark">€{shipping.toFixed(2)}</span></p>
                            <h4 className="fw-bold text-success">Totale: €{total.toFixed(2)}</h4>
                            <Link to="/checkout" className="btn btn-success mt-3 w-100">
                                Procedi al checkout
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;