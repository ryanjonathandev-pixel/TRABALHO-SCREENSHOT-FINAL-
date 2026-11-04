let personagens = [];
let personagem = [];

const formulario = document.getElementById("formpersona");
const campoNome = document.getElementById("nome");
const campodifficulty = document.getElementById("difficulty");
const lista = document.getElementById("lista");
const play2 = document.getElementById("play2");


carregarPlayer();
renderizar();
atualizarC();

formulario.addEventListener("submit", cadastrarPersonagem);

function cadastrarPersonagem(evento) {
  evento.preventDefault();

  const personagem = {
    id: Date.now(),
    nome: campoNome.value,
    difficulty: campodifficulty.value,
    score: 0,
  };

  personagens.push(personagem);

  salvar();
  renderizar();
  limpar();
  atualizarC();
}


function renderizar() {
  lista.innerHTML = "";

  personagens.forEach((personagem) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <P>${personagem.nome}</P>
      <p>${personagem.difficulty}</p>
      <p>score: <span>${personagem.score}</span></p>
    <div id="buttons">
      <button 
          type="button"
          onclick="apagarPersonagem(${personagem.id})"
          id="excluir"
          class="blood">EXCLUIR
      </button>

      <button 
          type="button" 
          onclick="abrirJogo(${personagem.id})"
          id="jogar" 
          class="blood">
        JOGAR
      </button>

      <button 
          type="button"
          onclick="editarPersonagem(${personagem.id})"
          class="blood">
        EDITAR
      </button>
    </div>
    `;

    lista.appendChild(card);
  });
}




function salvar() {
  localStorage.setItem("personagens", JSON.stringify(personagens));
}

function carregarPlayer() {
  const dados = localStorage.getItem("personagens");

  if (dados != null) {
    personagens = JSON.parse(dados);
  }
}

// FUNÇOES QUE PODEM SER CHAMADAS

function limpar() {
  formulario.reset();
}

//apagar personagem do local storage e da tela

function apagarPersonagem(id) {
  personagens = personagens.filter((personagem) => personagem.id !== id);

  salvar();
  renderizar();
  atualizarC();
}

// Contador

function atualizarC() {
  play2.innerHTML = "Quantidade de jogadores: <span>" + personagens.length + "</span>";
}




function editarPersonagem(id) { 
  const personagem = personagens.find((personagem) => personagem.id === id); 
  const cards = document.querySelectorAll(".card"); 
  cards.forEach((card) => { if (card.innerHTML.includes(personagem.nome)) { card.innerHTML = ` 
   <input type="text" id="editNome" value="${personagem.nome}" > 
      <select id="editDifficulty"> 
      <option value="cry-baby">Cry Baby</option> 
      <option value="normal">Normal</option> 
      <option value="brutal">Brutal</option> </select> 
      <p>score: <span>${personagem.score}</span></p> 
      <button type="button" onclick="salvarEdicao(${personagem.id})" class="blood"> SALVAR </button> `; 
   card.querySelector("#editDifficulty").value = personagem.difficulty; } }); }


function salvarEdicao(id) {
  const personagem = personagens.find(
    (personagem) => personagem.id === id
  );

  const novoNome = document.getElementById("editNome").value;
  const novaDifficulty = document.getElementById("editDifficulty").value;

  personagem.nome = novoNome;
  personagem.difficulty = novaDifficulty;

  salvar();
  renderizar();
}


// musica


function iniciarMusica() {
    const musica = document.getElementById("musica");
    musica.play();

    document.removeEventListener("click", iniciarMusica);
}

document.addEventListener("click", iniciarMusica);


function abrirJogo(id) {
    const jogador = personagens.find((p) => p.id === id);

  if (jogador) {
    localStorage.setItem('jogadorAtual', JSON.stringify(jogador));
    location.href = 'GAME.html';
}}




/*Paralaxx*/

const body = document.body;
body.style.transition = "background-position 0.4s ease-out";

window.addEventListener("mousemove", function(e) {
  const centroX = window.innerWidth / 2;
  const centroY = window.innerHeight / 2;
  const sensibilidade = 0.03;
  const moverX = 50 - ((centroX - e.clientX) * sensibilidade);
  const moverY = 50 - ((centroY - e.clientY) * sensibilidade);
  body.style.backgroundPosition = moverX + "% " + moverY + "%";
});

