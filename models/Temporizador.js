import { renderPage } from "../app.js";

export function Temp(quiz, ui) {
  var timeLeft = 2;

  var elem = document.getElementById("temporizador");

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      elem.innerHTML = 3;
      quiz.questionIndex++;
      renderPage(quiz, ui);
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }
}
