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
const TIME_LIMIT = 1;

function resetGame(){
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
            (chosenAnswer) => {
                if (newQuiz.correctAnswer(chosenAnswer)) {
                    newScore.setScore(newTimer.getSeconds());
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
