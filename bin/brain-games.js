#!/usr/bin/env node

import { haveName } from "../src/cli.js";
const greet = haveName();
console.log(greet.gretting);
