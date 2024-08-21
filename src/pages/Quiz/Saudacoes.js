import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css"; // CSS
import video1 from "./videos/SAUDAÇÕES/01.mp4";
import video2 from "./videos/SAUDAÇÕES/02.mp4";
import video3 from "./videos/SAUDAÇÕES/03.mp4";
import video4 from "./videos/SAUDAÇÕES/04.mp4";
import video5 from "./videos/SAUDAÇÕES/05.mp4";
import video6 from "./videos/SAUDAÇÕES/06.mp4";
import video7 from "./videos/SAUDAÇÕES/07.mp4";
import video8 from "./videos/SAUDAÇÕES/08.mp4";
import video9 from "./videos/SAUDAÇÕES/09.mp4";
import video10 from "./videos/SAUDAÇÕES/10.mp4";
import video11 from "./videos/SAUDAÇÕES/11.mp4";
import video12 from "./videos/SAUDAÇÕES/12.mp4";
import video13 from "./videos/SAUDAÇÕES/13.mp4";

const videos = [
  video1, video2, video3, video4, video5, video6, video7, 
  video8, video9, video10, video11, video12, video13
];

const createQuestion = (text, video, answers) => ({
  questionText: text,
  videoSrc: video,
  answerOptions: answers,
});

const questions = [
  createQuestion("Qual a saudação?", video1, [
    { answerText: "Oi", isCorrect: true },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Tudo bem?", isCorrect: false },
    { answerText: "Obrigado", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video2, [
    { answerText: "Tchau", isCorrect: false },
    { answerText: "De nada", isCorrect: false },
    { answerText: "Bem", isCorrect: false },
    { answerText: "Tudo bem?", isCorrect: true },
  ]),
  createQuestion("Qual a saudação?", video3, [
    { answerText: "Boa sorte", isCorrect: false },
    { answerText: "Bom dia", isCorrect: true },
    { answerText: "Até logo", isCorrect: false },
    { answerText: "Desculpe", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video4, [
    { answerText: "Boa noite", isCorrect: true },
    { answerText: "Boa tarde", isCorrect: false },
    { answerText: "Boa sorte", isCorrect: false },
    { answerText: "Estou bem", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video5, [
    { answerText: "Beijos", isCorrect: true },
    { answerText: "Com licença", isCorrect: false },
    { answerText: "Obrigado!", isCorrect: false },
    { answerText: "Tudo bem", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video6, [
    { answerText: "Oi", isCorrect: false },
    { answerText: "Tchau", isCorrect: false },
    { answerText: "Bem-vindo", isCorrect: true },
    { answerText: "De nada", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video7, [
    { answerText: "Tchau", isCorrect: true },
    { answerText: "Tudo bem?", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Sim", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video8, [
    { answerText: "Sim", isCorrect: false },
    { answerText: "Desculpa", isCorrect: false },
    { answerText: "Boa tarde", isCorrect: false },
    { answerText: "Obrigado!", isCorrect: true },
  ]),
  createQuestion("Qual a saudação?", video9, [
    { answerText: "Bom dia", isCorrect: false },
    { answerText: "Com licença", isCorrect: true },
    { answerText: "Tudo bem", isCorrect: false },
    { answerText: "Boa sorte", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video10, [
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom dia", isCorrect: false },
    { answerText: "Desculpe", isCorrect: true },
    { answerText: "Beijos", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video11, [
    { answerText: "Boa tarde", isCorrect: true },
    { answerText: "Bom dia", isCorrect: false },
    { answerText: "Boa noite", isCorrect: false },
    { answerText: "Bom", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video12, [
    { answerText: "Olá", isCorrect: true },
    { answerText: "Oi", isCorrect: false },
    { answerText: "Tchau", isCorrect: false },
    { answerText: "Estou bem", isCorrect: false },
  ]),
  createQuestion("Qual a saudação?", video13, [
    { answerText: "Por favor", isCorrect: true },
    { answerText: "Beijos", isCorrect: false },
    { answerText: "Desculpe", isCorrect: false },
    { answerText: "Não", isCorrect: false },
  ]),
  // Continue adicionando as perguntas aqui da mesma forma
];

function Quiz({ userName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentQuestion]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>
            {userName} Você acertou {score} de {questions.length} perguntas!
          </h2>
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
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
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
  