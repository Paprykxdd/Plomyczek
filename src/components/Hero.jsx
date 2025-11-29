    import React from 'react';
    import { Link } from 'react-router-dom'; // Użyjemy Link, aby przycisk kierował do sklepu
    import './Hero.css';

    function Hero() {
      return (
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Odkrywaj niezwykłe historie</h1>
            <p className="hero-subtitle">
              Książki, które inspirują, uczą i bawią. Znajdź swoją następną ulubioną lekturę.
            </p>
            <Link to="/czytamy-plomyczek" className="hero-button">
              Dołącz do akcji
            </Link>
          </div>
        </section>
      );
    }

    export default Hero;
    
