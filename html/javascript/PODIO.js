const personagens = JSON.parse(localStorage.getItem("personagens")) || [];

console.log(personagens);

function renderizar() {
  lista.innerHTML = "";

  personagens.forEach((personagem) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <P>${personagem.nome}</P>
      <p>${personagem.difficulty}</p>
      <p>score: <span>${personagem.score}</span></p>
      <button 
          type="button"
          onclick="apagarPersonagem(${personagem.id})"
          id="excluir"
          class="blood">EXCLUIR
      </button>

      <button 
          type="button" 
          onclick="location.href='GAME.html'" 
          id="jogar" 
          class="blood">
        JOGAR
      </button>
    `;

    lista.appendChild(card);
  });
}