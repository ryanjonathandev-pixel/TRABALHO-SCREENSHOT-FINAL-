function abrirPopup() {
    document.body.style.overflow = "hidden";

    document.body.insertAdjacentHTML("beforeend", `
        <section class="backgroundBlur" id="backgroundBlur">
            <div id="popup" class="popup">
                <img src="../assets/imagensRandom/imgInicio.png" id="imgInicio" alt="Imagem centralizada">
            </div>
        </section>

        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            .backgroundBlur {
                position: fixed;
                inset: 0;
                width: 100%;
                height: 100%;
                background-color: black;
                z-index: 999998;
            }

            #imgInicio {
                position: fixed;
                width: 500px;
                max-width: 90%;
                height: auto;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: transform 0.4s ease;
                z-index: 999999;
                cursor: pointer;
            }

            #imgInicio:hover {
                transform: translate(-50%, -50%) scale(1.1);
            }
        </style>
    `);

    // Evento de clique
    const imgInicio = document.getElementById("imgInicio");

    document.addEventListener("click", function() {
        document.getElementById("backgroundBlur").remove();
        document.body.style.overflow = "";
    });
}

document.addEventListener("DOMContentLoaded", abrirPopup);