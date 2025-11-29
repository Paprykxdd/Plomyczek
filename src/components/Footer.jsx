import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        {/* Sekcja Social Media */}
        <div className="footer-socials">
          <p className="socials-title">Znajdź nas tutaj:</p>
          <div className="social-icons">
            
            {/* Osobny DIV dla Instagrama */}
            <div className="social-icon-wrapper">
              <a href="https://www.instagram.com/wydawnictwo_za_gorami/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            {/* Osobny DIV dla Facebooka */}
            <div className="social-icon-wrapper">
              <a href="https://www.facebook.com/wydawnictwozagorami?locale=pl_PL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>

          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Prawa autorskie */}
        <p className="copyright">&copy; {currentYear} Wydawnictwo Za Górami. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}

export default Footer;