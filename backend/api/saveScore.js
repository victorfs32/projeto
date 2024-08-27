const fs = require('fs');
const path = require('path');

const RESULTS_FILE_PATH = path.join(__dirname, '../resultados.json');

const readResultsFile = () => {
  if (!fs.existsSync(RESULTS_FILE_PATH)) {
    fs.writeFileSync(RESULTS_FILE_PATH, JSON.stringify([]));
  }
  const data = fs.readFileSync(RESULTS_FILE_PATH);
  return JSON.parse(data);
};

const writeResultsFile = (data) => {
  fs.writeFileSync(RESULTS_FILE_PATH, JSON.stringify(data, null, 2));
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newScore = req.body;
      const results = readResultsFile();
      results.push(newScore);
      writeResultsFile(results);
      res.status(201).json({ message: 'Score saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving score' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
