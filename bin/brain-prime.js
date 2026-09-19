#!/usr/bin/env node
import { havePrimeNumber } from "../src/games/brain-prime.js";
import { fc } from "../src/index.js";

console.log(
  fc(
    havePrimeNumber,
    `Answer "yes" if number is prime. Otherwise answer "no".`,
  ),
);
