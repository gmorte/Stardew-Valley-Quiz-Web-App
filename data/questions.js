import { Question } from "../models/Question.js";
import { data } from "./data.js";

const newQuestions = data.map(
  function (question) {
    return new Question(question.question, question.choices, question.answer)
  }
);

export const questions = newQuestions.slice(0, 10);





