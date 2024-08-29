// src/TestConnection.js
import React, { useState } from "react";

const TestConnection = () => {
  const [response, setResponse] = useState("");

  const testBackend = () => {
    fetch("https://www.ensinandolibras.com.br/") // Ajuste se necessário
      .then((response) => {
        // Verificar se a resposta é OK antes de processar
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        setResponse(`Resposta do Backend: ${data}`);
      })
      .catch((error) => {
        setResponse(`Erro: ${error.message}`);
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
