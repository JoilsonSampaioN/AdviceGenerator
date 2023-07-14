const idAdvice = document.getElementById('advice-number')
const advice = document.getElementById('advice')
const dado = document.getElementById("dado")
async function getAdvice(){
    const resposta = await fetch("https://api.adviceslip.com/advice");
    const adviceContent = await resposta.json();
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;

    idAdvice.innerHTML = adviceId
    advice.innerHTML = adviceText
}
dado.addEventListener("click", getAdvice);

getAdvice();
