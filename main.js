import { Timer } from "./js/Timer.js";
import { Quiz } from "./js/Quiz.js";
import { HomeUi } from "./js/Ui/HomeUi.js";
import { QuizUi } from "./js/Ui/QuizUi.js";
import { showRankings } from "./js/Ui/RankingUi.js";

const newHomeUi = new HomeUi();
const newQuiz = new Quiz();
const TIME_LIMIT = 3;

function renderQuiz() {

    if (newQuiz.quizEnd()) {
        showRankings();

    } else {

        const newTimer = new Timer(TIME_LIMIT);
        newTimer.setTimer(() => {
            newQuiz.setQuestionsIndex();
            renderQuiz();
        });

        const newQuizUi = new QuizUi(newQuiz.getQuestion());
        newQuizUi.showQuiz((chosenAnswer) => {
            newTimer.clearTimer();
            newQuiz.correctAnswer(chosenAnswer);
            newQuiz.setQuestionsIndex();
            renderQuiz();
        });

    }

}

function main() {
    newHomeUi.showHome(renderQuiz, showRankings);
}

main();
