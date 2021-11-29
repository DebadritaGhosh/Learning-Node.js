import func from "./moduleSecond.mjs";
import { funcTwo } from "./moduleSecond.mjs";
import * as all from "./moduleSecond.mjs"; // Importing All

func();
funcTwo();

console.log(all.funcOne());