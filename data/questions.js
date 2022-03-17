import { Question } from "../models/Question.js";
import { data, fisherYatesShuffle } from "./data.js";

const newQuestions = data.map(
  function (question) {
    return new Question(question.question, question.choices, question.answer)
  }
);

fisherYatesShuffle(newQuestions);

export const questions = newQuestions.slice(0, 10);





