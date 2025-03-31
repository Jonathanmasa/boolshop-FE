import React from 'react'

export default function DiscountCodes() {
  return (
    <div className="info-page-container">
      <div className="info-header">
        <h1>Codici Sconto</h1>
      </div>

      <div className="info-content">
        {/* Codici Disponibili */}
        <div className="info-section">
          <h3>Codici Disponibili</h3>
          <p><strong>BENVENUTO10</strong> - 10% sul primo acquisto</p>
          <p><strong>SPEDIZIONE</strong> - Spedizione gratuita sopra i 29€</p>
        </div>

        {/* Come Usare */}
        <div className="info-section">
          <h3>Come Usare i Codici</h3>
          <p>1. Copia il codice che preferisci</p>
          <p>2. Incollalo al checkout</p>
          <p>3. Applica lo sconto al tuo ordine</p>
        </div>

        {/* Condizioni */}
        <div className="info-section">
          <h3>Condizioni</h3>
          <p>• Un solo codice per ordine</p>
          <p>• Non cumulabile con altre offerte</p>
          <p>• Valido solo su prodotti non scontati</p>
        </div>
      </div>
    </div>
  )
}