import { useCartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart, removerFromCart, updateQuantity } = useCartContext();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal >= 50 ? 0 : 10;
    const total = subtotal + shipping;

    return (
        <div className="container mt-5">
            <h2>Il tuo carrello</h2>
            {cart.length === 0 ? (
                <p>Il carrello è vuoto. <Link to="/">Torna allo shop</Link></p>
            ) : (
                <>
                    <ul className="list-group">

                        {cart.map(product => (
                            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{product.name}</strong><br />
                                    €{Number(product.price).toFixed(2)} x
                                    <input
                                        type="number"
                                        value={product.quantity}
                                        min="1"
                                        className="ms-2"
                                        style={{ width: '60px' }}
                                        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                                    />
                                </div>
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product.id)}>Rimuovi</button>
                            </li>
                        ))}


                    </ul>
                    <div className="mt-3">
                        <p>💰 Subtotale: €{subtotal.toFixed(2)}</p>
                        <p>🚚 Spedizione: €{shipping.toFixed(2)}</p>
                        <h4>Totale: €{total.toFixed(2)}</h4>
                        <button className="btn btn-success mt-2">Procedi al checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;