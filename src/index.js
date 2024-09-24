import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Alfabeto from "./pages/Quiz/Alfabeto";
import Saudacoes from "./pages/Quiz/Saudacoes";
import Numeros from "./pages/Quiz/Numeros";
import Navbar from "./components/navbar";
import Sobre from "./pages/Sobre";
import Inicio from "./pages/Inicio"; // Importa a nova página
import Ranking from "./pages/Ranking";
import PagAlfabeto from "./components/PagAlfabeto";
import PagNumeros from "./components/PagNumeros";
import PagSaudacoes from "./components/PagSaudacoes";
import PagPessoas from "./components/PagPessoas";
import PagUnidades from "./components/PagUnidades";
import PagFamilia from "./components/PagFamilia";
import PagNiveldeFarm from "./components/PagNiveldeFarm";
import PagSemana from "./components/PagSemana";
import PagMeses from "./components/PagMeses";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Inicio" element={<Inicio />} /> {/* Nova rota */}
      <Route path="/Alfabeto" element={<Alfabeto />} />
      <Route path="/Saudacoes" element={<Saudacoes />} />
      <Route path="/Numeros" element={<Numeros />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/PagAlf" element={<PagAlfabeto />} />
      <Route path="/PagNúm" element={<PagNumeros />} />
      <Route path="/PagSau" element={<PagSaudacoes />} />
      <Route path="/PagPess" element={<PagPessoas/>} />
      <Route path="/PagUni" element={<PagUnidades/>} />
      <Route path="/PagFam" element={<PagFamilia />} />
      <Route path="/PagForm" element={<PagNiveldeFarm />} />
      <Route path="/PagSem" element={<PagSemana />} />
      <Route path="/PagMes" element={<PagMeses />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
