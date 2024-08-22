import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <a href='/' className="logo">Logo</a>

      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <a href='/' className="nav-link">Home</a>
        <a href='/atividades' className="nav-link">Atividades</a>
        <a href='/sobre' className="nav-link">Sobre</a>
      </nav>
    </header>
  );
}

export default Navbar;
