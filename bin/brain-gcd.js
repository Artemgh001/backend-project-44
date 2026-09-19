#!/usr/bin/env node

import { fc } from "../src/index.js";
import { nod } from "../src/games/brain-gcd.js";

console.log(fc(nod, `Find the greatest common divisor of given numbers.`));
