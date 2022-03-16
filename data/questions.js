import { Question } from "../models/Question.js";
import { data } from "./data.js";

 export const questions = data.map(
  function (question) {
    return new Question(question.question, question.choices, question.answer)}
); 

//PONER DE ALGUNA FORMA RECORRER MAX 10 PREGUNTAS O DEVOLVER SOLO 10.



