#!/usr/bin/env node
import { fc } from "../src/index.js";
import { haveCorrectAnswerCalc } from "../src/games/brain-calc.js";

console.log(fc(haveCorrectAnswerCalc, `What is the result of the expression?`));
