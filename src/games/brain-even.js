import _ from "lodash";

export function haveEven() {
  const randNumb = _.random(0, 100);
  const question = `${randNumb}`;
  if (randNumb % 2 === 0) {
    return { question, correctAnswer: "yes" };
  } else {
    return { question, correctAnswer: "no" };
  }
}
