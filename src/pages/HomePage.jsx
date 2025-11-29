import React from 'react';
// Upewnij się, że ścieżka jest poprawna i plik docelowy istnieje
import FeaturedBooks from '../components/FeaturedBooks';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';

function HomePage() {
  return (
    <div className="homepage-content">
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
      </div>

    <Hero />
    <NewsSection />
    <FeaturedBooks />
    
    </div>
  );
}

export default HomePage;

