import React from "react";
import "./Ranking.css"
import Navbar from "../components/navbar"

function Ranking() {
  const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

  return (
    <>
    <Navbar />
    <div className="ranking">
      <h1>Ranking</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            {score.userName}: {score.score} pontos
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Ranking;
