import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <a href='/' className="logo">Logo</a>

      <nav className="navbar">
        <a href='/' className="nav-link">Home</a>
        <a href='/atividades' className="nav-link">Atividades</a>
        <a href='/sobre' className="nav-link">Sobre</a>
      </nav>
    </header>
  );
}

export default Navbar;
