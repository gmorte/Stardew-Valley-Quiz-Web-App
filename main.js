import { Timer } from "./js/Timer.js";
import { Quiz } from "./js/Quiz.js";
import { HomeUi } from "./js/Ui/HomeUi.js";
import { QuizUi } from "./js/Ui/QuizUi.js";
import { showRankings } from "./js/Ui/RankingUi.js";
import { Score } from "./js/Score.js";
import { formScore } from "./js/Ui/ScoreUi.js";

const newHomeUi = new HomeUi();
let newQuiz = new Quiz();
let newScore = new Score();
const TIME_LIMIT = 30;

function resetGame() {
    newQuiz = new Quiz();
    newScore = new Score();
}

function renderQuiz(newQuizUi) {

    if (newQuiz.quizEnd()) {
        formScore(newScore.getScore(), () => showRankings(main), main);
    } else {
        const newTimer = new Timer(TIME_LIMIT);
        newTimer.setTimer(() => {
            newQuiz.setQuestionsIndex();
            renderQuiz();
        });

        newQuizUi.showQuestion(newQuiz.getQuestion().question);

        newQuizUi.showChoices(newQuiz.getQuestion().choices, (choice, buttonId) => {
            const choicesButtons = document.getElementsByClassName("choicesButtons");
            const choicesButtonsArray = Array.from(choicesButtons);
            choicesButtonsArray.forEach(element => {
                element.disabled = true;
            });
            if (newQuiz.correctAnswer(choice)) {
                newScore.setScore(newTimer.getSeconds());
                buttonId.style.backgroundColor = "green";
            } else {
                buttonId.style.backgroundColor = "red";
                //Leave this implementation if i want to show the correct answer to the user.
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
                renderQuiz(newQuizUi);
            }, 1000);
        });
    }
}

function startQuiz() {
    const newQuizUi = new QuizUi();
    newQuizUi.showQuiz();
    renderQuiz(newQuizUi);
}

function main() {
    newHomeUi.showHome(startQuiz, () => showRankings(main));
    resetGame();
}

main();
