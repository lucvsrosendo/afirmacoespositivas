const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Servir front
app.use(express.static("public"));

// Carregar frases do arquivo
const affirmations = JSON.parse(fs.readFileSync("./frases.json", "utf8"));

// API que retorna frase aleatória
app.get('/affirmation', (req, res) => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    res.json({ affirmation: affirmations[randomIndex] });
});

app.listen(port, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});
