export default function Shipments() {
    return (
        <div className="info-page-container">
            <div className="info-header">
                <h1>Spedizioni</h1>
            </div>
            <div className="info-content">
                <div className="info-section">
                    <h3>Tempi di Consegna</h3>
                    <p>Italia: 2-4 giorni lavorativi</p>
                    <p>Europa: 3-7 giorni lavorativi</p>
                </div>
                <div className="info-section">
                    <h3>Costi di Spedizione</h3>
                    <p>Italia: €4.99</p>
                    <p>Spedizione gratuita per ordini superiori a €49</p>
                </div>
                <div className="info-section">
                    <h3>Corrieri</h3>
                    <p>BRT</p>
                    <p>DHL Express</p>
                </div>
            </div>
        </div>
    );
}
