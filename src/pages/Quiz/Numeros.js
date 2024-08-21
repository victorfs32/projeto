import React, { useState } from "react";
import "./Quiz.css"; // CSS

const questions = [
  {
    questionText: "Que Número é esse?",
    answerOptions: [
      { answerText: "A", isCorrect: true },
      { answerText: "B", isCorrect: false },
      { answerText: "C", isCorrect: false },
      { answerText: "D", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    answerOptions: [
      { answerText: "Boa Noite", isCorrect: false },
      { answerText: "Olá", isCorrect: false },
      { answerText: "Bom Dia", isCorrect: true },
      { answerText: "Adeus", isCorrect: false },
    ],
  },
  {
    questionText: "Que Número é esse?",
    answerOptions: [
      { answerText: "Boa Noite", isCorrect: false },
      { answerText: "Olá", isCorrect: false },
      { answerText: "Bom Dia", isCorrect: true },
      { answerText: "Adeus", isCorrect: false },
],
},
{
  questionText: "Que Número é esse?",
  answerOptions: [
    { answerText: "Boa Noite", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom Dia", isCorrect: true },
    { answerText: "Adeus", isCorrect: false },
],
},
{
  questionText: "Que Número é esse?",
  answerOptions: [
    { answerText: "Boa Noite", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom Dia", isCorrect: true },
    { answerText: "Adeus", isCorrect: false },
],
},
{
  questionText: "Que Número é esse?",
  answerOptions: [
    { answerText: "Boa Noite", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom Dia", isCorrect: true },
    { answerText: "Adeus", isCorrect: false },
],
},
{
  questionText: "Que Número é esse?",
  answerOptions: [
    { answerText: "Boa Noite", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom Dia", isCorrect: true },
    { answerText: "Adeus", isCorrect: false },
],
},
{
  questionText: "Que Número é esse?",
  answerOptions: [
    { answerText: "Boa Noite", isCorrect: false },
    { answerText: "Olá", isCorrect: false },
    { answerText: "Bom Dia", isCorrect: true },
    { answerText: "Adeus", isCorrect: false },
],
},
  {
    questionText: "Que Número é esse?",
    answerOptions: [
      { answerText: "Boa Noite", isCorrect: false },
      { answerText: "Olá", isCorrect: false },
      { answerText: "Bom Dia", isCorrect: true },
      { answerText: "Adeus", isCorrect: false },
],
},
  {
    questionText: "Que Número é esse?",
    answerOptions: [
      { answerText: "Boa Noite", isCorrect: false },
      { answerText: "Olá", isCorrect: false },
      { answerText: "Bom Dia", isCorrect: true },
      { answerText: "Adeus", isCorrect: false },
    ],
  },
  
  
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
          <h2>{userName}Você acertou {score} de {questions.length} perguntas!</h2>
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
