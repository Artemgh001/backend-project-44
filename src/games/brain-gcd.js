import _ from "lodash";

export function getGcd() {
  let firstNumber = _.random(1, 100);
  let secondNumber = _.random(1, 100);
  const question = `${firstNumber} ${secondNumber} `;
  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber = firstNumber % secondNumber;
    } else {
      secondNumber = secondNumber % firstNumber;
    }
  }

  return { correctAnswer: firstNumber + secondNumber, question };
}
