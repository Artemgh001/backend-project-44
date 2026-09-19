import _ from "lodash";

export function havePrimeNumber() {
  const primeNumber = _.random(1, 100);
  if (primeNumber === 1) {
    return { question: primeNumber, correctAnswer: "no" };
  }
  let correctAnswer = "";
  let counter = primeNumber / 2 - 1;
  let bol = true;
  while (counter > 1) {
    if (primeNumber % counter === 0) {
      bol = false;
      break;
    }
    counter -= 1;
  }
  if (bol === true) {
    correctAnswer = "yes";
  } else {
    correctAnswer = "no";
  }
  return { question: primeNumber, correctAnswer };
}
