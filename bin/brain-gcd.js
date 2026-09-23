#!/usr/bin/env node

import { run } from "../src/index.js";
import { getGcd } from "../src/games/brain-gcd.js";

run(getGcd, `Find the greatest common divisor of given numbers.`);
