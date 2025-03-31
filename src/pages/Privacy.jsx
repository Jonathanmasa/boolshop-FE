export default function Privacy() {
    return (
        <div className="info-page-container">
            <div className="info-header">
                <h1>Privacy Policy</h1>
            </div>

            <div className="info-content">
                {/* Informazioni Generali */}
                <div className="info-section">
                    <h3>Informazioni Generali</h3>
                    <p>BoolShop si impegna a proteggere la privacy dei propri utenti.
                        Questa policy spiega come raccogliamo e utilizziamo i dati personali.</p>
                </div>

                {/* Dati Raccolti */}
                <div className="info-section">
                    <h3>Dati che Raccogliamo</h3>
                    <p>• Nome e informazioni di contatto</p>
                    <p>• Dettagli di pagamento</p>
                    <p>• Cronologia degli ordini</p>
                    <p>• Preferenze di navigazione</p>
                </div>

                {/* Utilizzo dei Dati */}
                <div className="info-section">
                    <h3>Come Utilizziamo i Tuoi Dati</h3>
                    <p>• Processare i tuoi ordini</p>
                    <p>• Fornire assistenza clienti</p>
                    <p>• Migliorare i nostri servizi</p>
                    <p>• Inviare comunicazioni marketing (con consenso)</p>
                </div>

                {/* Diritti dell'Utente */}
                <div className="info-section">
                    <h3>I Tuoi Diritti</h3>
                    <p>• Accesso ai tuoi dati personali</p>
                    <p>• Rettifica dei dati errati</p>
                    <p>• Cancellazione dei dati</p>
                    <p>• Revoca del consenso al marketing</p>
                </div>
            </div>
        </div>
    );
}
