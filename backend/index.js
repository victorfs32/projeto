// backend/index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Middleware para parsing de JSON
app.use(express.json());

// Exemplo de rota
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
