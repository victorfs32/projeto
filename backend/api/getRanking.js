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

export default function handler(req, res) {
  try {
    const results = readResultsFile();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error reading results' });
  }
}
