import _ from "lodash";

export function haveCorrectAnswerCalc() {
  const mas = ["+", "-", "*"];
  const randomNumb = _.random(0, 2);
  const operand = mas[randomNumb];
  const firstNumber = _.random(1, 100);
  const secondNumber = _.random(1, 100);
  const question = `${firstNumber} ${operand} ${secondNumber}`;
  if (operand === "+") {
    return {
      question,
      correctAnswer: firstNumber + secondNumber,
    };
  } else if (operand === "-") {
    return {
      question,
      correctAnswer: firstNumber - secondNumber,
    };
  } else {
    return {
      question,
      correctAnswer: firstNumber * secondNumber,
    };
  }
}
