#!/usr/bin/env node
import { getPrimeNumber } from "../src/games/brain-prime.js";
import { run } from "../src/index.js";

run(
  getPrimeNumber,
  `Answer "yes" if given number is prime. Otherwise answer "no".`,
);
