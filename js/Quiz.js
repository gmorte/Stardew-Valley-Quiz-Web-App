import { data } from "../../data/data.js";
import { fisherYatesShuffle } from "./Utils.js";

export class Quiz {
    questionsIndex = 0;

    constructor() {
        fisherYatesShuffle(data);
        this.questions = data.slice(0, 10);
    }

    getQuestion() {
        return this.questions[this.questionsIndex];
    }

    getQuestionsIndex() {
        return this.questionsIndex;
    }

    getQuestionsLength() {
        return this.questions.length;
    }

    setQuestionsIndex() {
        this.questionsIndex++;
    }

    correctAnswer(response) {
        return this.getQuestion().answer == response;
    }

    quizEnd() {
        return this.questions.length == this.questionsIndex;
    }
}
