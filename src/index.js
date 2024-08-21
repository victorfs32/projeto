import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Quiz from "./pages/Quiz";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Quiz" element={<Quiz />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);