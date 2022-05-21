import { SHAKE128 } from "./SHAKE128.js";
import { hex } from "https://code4sabae.github.io/js/hex.js";

console.log(SHAKE128.update("IchigoJam", 256).hex());
console.log(hex.fromBin(SHAKE128.digest("IchigoJam", 256)));
