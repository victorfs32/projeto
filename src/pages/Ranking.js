import React, { useState, useEffect } from "react";
import "./Ranking.css";
import Navbar from "../components/navbar";

function Ranking() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Carregar pontuações do arquivo JSON
    const loadScores = async () => {
      try {
        const response = await fetch("/backend/resultados.json");
        if (response.ok) {
          const data = await response.json();
          setScores(data);
        } else {
          console.error("Erro ao carregar os resultados");
        }
      } catch (error) {
        console.error("Erro ao buscar os resultados:", error);
      }
    };

    loadScores();
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Ordenar as pontuações por pontuação e depois pelo menor tempo
  const sortedScores = scores.sort(
    (a, b) => b.score - a.score || a.timeTaken - b.timeTaken
  );

  const resetScores = async () => {
    // Limpar os resultados no backend (se aplicável)
    try {
      await fetch("/backend/resultados.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([]),
      });
      setScores([]);
    } catch (error) {
      console.error("Erro ao limpar os resultados:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="ranking">
        <h1>Ranking</h1>
        <button className="reset-button" onClick={resetScores}>
          Zerar Resultados
        </button>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Usuário</th>
              <th>Pontuação</th>
              <th>Tempo</th>
            </tr>
          </thead>
          <tbody>
            {sortedScores.length > 0 ? (
              sortedScores.map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score.userName}</td>
                  <td>{score.score} pontos</td>
                  <td>{formatTime(score.timeTaken)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Nenhum resultado salvo</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Ranking;
