import React, { useState, useEffect } from "react";
import "./Ranking.css";
import Navbar from "../components/navbar";

function Ranking() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Carregar pontuações do backend
    const fetchScores = async () => {
      try {
        const response = await fetch("https://backend-eosin-chi-12.vercel.app/api/ranking");
        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.error("Erro ao buscar pontuações:", error);
      }
    };

    fetchScores();
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Ordenar as pontuações pelo menor tempo
  const sortedScores = scores.sort((a, b) => a.timeTaken - b.timeTaken);

  const resetScores = async () => {
    try {
      const response = await fetch("https://backend-eosin-chi-12.vercel.app/api/ranking", {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Falha ao remover resultados");
      }

      setScores([]);
    } catch (error) {
      console.error("Erro ao remover pontuações:", error);
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
