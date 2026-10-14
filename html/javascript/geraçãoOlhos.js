const CONFIG = {
    intervaloGeracao: 1000,
    limiteElementos: 10
};

const sistema = {
    elementos: [],
    intervalo: null,
    geracaoAtiva: false
};

const contador = document.getElementById("contador");
let score = 0;

const cena = document.getElementById("cena");

iniciarGeracao();

function iniciarGeracao() {
    if (sistema.geracaoAtiva) {
        return;
    }

    sistema.geracaoAtiva = true;

    gerarElemento();

    sistema.intervalo = setInterval(
        gerarElemento,
        CONFIG.intervaloGeracao
    );
}

function pausarGeracao() {
    sistema.geracaoAtiva = false;

    clearInterval(sistema.intervalo);

    sistema.intervalo = null;
}

function gerarElemento() {
    if (sistema.elementos.length >= CONFIG.limiteElementos) {
        pausarGeracao();
        return;
    }

    const olho = criarOlho();

    posicionarElemento(olho);

    cena.appendChild(olho);

    sistema.elementos.push(olho);
}

function criarOlho() {
    const olho = document.createElement("div");

    olho.classList.add(
        "olho",
        "objeto-cenario"
    );

olho.addEventListener("mouseenter", function() {
    olho.remove();

    sistema.elementos = sistema.elementos.filter(function(elemento) {
        return elemento !== olho;
    });
    
    atuContador();
    iniciarGeracao();
});

return olho;
}

function posicionarElemento(elemento) {
    const posicaoX = 10 + Math.random() * 80;
    const posicaoY = 10 + Math.random() * 80;

    elemento.style.left = `${posicaoX}%`;
    elemento.style.top = `${posicaoY}%`;
}

function atuContador() {
    score += 100;
    contador.textContent = score;

    const jogadorAtual = JSON.parse(
        localStorage.getItem("jogadorAtual")
    );

    if (jogadorAtual) {
        jogadorAtual.score = score;

        localStorage.setItem(
            "jogadorAtual",
            JSON.stringify(jogadorAtual)
        );
    }
}