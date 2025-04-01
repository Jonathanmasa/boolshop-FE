// Componente per la pagina Chi Siamo
export default function AboutUs() {
    // Rendering della pagina con sezioni informative
    return (
        <div className="info-page-container">
            <div className="info-header">
                <h1>Chi Siamo</h1>
            </div>

            <div className="info-content">
                {/* Chi siamo */}
                <div className="info-section">
                    <h3>La Nostra Storia</h3>
                    <p>BoolShop nasce dalla passione per il collezionismo e la cultura pop giapponese.
                        Dal 2024 offriamo ai nostri clienti una selezione accurata di prodotti di alta qualità.</p>
                </div>

                {/* Mission */}
                <div className="info-section">
                    <h3>La Nostra Mission</h3>
                    <p>Portare il meglio del collezionismo in Italia, garantendo autenticità
                        e qualità per ogni prodotto nel nostro catalogo.</p>
                </div>

                {/* Valori */}
                <div className="info-section">
                    <h3>I Nostri Valori</h3>
                    <p>• Autenticità garantita per ogni prodotto</p>
                    <p>• Attenzione al cliente e supporto dedicato</p>
                    <p>• Passione per il collezionismo</p>
                </div>
            </div>
        </div>
    );
}