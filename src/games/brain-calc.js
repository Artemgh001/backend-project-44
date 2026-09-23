import _ from "lodash";

export function getCorrectAnswerCalc() {
  const elements = ["+", "-", "*"];
  const randomNumb = _.random(0, 2);
  const operand = elements[randomNumb];
  const firstNumber = _.random(1, 100);
  const secondNumber = _.random(1, 100);
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  switch (operand) {
    case "+":
      return {
        question,
        correctAnswer: firstNumber + secondNumber,
      };

    case "-":
      return {
        question,
        correctAnswer: firstNumber - secondNumber,
      };
    default:
      return {
        question,
        correctAnswer: firstNumber * secondNumber,
      };
  }
}
