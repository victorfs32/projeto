import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Inicio.css";

function Inicio() {
  const [userName, setUserName] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState("Numeros");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleQuizChange = (e) => {
    setSelectedQuiz(e.target.value);
  };

  const handleInicio = () => {
    if (userName.trim()) {
      localStorage.setItem("userName", userName);
      navigate(`/${selectedQuiz}`, { state: { userName } });
    } else {
      setError("Por favor, insira seu nome!");
    }
  };

  return (
    <div className="start-quiz">
      <h1>{userName ? `Bem-vindo de volta, ${userName}!` : "Bem-vindo ao Quiz!"}</h1>
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Digite seu nome"
      />
      {error && <p className="error-message">{error}</p>}
      <select value={selectedQuiz} onChange={handleQuizChange}>
        <option value="Numeros">Números</option>
        <option value="Alfabeto">Alfabeto</option>
        <option value="Saudacoes">Saudações</option>
      </select>
      <button onClick={handleInicio}>Iniciar Quiz</button>
    </div>
  );
}

export default Inicio;
