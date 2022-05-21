import { SHA3 } from "./SHA3.js";

console.log(SHA3.shake128.update("ichigojam", 256).hex());
