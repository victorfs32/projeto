import React, { useState } from "react";
import "./Quiz.css"; // CSS
import video1 from "./videos/video2.mp4"; // Importando o vídeo local
import video2 from "./videos/video2.mp4"; // Importando o segundo vídeo

const questions = [
  {
    questionText: "Que Número é esse?",
    videoSrc: video1, // Referência ao vídeo local
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video2, // Referência ao segundo vídeo local
    answerOptions: [
      { answerText: "Boa Noite", isCorrect: false },
      { answerText: "Olá", isCorrect: false },
      { answerText: "Bom Dia", isCorrect: true },
      { answerText: "Adeus", isCorrect: false },
    ],
  },
  // Adicione mais perguntas aqui, incluindo `videoSrc` para cada uma
];

function Quiz({ userName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>{userName}, você acertou {score} de {questions.length} perguntas!</h2>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div className="video-container">
              <video width="100%" height="315" controls>
                <source src={questions[currentQuestion].videoSrc} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
