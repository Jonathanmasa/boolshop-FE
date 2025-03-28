export default function Contacts() {
    return (
        <div className="contacts-container">
            {/* Header */}
            <div className="contacts-header">
                <h1>Contattaci</h1>
                <p>Per qualsiasi informazione, siamo qui per te</p>
            </div>

            {/* Info di contatto */}
            <div className="contacts-info">
                <div className="info-box">
                    <h3>Sede</h3>
                    <p>Via Roma 123</p>
                    <p>Milano, 20100</p>
                </div>

                <div className="info-box">
                    <h3>Contatti</h3>
                    <p>Email: info@boolshop.com</p>
                    <p>Tel: 02 1234567</p>
                </div>

                <div className="info-box">
                    <h3>Orari</h3>
                    <p>Lunedì - Venerdì</p>
                    <p>9:00 - 18:00</p>
                </div>
            </div>
        </div>
    );
}