import { Timer } from "./js/Timer.js";
import { Quiz } from "./js/Quiz.js";
import { HomeUi } from "./js/Ui/HomeUi.js";
import { QuizUi } from "./js/Ui/QuizUi.js";
import { showRankings } from "./js/Ui/RankingUi.js";
import { Score } from "./js/Score.js";
import { formScore } from "./js/Ui/ScoreUi.js";

const TIME_LIMIT = 30;

function renderQuiz(newQuizUi, newQuiz, newScore) {

    if (newQuiz.quizEnd()) {
        formScore(newScore.getScore(), () => showRankings(main), main);
    } else {
        const newTimer = new Timer(TIME_LIMIT);
        newTimer.setTimer(() => {
            newQuiz.setQuestionsIndex();
            renderQuiz(newQuizUi, newQuiz, newScore);
        });
        newQuizUi.showQuestion(newQuiz.getQuestion().question);
        newQuizUi.showScore(newScore.getScore());
        newQuizUi.showChoices(newQuiz.getQuestion().choices, (clickedChoice, clickedButton) => {
            const choicesButtons = document.getElementsByClassName("choicesButtons");
            const choicesButtonsArray = Array.from(choicesButtons);
            choicesButtonsArray.forEach(element => {
                element.disabled = true;
            });
            if (newQuiz.correctAnswer(clickedChoice)) {
                newScore.setScore(newTimer.getSeconds());
                clickedButton.style.backgroundColor = "green";
            } else {
                clickedButton.style.backgroundColor = "red";
                choicesButtonsArray.forEach(element => {
                    if (element.textContent == newQuiz.getQuestion().answer) {
                        element.style.backgroundColor = "green";
                    }
                });
            }
            newTimer.clearTimer();
            document.querySelector(
                "#points"
            ).innerHTML = `Score: ${newScore.getScore()}`;
            setTimeout(() => {
                newQuiz.setQuestionsIndex();
                renderQuiz(newQuizUi, newQuiz, newScore);
            }, 1000);
        });
    }
}

function startQuiz() {
    const newQuiz = new Quiz();
    const newQuizUi = new QuizUi();
    const newScore = new Score();
    newQuizUi.showQuiz();
    renderQuiz(newQuizUi, newQuiz, newScore);
}

function main() {
    const newHomeUi = new HomeUi();
    newHomeUi.showHome(startQuiz, () => showRankings(main));
}

main();
