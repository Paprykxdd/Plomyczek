import React from 'react';
import { Link } from 'react-router-dom';
import './PlomyczekShowcase.css';

function PlomyczekShowcase() {
  return (
    <section className="plomyczek-showcase">
      <div className="showcase-container">
        
        {/* Część tekstowa */}
        <div className="showcase-content">
          <h2 className="showcase-title">Poznaj wyjątkowego Smoka Płomyczka!</h2>
          
          <div className="showcase-text">
            <p>
                Bohatera książek dla dzieci, które uczą empatii i akceptacji dla innych, a także pomagają
                odkrywać własną wyjątkowość i budować poczucie własnej wartości.
            </p>
            <p>
                Daleko, daleko stąd istnieje malownicza smocza kraina. Wśród zielonych łąk i skał mieszkają
                najprawdziwsze w świecie smoki… A wśród nich Płomyczek – przyjazny smok, który jako
                jedyny w całej krainie urodził się bez skrzydeł i nie potrafi latać.
            </p>
            <p>
                Dzięki niemu dzieci uczą się, że każdy jest inny i każdy jest wyjątkowy!
            </p>

          </div>

          <div className="showcase-actions">
            <Link to="/czytamy-plomyczek" className="btn-primary">
              Dołącz do akcji #czytamypłomyczka
            </Link>
            <Link to="/sklep" className="btn-secondary">
              Zobacz książkę
            </Link>
          </div>
        </div>

        {/* Część obrazkowa - duża, otwarta grafika */}
        <div className="showcase-image">
          {/* Tu idealnie pasowałaby ilustracja smoka bez tła (PNG), ale JPG też zadziała */}
          <img src="/img/images-removebg-preview.png" alt="Smok Płomyczek" />
        </div>

      </div>
    </section>
  );
}

export default PlomyczekShowcase;