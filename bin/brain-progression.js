#!/usr/bin/env node

import { getNullEl } from "../src/games/brain-progression.js";
import { run } from "../src/index.js";

run(getNullEl, "What number is missing in the progression?");
