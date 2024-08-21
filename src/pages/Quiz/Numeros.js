import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css"; // CSS
import video1 from "./videos/NUMEROS/01.mp4";
import video2 from "./videos/NUMEROS/02.mp4";
import video3 from "./videos/NUMEROS/03.mp4";
import video4 from "./videos/NUMEROS/04.mp4";
import video5 from "./videos/NUMEROS/05.mp4";
import video6 from "./videos/NUMEROS/06.mp4";
import video7 from "./videos/NUMEROS/07.mp4";
import video8 from "./videos/NUMEROS/08.mp4";
import video9 from "./videos/NUMEROS/09.mp4";
import video10 from "./videos/NUMEROS/10.mp4";
import video11 from "./videos/NUMEROS/11.mp4";
import video12 from "./videos/NUMEROS/12.mp4";

const questions = [
  {
    questionText: "Que Número é esse?",
    videoSrc: video1,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video2,
    answerOptions: [
      { answerText: "Boa Noite", isCorrect: false },
      { answerText: "Olá", isCorrect: false },
      { answerText: "Bom Dia", isCorrect: true },
      { answerText: "Adeus", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video3,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video4,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video5,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video6,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video7,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video8,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video9,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video10,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video11,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    videoSrc: video12,
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  // Adicione mais perguntas aqui, incluindo `videoSrc` para cada uma
];

function Quiz({ userName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const videoRef = useRef(null); // Referência para o elemento de vídeo

  useEffect(() => {
    // Carrega e reproduz o vídeo correspondente à pergunta atual
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentQuestion]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Pausa e reinicia o vídeo atual antes de mudar a pergunta
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
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
