import { fisherYatesShuffle } from "../Utils.js";

export class QuizUi {
    constructor(question) {
        this.question = question.question;
        this.choices = question.choices;
        this.answer = question.answer;
    }

    showQuiz(
        updateScore,
        updateQuestionIndex,
        questionsLength,
        checkAnswerAndNextQuestion
    ) {
        const element = document.getElementById("app");
        element.innerHTML = "";

        const tem = document.createElement("p");
        tem.id = "temporizador";
        tem.innerHTML = "Go!";
        element.append(tem);

        const points = document.createElement("p");
        points.id = "points";
        points.innerHTML = `Score: ${updateScore}`;
        element.append(points);

        const quest = document.createElement("h2");
        quest.id = "question";
        quest.innerHTML = this.question;
        element.append(quest);

        const prog = document.createElement("p");
        prog.id = "progress";
        prog.innerHTML = `${updateQuestionIndex + 1} de ${questionsLength}`;
        element.append(prog);

        const choi = document.createElement("div");
        choi.id = "choices";

        let choices = fisherYatesShuffle(this.choices);
        choices.forEach((choices) => {
            const button = document.createElement("button");
            button.innerText = choices;
            button.className = "button";
            button.addEventListener("click", () =>
                checkAnswerAndNextQuestion(choices)
            );
            choi.appendChild(button);
        });
        element.append(choi);
    }
}
