import { getName } from "./cli.js";
import readlineSync from "readline-sync";

export function run(game, text) {
  console.log("Welcome to the Brain Games!");
  const user = getName();
  console.log(user.greeting);
  let counter = 0;
  console.log(text);
  while (counter < 3) {
    const roundData = game();
    console.log(`Question: ${roundData.question}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === roundData.correctAnswer.toString()) {
      counter += 1;
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${roundData.correctAnswer}'.\nLet's try again, ${user.name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${user.name}!`);
}
