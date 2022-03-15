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

    const addButton = document.createElement("button");
    addButton.className = "button";
    addButton.id = "anadirButton";
    addButton.innerHTML = "Guardar";
    addButton.type = "submit";
    addButton.onclick = function () {
      var valorInput = document.getElementById("formNombre").value;
      addPlayer(valorInput, score);
      /////////
      //LOCALSTORAGE
      ////////
      document.getElementById("anadirButton").style.display = "none";
      document.getElementById("formNombre").style.display = "none";
      document.getElementById("btnVolver").style.display = "none";
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

    const quizEndHTML = `
    <h1>Puntos: ${score}
    </h1>`;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEndHTML;
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
    element.innerHTML = `${currentIndex} of ${total}`;
  }

  showHome() {
    const addLogo = document.createElement("img");
    addLogo.src = "img/58f367aca4fa116215a923ef.png";
    addLogo.id = "logo-stardew";

    const jugarButton = document.createElement("button");
    jugarButton.id = "jugarButton";
    jugarButton.className = "button";
    jugarButton.innerHTML = "Jugar";
    jugarButton.type = "submit";
    jugarButton.onclick = startQuiz;

    const rankingButton = document.createElement("button");
    rankingButton.id = "rankingButton";
    rankingButton.className = "button";
    rankingButton.innerHTML = "Ranking";
    rankingButton.type = "submit";
    rankingButton.onclick = function () {
      showRankings();
    };

    const barra = document.createElement("hr");
    barra.id = "barra";

    const element = document.getElementById("quiz");
    element.append(addLogo);
    element.append(barra);
    //element.append(textQuiz);
    element.append(jugarButton);
    element.append(rankingButton);

    document.getElementById("temporizador").style.display = "none";

  }
}
