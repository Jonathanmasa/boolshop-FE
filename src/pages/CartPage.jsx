import { useCartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCartContext();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal >= 50 ? 0 : 10;
    const total = subtotal + shipping;

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card p-5 shadow-lg text-center w-75 border-0">
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
                                    <button className="btn btn-danger btn-sm">Rimuovi</button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 border-top pt-3 text-start">
                            <p className="fw-bold fs-5">💰 Subtotale: <span className="text-dark">€{subtotal.toFixed(2)}</span></p>
                            <p className="fw-bold fs-5">🚚 Spedizione: <span className="text-dark">€{shipping.toFixed(2)}</span></p>
                            <h4 className="fw-bold text-success">Totale: €{total.toFixed(2)}</h4>
                            <button className="btn btn-success mt-3 w-100">Procedi al checkout</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;
