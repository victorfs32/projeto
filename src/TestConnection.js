// src/TestConnection.js
import React, { useState } from 'react';

const TestConnection = () => {
  const [response, setResponse] = useState('');

  const testBackend = () => {
    fetch('/')
      .then(response => response.text())
      .then(data => {
        setResponse(`Resposta do Backend: ${data}`);
      })
      .catch(error => {
        setResponse(`Erro: ${error}`);
      });
  };

  return (
    <div>
      <h1>Teste de Conexão</h1>
      <button onClick={testBackend}>Teste Backend</button>
      <p>{response}</p>
    </div>
  );
};

export default TestConnection;
