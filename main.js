import { Timer } from "./scripts/Timer.js";
import { Quiz } from "./scripts/Quiz.js";
import { HomeUi } from "./scripts/Ui/HomeUi.js";
import { QuizUi } from "./scripts/Ui/QuizUi.js";

const newHomeUi = new HomeUi();
const newQuiz = new Quiz();
const TIME_LIMIT = 3;

function renderQuiz() {

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
        if (newQuiz.quizEnd()) {
            console.log("QUIZ END!");
            //CRIDAR FUNCIO SHOW RANKINGS!
        } else {
            renderQuiz();
            console.log("NEXT QUESTION!");
        }
    });

}

function main() {
    newHomeUi.showHome(renderQuiz);
}

main();
