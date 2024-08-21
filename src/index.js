import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Alfabeto from "./pages/Quiz/Alfabeto";
import Saudações from "./pages/Quiz/Saudações";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Alfabeto" element={<Alfabeto />} />
      <Route path="/Saudações" element={<Saudações />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);