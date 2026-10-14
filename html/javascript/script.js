const escuridao = document.getElementById("escuro");
const quitButton = document.getElementById("Quitbutton");

function moverLanterna(e) {
    const x = e.clientX;
    const y = e.clientY;

    escuridao.style.background =
        `radial-gradient(circle at ${x}px ${y}px, transparent 100px, black 250px)`;
}
document.addEventListener("pointermove", moverLanterna);

quitButton.addEventListener("click", function () {
    window.location.href = "../index.html";
});


const seguidor = document.querySelector('.seguidor');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  seguidor.style.left = `${x}px`;
  seguidor.style.top = `${y}px`;
});




const jogadorAtual = JSON.parse(localStorage.getItem("jogadorAtual"));
const NOME = jogadorAtual.nome;
const DIFFICULT = jogadorAtual.difficulty;
const SCORE = jogadorAtual.score;

console.log(NOME);
console.log(SCORE);
console.log(DIFFICULT);