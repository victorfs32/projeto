const fs = require('fs');
const path = require('path');

const RESULTS_FILE_PATH = path.join(__dirname, '../resultados.json');

const writeResultsFile = (data) => {
  fs.writeFileSync(RESULTS_FILE_PATH, JSON.stringify(data, null, 2));
};

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      writeResultsFile([]);
      res.status(200).json({ message: 'All scores have been reset' });
    } catch (error) {
      res.status(500).json({ error: 'Error resetting scores' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
