#!/usr/bin/env node
import { run } from "../src/index.js";
import { getEven } from "../src/games/brain-even.js";

run(getEven, `Answer "yes" if the number is even, otherwise answer "no".`);
