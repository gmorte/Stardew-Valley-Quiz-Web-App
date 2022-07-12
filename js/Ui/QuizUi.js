import { fisherYatesShuffle } from "../Utils.js";

export class QuizUi {

    constructor(question) {
        this.question = question.question;
        this.choices = question.choices;
        this.answer = question.answer;
    }

    showQuiz(callback) {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const tem = document.createElement("p");
        tem.id = "temporizador";
        tem.innerHTML = "Go!";
        element.append(tem);

        const quest = document.createElement("h2");
        quest.id = "question";
        quest.innerHTML = this.question;
        element.append(quest);

        const prog = document.createElement("p");
        prog.id = "progress";
        element.append(prog);

        const choi = document.createElement("div");
        choi.id = "choices";

        let choices = fisherYatesShuffle(this.choices);
        choices.forEach((choices) => {
            const button = document.createElement("button");
            button.innerText = choices;
            button.className = "button";
            button.addEventListener("click", () => callback(choices));
            choi.appendChild(button);
        });
        element.append(choi);
    }

    // showProgress() {
    //     const progress = document.getElementById("progress");
    //     progress.innerHTML = `${questionsIndex + 1} de ${questions.length}`;
    // }
}
