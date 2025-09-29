const express = require('express');
const app = express();
const port = 3000;


const affirmations = [
    "Saúde, Sorte, Sabedoria!",
    "Todos os dias, Sob todos os pontos de vista, Vou cada vez melhor!",
    "Eu Transbordo em Vitalidade e Saúde!",
    "Eu Sou Luz e Sorte!",
    "Eu Sou Luz!",
    "Eu Sou Luz e Gratidão!",
    "Luz, Vida, Amor!",
    "O Dinheiro Vem a Mim de Forma Fácil, Alegre e Com Abundância!",
];

app.use(express.static("public"));

app.get('/affirmation', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/affirmation', (req, res) => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    res.json({ affirmation: affirmations[randomIndex] });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
