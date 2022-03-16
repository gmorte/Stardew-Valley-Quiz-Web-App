// @ts-check
import { questions } from "./data/questions.js";
import { getJugadores } from "./models/Jugadores.js";
import { Quiz } from "./models/Quiz.js";
import { Temp } from "./models/Temporizador.js";
import { UI } from "./models/Ui.js";

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
    document.getElementById("temporizador").style.display = "contents";
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length); //MAX 10 EN LUGAR DE LENGTH
  }
}

export function startQuiz() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  ui.showQuiz();
  renderPage(quiz, ui);
}

export function main() {
  getJugadores();
  const ui = new UI();
  ui.showHome();
}

main();


