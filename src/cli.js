import readlineSync from "readline-sync";
export function haveName() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  return { name, gretting: `Hello, ${name}!` };
}
