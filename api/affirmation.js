const affirmations = [
  "Você é capaz.",
  "Você está evoluindo todos dias.",
  "Você merece o melhor.",
  "Você tem força para superar desafios.",
  "Você está exatamente onde deveria estar."
];

export default function handler(req, res) {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  res.status(200).json({ affirmation: random });
}
