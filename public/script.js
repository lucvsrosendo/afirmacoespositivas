async function generateAffirmation() {
    try {
        const response = await fetch("/affirmation");
        const data = await response.json();

        const phraseElement = document.getElementById("affirmation");

        // Fade out
        phraseElement.style.opacity = "0";

        setTimeout(() => {
            phraseElement.textContent = data.affirmation;
            phraseElement.style.opacity = "1";
        }, 200);
        
    } catch (error) {
        console.error("Erro ao buscar frase:", error);
    }
}