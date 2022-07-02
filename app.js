// @ts-check
import { questions } from "./data/questions.js";
import { getJugadores } from "./models/Jugadores.js";
import { Quiz } from "./models/Quiz.js";
import { Temp } from "./models/Temporizador.js";
import { UI } from "./models/Ui.js";

export const ui = new UI();

/**
 *
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui object
 */
export function renderPage(quiz, ui) {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    Temp(quiz, ui);
    // @ts-ignore
    document.getElementById("temporizador").style.display = "contents";
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      setTimeout(function () {
        renderPage(quiz, ui);
      }, 1000);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length); 
  }
}

export function startQuiz() {
  const quiz = new Quiz(questions); 
  ui.showQuiz();
  renderPage(quiz, ui);
}

function main() {
  getJugadores();
  ui.showHome();
}

main();
