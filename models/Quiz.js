import { Question } from "./Question.js";

export class Quiz {
  questionIndex = 0;
  score = 0;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length == this.questionIndex;
  }

  /**
   *
   * @param {string} answer some text
   */
  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      var points = document.getElementById("temporizador").title;

      if (document.getElementById("temporizador").textContent == "Go!") {
        this.score += 30;
      } else {
        this.score += parseInt(points);
      }
    }

    var check = this.getQuestionIndex().correctAnswer(answer);

    window.document.addEventListener("click", function (e) {
      const idClickeado = e.target.id;
      if (check) {
        document.getElementById(idClickeado).style.background = "green";
      } else {
        document.getElementById(idClickeado).style.background = "red";
      }
    });

    this.questionIndex++;
  }
}
