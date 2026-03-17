const fs = require('fs')
const path = require('path')

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'api', 'frases.json')
  
  const frases = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)]

  res.status(200).json({ frase: fraseAleatoria })
}
