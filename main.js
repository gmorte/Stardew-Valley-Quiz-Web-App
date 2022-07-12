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
        showRankings(main);
    } else {
        const newTimer = new Timer(TIME_LIMIT);
        newTimer.setTimer(() => {
            newQuiz.setQuestionsIndex();
            renderQuiz();
        });

        const newQuizUi = new QuizUi(newQuiz.getQuestion());
        newQuizUi.showQuiz(
            (chosenAnswer) => {
                newQuiz.correctAnswer(chosenAnswer);
                newTimer.clearTimer();
                setTimeout(() => {
                    newQuiz.setQuestionsIndex();
                    renderQuiz();
                }, 3000);
            },
            newQuiz.getQuestionsIndex(),
            newQuiz.getQuestionsLength()
        );
    }
}

function main() {
    newHomeUi.showHome(renderQuiz, () => showRankings(main));
}

main();
