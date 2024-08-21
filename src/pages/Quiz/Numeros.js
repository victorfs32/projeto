import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css"; // CSS
import { Link } from "react-router-dom";
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

const createQuestion = (text, video, answers) => ({
  questionText: text,
  videoSrc: video,
  answerOptions: answers,
});

const questions = [
  createQuestion("Que número é esse?", video1, [
    { answerText: "36", isCorrect: false },
    { answerText: "3", isCorrect: true },
    { answerText: "1", isCorrect: false },
    { answerText: "7", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video2, [
    { answerText: "2", isCorrect: true },
    { answerText: "6", isCorrect: false },
    { answerText: "4", isCorrect: false },
    { answerText: "9", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video3, [
    { answerText: "10", isCorrect: false },
    { answerText: "1", isCorrect: false },
    { answerText: "4", isCorrect: true },
    { answerText: "8", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video4, [
    { answerText: "8", isCorrect: false },
    { answerText: "7", isCorrect: false },
    { answerText: "3", isCorrect: false },
    { answerText: "5", isCorrect: true },
  ]),
  createQuestion("Que número é esse?", video5, [
    { answerText: "3", isCorrect: false },
    { answerText: "6", isCorrect: true },
    { answerText: "1", isCorrect: false },
    { answerText: "0", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video6, [
    { answerText: "1", isCorrect: false },
    { answerText: "7", isCorrect: true },
    { answerText: "9", isCorrect: false },
    { answerText: "4", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video7, [
    { answerText: "2", isCorrect: false },
    { answerText: "8", isCorrect: true },
    { answerText: "5", isCorrect: false },
    { answerText: "3", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video8, [
    { answerText: "1", isCorrect: true },
    { answerText: "4", isCorrect: false },
    { answerText: "10", isCorrect: false },
    { answerText: "8", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video9, [
    { answerText: "1", isCorrect: false },
    { answerText: "4", isCorrect: false },
    { answerText: "9", isCorrect: true },
    { answerText: "0", isCorrect: false },
  ]),
  createQuestion("Que número é esse?", video10, [
    { answerText: "10", isCorrect: true },
    { answerText: "1", isCorrect: false },
    { answerText: "3", isCorrect: false },
    { answerText: "6", isCorrect: false },
  ]),
];

function Quiz({ userName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentQuestion]);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswerIndex(index);

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, questions[currentQuestion]]);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;

      if (nextQuestion < questions.length) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setSelectedAnswerIndex(null);
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000); // Espera 1 segundo antes de passar para a próxima pergunta
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>
            {userName}Parabéns você acertou {score} de {questions.length} perguntas!
          </h2>
          {/* Botão de retorno à página inicial */}
          <Link to="/" className="return-button">
            Voltar para a página inicial
          </Link>
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
                <source
                  src={questions[currentQuestion].videoSrc}
                  type="video/mp4"
                />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect, index)
                  }
                  style={{
                    backgroundColor:
                      selectedAnswerIndex === index
                        ? answerOption.isCorrect
                          ? "green"
                          : "red"
                        : "",
                    color: selectedAnswerIndex === index ? "white" : "",
                  }}
                  disabled={selectedAnswerIndex !== null}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
