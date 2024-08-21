import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // CSS principal
import logo from "./img/LOGO.png";
import abcImg from "./img/ABC.png";
import saudacoesImg from "./img/SAUDAÇOES.png";
import numeroImg from "./img/NUMERO.png";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      {/* Atividades */}
      <main className="App-main">
        <h3>ATIVIDADES</h3>
        <div className="activities">
          <a
            href="/Quiz"
            className="activity-link"
          >
            <img
              src={abcImg}
              className="activity-img"
              alt="Alfabeto em LIBRAS"
            />
            <h4>Alfabeto em LIBRAS</h4>
          </a>
          <a
            href="https://kahoot.it/solo/?quizId=1d372228-82e2-476b-871a-019ae28a39fd"
            className="activity-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={saudacoesImg}
              className="activity-img"
              alt="Saudações em LIBRAS"
            />
            <h4>Saudações em LIBRAS</h4>
          </a>
          <a
            href="https://kahoot.it/solo/?quizId=fdfca022-a08f-4e93-8676-734981889aaa"
            className="activity-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={numeroImg}
              className="activity-img"
              alt="Números em LIBRAS"
            />
            <h4>Números em LIBRAS</h4>
          </a>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="App-footer">
        <p>&copy; 2024 Ensinando Libras. Todos os direitos reservados.</p>
        <p>
          <a href="https://www.ensinandolibras.com.br/" className="footer-link" target="_blank" rel="noopener noreferrer">
            Visite nosso site
          </a>
        </p>
      </footer>

      <Routes>
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
