import React, { useEffect, useState } from 'react';
import './CloudBackground.css';

function CloudBackground() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Sprzątanie po odmontowaniu komponentu
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cloud-container">
      {/* Chmura 1: Duża, wolna (daleko)
        style.transform przesuwa ją o połowę pikseli, które przewinął użytkownik
      */}
      <div 
        className="cloud cloud-1" 
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      ></div>

      {/* Chmura 2: Mniejsza, szybsza (bliżej) */}
      <div 
        className="cloud cloud-2" 
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      ></div>

      {/* Chmura 3: Bardzo wolna, prawie statyczna */}
      <div 
        className="cloud cloud-3" 
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      ></div>
      
      {/* Chmura 4: Dodatkowa */}
      <div 
        className="cloud cloud-4" 
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      ></div>
    </div>
  );
}

export default CloudBackground;