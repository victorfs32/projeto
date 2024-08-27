const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Caminho para o arquivo de resultados
const RESULTS_FILE_PATH = path.join(__dirname, 'resultados.json');

app.use(bodyParser.json());

// Função para ler o arquivo de resultados
const readResultsFile = () => {
  if (!fs.existsSync(RESULTS_FILE_PATH)) {
    fs.writeFileSync(RESULTS_FILE_PATH, JSON.stringify([]));
  }
  const data = fs.readFileSync(RESULTS_FILE_PATH);
  return JSON.parse(data);
};

// Função para escrever no arquivo de resultados
const writeResultsFile = (data) => {
  fs.writeFileSync(RESULTS_FILE_PATH, JSON.stringify(data, null, 2));
};

// Endpoint GET para obter os resultados
app.get('/api/getRanking', (req, res) => {
  try {
    const results = readResultsFile();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error reading results' });
  }
});

// Endpoint POST para salvar uma nova pontuação
app.post('/api/saveScore', (req, res) => {
  try {
    const newScore = req.body;
    const results = readResultsFile();
    results.push(newScore);
    writeResultsFile(results);
    res.status(201).json({ message: 'Score saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving score' });
  }
});

// Endpoint DELETE para apagar todos os resultados
app.delete('/api/resetScores', (req, res) => {
  try {
    writeResultsFile([]);
    res.json({ message: 'All scores have been reset' });
  } catch (error) {
    res.status(500).json({ error: 'Error resetting scores' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
