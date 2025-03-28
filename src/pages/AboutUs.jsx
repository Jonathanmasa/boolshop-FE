export default function AboutUs() {
    return (
        <div className="about-us-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Chi Siamo</h1>
                <p className="subtitle">La tua destinazione per il collezionismo di qualità dal 2024</p>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <h2>La Nostra Mission</h2>
                <p>Siamo un gruppo di appassionati collezionisti che ha deciso di creare uno spazio dove
                    gli amanti del collezionismo possono trovare pezzi unici e rari in totale sicurezza.</p>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <h2>I Nostri Valori</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <h3>Autenticità</h3>
                        <p>Garantiamo l'autenticità di ogni pezzo nella nostra collezione</p>
                    </div>
                    <div className="value-card">
                        <h3>Qualità</h3>
                        <p>Selezioniamo solo i migliori prodotti per i nostri clienti</p>
                    </div>
                    <div className="value-card">
                        <h3>Passione</h3>
                        <p>Condividiamo il tuo amore per il collezionismo</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
