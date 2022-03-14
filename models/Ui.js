import {Jugador} from './Jugador.js'

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

    const addButton = document.createElement("button");
    addButton.className = "button";
    addButton.innerHTML = "Añadir";
    addButton.type = "submit";
    addButton.onclick = function () {
      var valorInput = document.getElementById("formNombre").value;
      //console.log(valorInput);
      const newJugador = new Jugador(valorInput, score);
      console.log(newJugador.datos());
    };

    //
    /*const quizEndHTML = `
    <h1>Result</h1>
    <h2>Your Score: ${score}</h2>
    `*/
    const quizEndHTML = `
    <h2>Puntos: ${score}</h2>
    `;

    const element = document.getElementById("quiz");
    element.style.fontFamily = "Stardew-Valley";
    element.style.fontSize = "30px";
    element.style.color = "#572300";
    element.innerHTML = quizEndHTML;
    element.append(input);
    element.append(addButton);
  }

  /**
   *
   * @param {number} currentIndex the current index of the quiz
   * @param {number} total the total questions
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = /*`Question*/ `${currentIndex} of ${total}`;
  }
}
