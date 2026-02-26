const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
    const filePath = path.join(process.cwd(), "frases.json");
    const affirmations = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const randomIndex = Math.floor(Math.random() * affirmations.length);

    res.status(200).json({
        affirmation: affirmations[randomIndex]
    });
};