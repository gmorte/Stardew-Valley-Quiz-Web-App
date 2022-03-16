import { addPlayer, showRankings } from "./Jugadores.js";
import { startQuiz } from "../app.js";

export class UI {
  constructor() {}

  /**
   *
   * @param {string} text question to render
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string[]} choices the choices of the question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }

  /**
   *
   * @param {number} score the total score
   */
  showScores(score) {
    //
    const label = document.createElement("label");
    label.for = "formNombre";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "formNombre";
    input.className = "button";
    input.maxLength = "12";
    input.placeholder = "Tu nombre:";

    const addButton = document.createElement("button");
    addButton.className = "button";
    addButton.id = "anadirButton";
    addButton.innerHTML = "Guardar";
    addButton.type = "submit";
    addButton.onclick = function () {
      var valorInput = document.getElementById("formNombre").value;
      addPlayer(valorInput, score);
      showRankings();
    };

    const volverButton = document.createElement("button");
    volverButton.className = "button";
    volverButton.innerHTML = "Inicio";
    volverButton.type = "submit";
    volverButton.id = "btnVolver";
    volverButton.onclick = function () {
      location.reload();
    };

    const totalPuntos = document.createElement("h1");
    totalPuntos.id = "totalPuntos";
    totalPuntos.className = "estiloPuntos";
    totalPuntos.innerHTML = `Puntos: `;

    const Puntos = document.createElement("h1");
    Puntos.id = "Puntos";
    Puntos.className = "estiloPuntos";
    Puntos.innerHTML = `${score}`;

    const infoFinal = document.createElement("h2");
    infoFinal.id = "infoFinal";
    infoFinal.innerHTML = "Muy bien!"; //Funcion if o switch 3 mensajes diferentes.

    const element = document.getElementById("quiz");
    element.innerHTML = "";
    element.append(totalPuntos);
    element.append(Puntos);
    element.append(infoFinal);
    element.append(input);
    element.append(addButton);
    element.append(volverButton);
  }

  /**
   *
   * @param {number} currentIndex the current index of the quiz
   * @param {number} total the total questions
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `${currentIndex} de ${total}`;
  }

  showHome() {
    const addLogo = document.createElement("img");
    addLogo.src = "img/58f367aca4fa116215a923ef.png";
    addLogo.id = "logo-stardew";

    const jugarButton = document.createElement("button");
    jugarButton.id = "jugarButton";
    jugarButton.className = "button";
    jugarButton.textContent = "Jugamos";
    jugarButton.type = "submit";
    jugarButton.onclick = startQuiz;

    const rankingButton = document.createElement("button");
    rankingButton.id = "rankingButton";
    rankingButton.className = "button";
    rankingButton.textContent = "Ranking";
    rankingButton.type = "submit";
    rankingButton.onclick = function () {
      showRankings();
    };

    const barra = document.createElement("hr");
    barra.id = "barra";
    barra.style.display = "none";

    const element = document.getElementById("quiz");
    element.append(addLogo);
    element.append(barra);
    element.append(jugarButton);
    element.append(rankingButton);

    document.getElementById("temporizador").style.display = "none";
  }

  showQuiz() {
    const element = document.getElementById("quiz");

    element.innerHTML = "";

    const tem = document.createElement("p");
    tem.id = "temporizador";
    element.append(tem);

    const quest = document.createElement("h2");
    quest.id = "question";
    element.append(quest);

    const prog = document.createElement("p");
    prog.id = "progress";
    element.append(prog);

    const choi = document.createElement("div");
    choi.id = "choices";
    element.append(choi);

    /* document.getElementById("logo-stardew").style.display = "none";
    document.getElementById("jugarButton").style.display = "none";
    document.getElementById("rankingButton").style.display = "none";
    document.getElementById("barra").style.display = "none"; */
  }
}
