const btn = document.getElementById('btn');
const affirmationText = document.getElementById('affirmation');

btn.addEventListener('click', async () => {
    try {
        affirmationText.classList.add("fade-out");

        setTimeout(async () => { 
        const response = await fetch("/affirmation");
        const data = await response.json();

        affirmationText.textContent = data.affirmation;

        affirmationText.classList.remove("fade-out");
        affirmationText.classList.add("fade-in");

        setTimeout(() => {
            affirmationText.classList.remove("fade-in");
        }, 800);

    }, 800);   
    } catch (error) {
        affirmationText.textContent = "Ops! Algo deu errado :(  -  Tente Novamente ;) ";
    }
});
