// @ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/Ui.js";

/**
 *
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui object
 */
function renderPage(quiz, ui) {
  /* if(quiz.Status == false) Mostrar Pantalla Inici, si clicka empieza quiz.Status == true
     Si clicka rankings -> mostra ranking + button salir
  */

  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
  }
}

export function startQuiz() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  document.getElementById("logo-stardew").style.display = "none";
  document.getElementById("jugarButton").style.display = "none";
  document.getElementById("rankingButton").style.display = "none";
  document.getElementById("barra").style.display = "none";

  renderPage(quiz, ui);
}

export function main() {
  const ui = new UI();
  ui.showHome();
}

main();
