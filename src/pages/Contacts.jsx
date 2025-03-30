export default function Contacts() {
    return (
        <div className="info-page-container">
            <div className="info-header">
                <h1>Contattaci</h1>
            </div>

            <div className="info-content">
                {/* Indirizzo */}
                <div className="info-section">
                    <h3>Dove Siamo</h3>
                    <p>Via Roma 123</p>
                    <p>20100 Milano (MI)</p>
                    <p>Italia</p>
                </div>

                {/* Contatti */}
                <div className="info-section">
                    <h3>I Nostri Contatti</h3>
                    <p>Email: info@boolshop.com</p>
                    <p>Tel: 02 1234567</p>
                    <p>WhatsApp: +39 123 456 7890</p>
                </div>

                {/* Orari */}
                <div className="info-section">
                    <h3>Orari</h3>
                    <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                    <p>Sabato: 9:00 - 13:00</p>
                    <p>Domenica: Chiuso</p>
                </div>
            </div>
        </div>
    );
}