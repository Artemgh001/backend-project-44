#!/usr/bin/env node
import { fc } from "../src/index.js";
import { haveEven } from "../src/games/brain-even.js";
console.log(
  fc(haveEven, `Answer "yes" if the number is even, otherwise answer "no".`),
);
