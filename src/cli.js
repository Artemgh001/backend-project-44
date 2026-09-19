import readlineSync from "readline-sync";
export function haveName() {
  const name = readlineSync.question("May I have your name? ");
  return { name, gretting: `Hello, ${name}!` };
}
