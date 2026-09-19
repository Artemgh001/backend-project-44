import { haveName } from "../src/cli.js";
import readlineSync from "readline-sync";
console.log("Welcome to the Brain Games!");
const user = haveName();
console.log(user.gretting);

export function fc(game, text) {
  let counter = 0;
  console.log(text);
  while (counter < 3) {
    const funn = game();
    console.log(`Question: ${funn.question}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === funn.correctAnswer.toString()) {
      counter += 1;
      console.log("Correct!");
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${funn.correctAnswer}'.\nLet's try again, ${user.name}!`;
    }
  }
  return `Congratulations, ${user.name}!`;
}
