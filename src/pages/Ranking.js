import React, { useState } from "react";
import "./Ranking.css";
import Navbar from "../components/navbar";

function Ranking() {
  const [scores, setScores] = useState(JSON.parse(localStorage.getItem("quizScores")) || []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Ordenar as pontuações pelo menor tempo
  const sortedScores = scores.sort((a, b) => a.timeTaken - b.timeTaken);

  const resetScores = () => {
    localStorage.removeItem("quizScores");
    setScores([]);
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
