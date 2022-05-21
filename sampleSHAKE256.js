import { SHAKE256 } from "./SHAKE256.js";
import { hex } from "https://code4sabae.github.io/js/hex.js";

console.log(SHAKE256.update("IchigoJam", 256).hex());
console.log(hex.fromBin(SHAKE256.digest("IchigoJam", 256)));
