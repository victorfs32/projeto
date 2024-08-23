import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // CSS principal
import logo from "./img/LOGO.png";
import abcImg from "./img/ABC.png";
import saudacoesImg from "./img/SAUDAÇOES.png";
import numeroImg from "./img/NUMERO.png";
import Alfabeto from "./pages/Quiz/Alfabeto";
import Saudacoes from "./pages/Quiz/Saudacoes";
import Numeros from "./pages/Quiz/Numeros";
import Navbar from "./components/navbar"; // Nome do componente renomeado

function App() {
  return ( 
    <>
      <Navbar /> {/* Uso do componente Navbar com letra maiúscula */}
      <div className="App">
        {/* Logo */}
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
        </header>
        {/* Rodapé */}
        <footer className="App-footer">
          <p>&copy; 2024 Ensinando Libras. Todos os direitos reservados.</p>
          <p>
            <a href="https://www.ensinandolibras.com.br/" className="footer-link" target="_blank" rel="noopener noreferrer">
              Visite nosso site
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
