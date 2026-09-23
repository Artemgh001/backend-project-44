#!/usr/bin/env node
import { run } from "../src/index.js";
import { getCorrectAnswerCalc } from "../src/games/brain-calc.js";

run(getCorrectAnswerCalc, `What is the result of the expression?`);
