#!/usr/bin/env node

import { haveNullEl } from "../src/games/brain-progression.js";
import { fc } from "../src/index.js";

console.log(fc(haveNullEl, "What number is missing in the progression?"));
