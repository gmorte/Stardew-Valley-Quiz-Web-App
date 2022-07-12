import { Timer } from "./js/Timer.js";
import { Quiz } from "./js/Quiz.js";
import { HomeUi } from "./js/Ui/HomeUi.js";
import { QuizUi } from "./js/Ui/QuizUi.js";
import { showRankings } from "./js/Ui/RankingUi.js";
import { Score } from "./js/Score.js";

const newHomeUi = new HomeUi();
const newQuiz = new Quiz();
const newScore = new Score();
const TIME_LIMIT = 3;

function renderQuiz() {
    if (newQuiz.quizEnd()) {
        showRankings(main);
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
                newQuiz.correctAnswer(chosenAnswer);
                newTimer.clearTimer();
                newScore.setScore(newTimer.getSeconds());
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
}

main();
