import { Timer } from "./scripts/Timer.js";
import { Quiz } from "./scripts/Quiz.js";
import { HomeUi } from "./scripts/Ui/HomeUi.js";
import { QuizUi } from "./scripts/Ui/QuizUi.js";
import { showRankings } from "./scripts/Ui/RankingUi.js";

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
