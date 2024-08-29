import React, { useState } from "react";

const TestConnection = () => {
  const [response, setResponse] = useState("");
  const [postData, setPostData] = useState({
    userName: "",
    score: "",
    timeTaken: "",
  });

  const testBackend = () => {
    fetch("https://backend-eosin-chi-12.vercel.app/") // URL do backend
      .then((response) => response.text())
      .then((data) => {
        setResponse(`Resposta do Backend: ${data}`);
      })
      .catch((error) => {
        setResponse(`Erro: ${error.message}`);
      });
  };

  const testPost = () => {
    fetch("https://backend-eosin-chi-12.vercel.app/api/addScore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse(`Resposta do Backend: ${JSON.stringify(data)}`);
      })
      .catch((error) => {
        setResponse(`Erro: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>Teste de Conexão</h1>

      <div>
        <button onClick={testBackend}>Teste GET</button>
      </div>

      <div>
        <h2>Teste POST</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            testPost();
          }}
        >
          <input
            type="text"
            placeholder="Nome do Usuário"
            value={postData.userName}
            onChange={(e) => setPostData({ ...postData, userName: e.target.value })}
          />
          <input
            type="number"
            placeholder="Pontuação"
            value={postData.score}
            onChange={(e) => setPostData({ ...postData, score: e.target.value })}
          />
          <input
            type="number"
            placeholder="Tempo"
            value={postData.timeTaken}
            onChange={(e) => setPostData({ ...postData, timeTaken: e.target.value })}
          />
          <button type="submit">Enviar POST</button>
        </form>
      </div>

      <p>{response}</p>
    </div>
  );
};

export default TestConnection;
