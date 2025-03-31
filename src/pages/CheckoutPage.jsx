import { useState } from 'react';
import { useCartContext } from '../contexts/CartContext';
import axios from 'axios';

const CheckoutPage = () => {
    const { cart } = useCartContext();

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        address: '',
        city: '',
        postal_code: '',
        country: '',
        phone: '',
        tax_id_code: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal >= 50 ? 0 : 10;
    const total = subtotal + shipping;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('/api/stripe/create-checkout-session', {
                user,
                cart
            });
            // Apre il link in una nuova scheda/finestra
            window.open(response.data.url, '_blank');
        } catch (error) {
            console.error('Errore durante il checkout:', error);
            alert('Errore durante il checkout');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Nome</label>
                    <input type="text" name="name" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Cognome</label>
                    <input type="text" name="surname" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label className="form-label">Indirizzo</label>
                    <input type="text" name="address" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Città</label>
                    <input type="text" name="city" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">CAP</label>
                    <input type="text" name="postal_code" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-3">
                    <label className="form-label">Paese</label>
                    <input type="text" name="country" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Telefono</label>
                    <input type="text" name="phone" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Codice Fiscale</label>
                    <input type="text" name="tax_id_code" className="form-control" onChange={handleChange} />
                </div>

                <div className="col-12">
                    <h4 className="mt-4">Riepilogo ordine</h4>
                    <p>Subtotale: <strong>€{subtotal.toFixed(2)}</strong></p>
                    <p>Spedizione: <strong>€{shipping.toFixed(2)}</strong></p>
                    <p>Totale: <strong>€{total.toFixed(2)}</strong></p>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                        {loading ? 'Attendi...' : 'Paga con carta'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
