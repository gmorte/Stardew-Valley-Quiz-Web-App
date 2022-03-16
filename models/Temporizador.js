import { renderPage } from "../app.js";

export function Temp(quiz, ui) {
  var timeLeft = 29;

  var elem = document.getElementById("temporizador");
  elem.innerHTML = '30';

  var timerId = setInterval(countdown, 1000);

  var check = quiz.getQuestionIndex();

  function countdown() {
    if (check != quiz.getQuestionIndex()) {
      timeLeft = 30;
    } else if (timeLeft == -1) {
      clearTimeout(timerId);
      elem.style.color = "plum";
      elem.innerHTML = 30;

      quiz.questionIndex++;
      renderPage(quiz, ui);
    } else {
      elem.innerHTML = timeLeft;
      elem.title = timeLeft;
      timeLeft--;
      if (timeLeft < 3) {
        document.getElementById("temporizador").style.color = "red";
      }
    }
  }
}


