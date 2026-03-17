import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    const filePath = path.resolve('api/frases.json')

    const frases = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)]

    res.setHeader('Cache-Control', 'no-store') // evita repetir frase

    res.status(200).json({ frase: fraseAleatoria })
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao ler frases',
      detalhe: error.message
    })
  }
}
