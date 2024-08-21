import React, { useState } from 'react';
import "./Quiz.css";

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="quiz-container">
      <h2>Seja Bem-vindo ao Quiz de Libras</h2>
      {!quizStarted ? (
        <>
          <p>Clique no botão abaixo para começar:</p>
          <button onClick={startQuiz} className="start-button">Iniciar</button>
        </>
      ) : (
        <p>O quiz começou! (Aqui você pode adicionar as perguntas)</p>
      )}
    </div>
  );
};

export default Quiz;
