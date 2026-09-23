import _ from "lodash";

export function getPrimeNumber() {
  const primeNumber = _.random(1, 100);
  let correctAnswer;
  if (primeNumber === 1) {
    return { question: primeNumber, correctAnswer: "no" };
  }
  let counter = primeNumber / 2 - 1;
  let isPrime = true;
  while (counter > 1) {
    if (primeNumber % counter === 0) {
      isPrime = false;
      break;
    }
    counter -= 1;
  }
  if (isPrime === true) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return { question: primeNumber, correctAnswer };
}
