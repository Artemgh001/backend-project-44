#!/usr/bin/env node

import { haveName } from "../src/cli.js";
const greet = haveName();
console.log("Welcome to the Brain Games!");
console.log(greet.gretting);
