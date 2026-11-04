const CENA = document.getElementById("cena");

function iniciarContagem() {
    var intervalo = 5000 + Math.random() * 1000;

    setTimeout(function() {

        if (document.querySelectorAll(".monstro").length < 10) {
            criarMonstro();
        }

        iniciarContagem();

    }, intervalo);
}

function criarMonstro() {
    const elementoMonstro = criarElementoMonstro();

    posicionarElementoM(elementoMonstro);

    CENA.appendChild(elementoMonstro);

    console.log("O monstro apareceu!");
}

function criarElementoMonstro() {
    const elementoMonstro = document.createElement("div");

    elementoMonstro.classList.add("monstro");

    const imagemMonstro = document.createElement("img");
    imagemMonstro.src = "javascript/img-gold/gold.webp";
    imagemMonstro.classList.add("imagem-monstro");

    elementoMonstro.appendChild(imagemMonstro);

    return elementoMonstro;
}

iniciarContagem();


function posicionarElementoM(elemento) {
    const posicaoX = 10 + Math.random() * 80;
    const posicaoY = 10 + Math.random() * 80;

    elemento.style.left = `${posicaoX}%`;
    elemento.style.top = `${posicaoY}%`;
}


/* monstro morte */

document.addEventListener("mouseover", function(event) {
    if (event.target && event.target.classList.contains("monstro")) {
        console.log("O jogador tocou no monstro! Redirecionando...");
        atualizarLocal();
        window.location.href = 'deathScreen.html';
    }
});


/* espaço pra espantar monstro */

document.addEventListener("keydown", function(evento) {
    if (evento.code === "Space") {
        evento.preventDefault();

        const monstro = document.querySelector(".monstro");

        if (monstro) {
            monstro.remove();
        }
    }
});


function atualizarLocal() {
    let jogadorAtu = JSON.parse(localStorage.getItem("jogadorAtual"));
    let person = JSON.parse(localStorage.getItem("personagens"));

    let indice = person.findIndex(function(item) {
        return item.id === jogadorAtu.id;
    });

    if (indice !== -1) {
        person[indice].score = jogadorAtu.score;
    }

    localStorage.setItem("personagens", JSON.stringify(person));
}


/* AVISO */

window.addEventListener("load", function() {

    const mensagem = document.getElementById("mensagemInicio");

    setTimeout(function() {
        mensagem.remove();
    }, 12000);

});