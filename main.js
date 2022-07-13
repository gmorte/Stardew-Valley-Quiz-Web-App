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

function renderQuiz() {
    if (newQuiz.quizEnd()) {
        formScore(newScore.getScore(), () => showRankings(main), main);
    } else {
        const newTimer = new Timer(TIME_LIMIT);
        newTimer.setTimer(() => {
            newQuiz.setQuestionsIndex();
            renderQuiz();
        });

        const newQuizUi = new QuizUi(newQuiz.getQuestion());
        newQuizUi.showQuiz(
            newScore.getScore(),
            newQuiz.getQuestionsIndex(),
            newQuiz.getQuestionsLength(),
            (choice, buttonId) => {
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
                        if(element.textContent == newQuiz.getQuestion().answer){
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
                    renderQuiz();
                }, 1000);
            }
        );
    }
}

function main() {
    newHomeUi.showHome(renderQuiz, () => showRankings(main));
    resetGame();
}

main();
