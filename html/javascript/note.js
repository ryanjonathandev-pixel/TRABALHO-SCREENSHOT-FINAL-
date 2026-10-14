function abrirPopup() {
    //fatalError();
    document.body.style.overflow = "hidden";

    document.body.insertAdjacentHTML("beforeend", `
<section class="backgroundBlur" id="backgroundBlur">
    <div id="tremor">
        <div id="popup" class="popup">

            <div class="barra">
                <div class="titulo">
                    這口味讓我沉醉
                </div>

                <a href="#" class="fechar" onclick="fecharPopup(event)">
                    <img src="../assets/Popup/close_popup.png" alt="Fechar">
                </a>
            </div>

            <div class="conteudo">

                <img
                    src="../assets/Popup/A-90IDLE.webp"
                    class="personagem"
                    alt="A-90"
                >

                <p>无信号</p>

            </div>

        </div>
    </div>
</section>

<style>

.backgroundBlur {
     position: fixed;
     inset: 0;
     
     width: 100vw;
     height: 100vh;
     
     background-color: rgba(0, 0, 0, 0.45);
     
     backdrop-filter: blur(8px);
     -webkit-backdrop-filter: blur(8px);
     
     z-index: 9999;
     animation: none;
    
}


/* =========================
   POPUP
   ========================= */

.popup {
    width: 420px;
    height: 300px;

    background: white;

    border-radius: 3px;

    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.45);

    font-family: "Segoe UI", Tahoma, Arial, sans-serif;

    position: fixed;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    overflow: hidden;

    transform-origin: center;

    animation: entradaGlitch 0.15s steps(1, end) 0.5s forwards;

    opacity: 0%;
}


/* =========================
   ENTRADA GLITCH
   ========================= */

@keyframes entradaGlitch {

    0% {
        transform:
            translate(-50%, -50%)
            scaleX(1.15)
            scaleY(0.5);

        opacity: 100%;
    }

    20% {
        transform:
            translate(-50%, -50%)
            scaleX(0.75)
            scaleY(1.15);

        opacity: 100%;
    }

    40% {
        transform:
            translate(-50%, -50%)
            scaleX(0.10)
            scaleY(2);

        opacity: 100%;
    }

    60% {
        transform:
            translate(-50%, -50%)
            scaleX(1.12)
            scaleY(0.88);

        opacity: 100%;
    }

    80% {
        transform:
            translate(-50%, -50%)
            scaleX(0.96)
            scaleY(1.04);

        opacity: 100%;
    }

    100% {
        transform:
            translate(-50%, -50%)
            scaleX(1)
            scaleY(1);

        opacity: 100%;
    }
}


/* =========================
   BARRA
   ========================= */

.barra {
    height: 34px;


    position: relative;

    display: flex;
    align-items: center;

    border-bottom: 2px solid black;
    background-image

    z-index: 5;
}


/* FONTE */

@font-face {
    font-family: 'TahomaCustom';

    src: url('../../assets/Popup/winFonts/Tahoma.ttf')
    format('truetype');
}


.titulo {
    color: black;

    font-size: 16px;

    font-weight: normal;

    padding-left: 12px;

    font-family: TahomaCustom;
}


/* =========================
   BOTÃO X
   ========================= */

.fechar {
    position: absolute;

    right: 5px;

    width: 28px;
    height: 28px;

    display: block;

    z-index: 10;
}


.fechar img {
    width: 28px;
    height: 28px;

    display: block;

    cursor: pointer;
}


/* =========================
   CONTEÚDO
   ========================= */

.conteudo {
    height: calc(100% - 38px);

    background: white;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 12px;

    overflow: hidden;

    z-index: 1;
}


/* =========================
   A-90
   ========================= */

.personagem {
    width: 150px;
    height: 150px;

    object-fit: contain;

    display: block;

    position: relative;

    z-index: 2;

    pointer-events: none;
}


/* =========================
   TEXTO
   ========================= */

.conteudo p {
    margin: 0;

    color: black;

    font-family: TahomaCustom, "Segoe UI", Arial, sans-serif;

    font-size: 32px;

    font-weight: 600;

    position: relative;

    z-index: 2;
}


/* =========================
   TREMOR
   ========================= */

#tremor {
    position: fixed;

    left: 50%;
    top: 50%;

    width: 420px;
    height: 300px;

    transform: translate(-50%, -50%);

    animation:
        tremorGlitch
        3.5s
        steps(1)
        0.65s
        infinite;
}


@keyframes tremorGlitch {

    0% {
        transform:
            translate(-50%, -50%);
    }

    15% {
        transform:
            translate(
                calc(-50% - 5px),
                calc(-50% + 1px)
            );
    }

    30% {
        transform:
            translate(
                calc(-50% + 4px),
                calc(-50% - 2px)
            );
    }

    45% {
        transform:
            translate(
                calc(-50% - 2px),
                calc(-50% + 4px)
            );
    }

    60% {
        transform:
            translate(
                calc(-50% + 5px),
                calc(-50% - 3px)
            );
    }

    75% {
        transform:
            translate(
                calc(-50% - 4px),
                calc(-50% - 1px)
            );
    }

    90% {
        transform:
            translate(
                calc(-50% + 2px),
                calc(-50% + 3px)
            );
    }

    100% {
        transform:
            translate(-50%, -50%);
    }
}

</style>
`);
}


document.addEventListener("DOMContentLoaded", abrirPopup);


function fecharPopup(event) {
    event.preventDefault();

    document.getElementById("backgroundBlur").remove();

    document.body.style.overflow = "";
}


/*function fatalError() {
    const som = new Audio("../../assets/Popup/fatalError.mp3");

    som.play();
}*/