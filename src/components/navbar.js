import React from "react";
import "./navbar.css";
import logo from "../img/LOGO.png";

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img
          src={logo}
          alt="Logo"
        />
      </a>

      <nav className="navbar">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/atividades" className="nav-link">
          Atividades
        </a>
        <a href="/sobre" className="nav-link">
          Sobre
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
