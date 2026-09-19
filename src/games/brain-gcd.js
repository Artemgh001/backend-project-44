import _ from "lodash";

export function nod() {
  const firstNumber = _.random(0, 100);
  const secondNumber = _.random(0, 100);
  const question = `${firstNumber} ${secondNumber} `;
  const minNumber = _.min([firstNumber, secondNumber]);
  let counter = 1;
  if (firstNumber === 0 || secondNumber === 0) {
    return { correctAnswer: _.max([firstNumber, secondNumber]), question };
  }
  for (let i = 1; i <= minNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      counter = i;
    }
  }
  return { correctAnswer: counter, question };
}
