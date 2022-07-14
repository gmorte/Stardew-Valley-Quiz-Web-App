import { fisherYatesShuffle } from "../Utils.js";

export class QuizUi {
    constructor(question) {
        this.question = question.question;
        this.choices = question.choices;
        this.answer = question.answer;
    }

    showQuiz(
        // getScore,
        // getQuestionIndex,
        // getQuestionsLength,
        // checkAnswerAndNextQuestion
    ) {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const tem = document.createElement("p");
        tem.id = "temporizador";
        tem.innerHTML = "Go!";
        element.append(tem);

        const points = document.createElement("p");
        points.id = "points";
        // points.innerHTML = `Score: ${getScore}`;
        // element.append(points);

        const quest = document.createElement("h2");
        quest.id = "question";
        quest.innerHTML = this.question;
        element.append(quest);

        const prog = document.createElement("p");
        prog.id = "progress";
        // prog.innerHTML = `${getQuestionIndex + 1} de ${getQuestionsLength}`;
        // element.append(prog);

        const choi = document.createElement("div");
        choi.id = "choices";

        // let choices = fisherYatesShuffle(this.choices);
        // choices.forEach((choice) => {
        // const button = document.createElement("button");
        // button.innerText = choice;
        // button.className = "choicesButtons";
        // button.addEventListener("click", () => {
        // checkAnswerAndNextQuestion(choice, button);
        // });
        // choi.appendChild(button);
        // });
        // element.append(choi);
    }

    showScore(getScore) {
        const points = document.querySelector("#points");
        points.innerHTML = `Score: ${getScore}`;
        element.append(points);
    }

    showProgress(getQuestionIndex, getQuestionsLength) {
        const prog = document.querySelector("#prog");
        prog.innerHTML = `${getQuestionIndex + 1} de ${getQuestionsLength}`;
        element.append(prog);
    }


    showChoices() {
        let choices = fisherYatesShuffle(this.choices);
        choices.forEach((choice) => {
            const button = document.createElement("button");
            button.innerText = choice;
            button.className = "choicesButtons";
            button.addEventListener("click", () => {
                checkAnswerAndNextQuestion(choice, button);
            });
            choi.appendChild(button);
        });
        element.append(choi);
    }
}