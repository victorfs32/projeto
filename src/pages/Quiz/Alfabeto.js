import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css"; // CSS
import video1 from "./videos/SAUDAÇÕES/01.mp4";
import video2 from "./videos/SAUDAÇÕES/02.mp4";

const questions = [
  {
    questionText: "Qual a saudação?",
    videoSrc: video1, // Referência ao vídeo local
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Qual a saudação?",
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
  const videoRef = useRef(null); // Criando uma referência para o elemento de vídeo

  useEffect(() => {
    // Quando a pergunta mudar, o vídeo correspondente é carregado e reproduzido
    if (videoRef.current) {
      videoRef.current.load(); // Carrega o novo vídeo
      videoRef.current.play(); // Reproduz o novo vídeo automaticamente
    }
  }, [currentQuestion]); // Executa sempre que a pergunta atual mudar

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (videoRef.current) {
      videoRef.current.pause(); // Pausando o vídeo atual
      videoRef.current.currentTime = 0; // Reiniciando o vídeo para o começo
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
              <video ref={videoRef} width="100%" height="315" controls>
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
