import { Timer } from "./scripts/Timer.js";
import { Quiz } from "./scripts/Quiz.js";
import { HomeUi } from "./scripts/Ui/HomeUi.js";
import { QuizUi } from "./scripts/Ui/QuizUi.js";

const newHomeUi = new HomeUi();
const newQuiz = new Quiz();
const TIME_LIMIT = 3;

function renderQuiz() {
    /////////////////////IMPLEMENTACION TEMPORIZADOR (BUSCAR COMO PASAR A MODULO EXTERNO) //////////////////////////////////
    // let seconds = TIME_LIMIT;
    // const timer = setInterval(() => {
    //     let newTimer = document.querySelector("#temporizador");
    //     newTimer.innerHTML = seconds--;
    //     if (seconds == -1) {
    //         clearInterval(timer);
    //     }
    // }, 1000);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const newTimer = new Timer(TIME_LIMIT);
    newTimer.setTimer();

    const newQuizUi = new QuizUi(newQuiz.getQuestion());
    newQuizUi.showQuiz((chosenAnswer) => {
        newTimer.clearTimer();
        newQuiz.correctAnswer(chosenAnswer);
        newQuiz.setQuestionsIndex();
        if (newQuiz.quizEnd()) {
            console.log("QUIZ END!");
            //CRIDAR FUNCIO SHOW RANKINGS!
        } else {
            //clearInterval(timer);
            renderQuiz();
            console.log("NEXT QUESTION!");
        }
    });
}

function main() {
    newHomeUi.showHome(renderQuiz);
}

main();
