import { fisherYatesShuffle } from "../Utils.js";

export class QuizUi {
    constructor() {
    }

    showQuiz() {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const tem = document.createElement("p");
        tem.id = "temporizador";
        tem.innerHTML = "Go!";

        const points = document.createElement("p");
        points.id = "points";

        const quest = document.createElement("h2");
        quest.id = "question";

        const prog = document.createElement("p");
        prog.id = "progress";

        const choi = document.createElement("div");
        choi.id = "choices";

        element.append(tem);
        element.append(points);
        element.append(quest);
        element.append(prog);
        element.append(choi);
    }

    showQuestion(quest) {
        const question = document.querySelector("#question");
        question.innerHTML = quest;
    }

    showScore(getScore) {
        const points = document.querySelector("#points");
        points.innerHTML = `Score: ${getScore}`;
    }

    showProgress(getQuestionIndex, getQuestionsLength) {
        const prog = document.querySelector("#prog");
        prog.innerHTML = `${getQuestionIndex + 1} de ${getQuestionsLength}`;
    }


    showChoices(choi, checkAnswerAndNextQuestion) {
        const choic = document.querySelector("#choices");
        choic.innerHTML = "";

        let choices = fisherYatesShuffle(choi);
        choices.forEach((choice) => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.className = "choicesButtons";
            button.addEventListener("click", () => {
                checkAnswerAndNextQuestion(choice, button);
            });
            choic.appendChild(button);
        });
    }
}