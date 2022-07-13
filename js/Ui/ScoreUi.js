import { feedBackScore } from "../../data/feedBackScore.js";
import { addPlayer } from "../Players.js";

export function formScore(score, showRank, main) {
    const totalPuntos = document.createElement("h1");
    totalPuntos.id = "totalPuntos";
    totalPuntos.className = "estiloPuntos";
    totalPuntos.innerHTML = `PUNTOS: `;

    const Puntos = document.createElement("h1");
    Puntos.id = "Puntos";
    Puntos.className = "estiloPuntos";
    Puntos.innerHTML = `${score}`;

    const infoFinal = document.createElement("h2");
    infoFinal.className = "estiloPuntos";
    feedBackScore.forEach((feedBackScore) => {
        if (score > feedBackScore.minScore && score < feedBackScore.maxScore) {
            infoFinal.innerHTML = feedBackScore.message;
        }
    });

    const label = document.createElement("label");
    label.for = "formNombre";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "formNombre";
    input.className = "button";
    input.maxLength = "10";
    input.placeholder = "Tu nombre:";

    const addButton = document.createElement("button");
    addButton.className = "button";
    addButton.id = "anadirButton";
    addButton.innerHTML = "Guardar";
    addButton.type = "submit";
     addButton.onclick = function () {
        var valorInput = document.getElementById("formNombre").value;
        addPlayer(valorInput, score);
        showRank();
    };

    const volverButton = document.createElement("button");
    volverButton.className = "button";
    volverButton.innerHTML = "Inicio";
    volverButton.type = "submit";
    volverButton.id = "btnVolver";
    volverButton.onclick = main;

    const element = document.querySelector("#app");
    element.innerHTML = "";
    element.append(totalPuntos);
    element.append(Puntos);
    element.append(infoFinal);
    element.append(input);
    element.append(addButton);
    element.append(volverButton);
}
