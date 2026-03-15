# SHA3

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple SHA-3 / Keccak / Shake (SHAKE128 / SHAKE256) hash ES modules.

## Demo
[SHA3-512 Online](http://emn178.github.io/online-tools/sha3_512.html)  
[SHAKE128 Online](http://emn178.github.io/online-tools/shake_128.html)

## Features
- Supports SHA-3, Keccak, SHAKE128, and SHAKE256 hash functions
- ES module format
- Provides methods for hashing, updating, and finalizing hashes
- Supports different output formats (hex, ArrayBuffer, integer array)

## Usage

```js
import { SHAKE128 } from "https://code4fukui.github.io/SHA3/SHAKE128.js";

console.log(SHAKE128.digest("IchigoJam", 256));
```

```js
import { SHAKE256 } from "https://code4fukui.github.io/SHA3/SHAKE256.js";

console.log(SHAKE256.digest("IchigoJam", 256));
```

## Notice
* v0.8.0+ will throw an error if try to update hash after finalize.
* Sha3 methods have been renamed to keccak since v0.2.0. It means that sha3 methods of v0.1.x are equal to keccak methods of v0.2.x and later.
* `buffer` method is deprecated. Use `arrayBuffer` instead.

## License
MIT