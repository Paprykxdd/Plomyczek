import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  // Stan do przechowywania informacji, czy menu jest otwarte
  const [menuOpen, setMenuOpen] = useState(false);

  // Funkcja do przełączania menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Funkcja do zamykania menu po kliknięciu w link (dla wygody użytkownika)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img 
            src="/img/Logo.png" 
            alt="Wydawnictwo Za Górami" 
            className="logo-img" 
          />
        </NavLink>
      </div>

      {/* Przycisk Hamburger (widoczny tylko na mobilnych) */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {/* Zmieniamy ikonę z pasków (fa-bars) na X (fa-xmark) gdy menu jest otwarte */}
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>

      {/* Dodajemy klasę 'active' gdy menu jest otwarte */}
      <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink to="/" onClick={closeMenu}>Strona Główna</NavLink></li>
          <li><NavLink to="/o-nas" onClick={closeMenu}>O Nas</NavLink></li>
          <li><NavLink to="/sklep" onClick={closeMenu}>Sklep</NavLink></li>
          <li><NavLink to="/czytamy-plomyczek" onClick={closeMenu}>#CzytamyPłomyczka</NavLink></li>
          <li><NavLink to="/pobieralnia" onClick={closeMenu}>Dla rodziców/ nauczycieli</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;