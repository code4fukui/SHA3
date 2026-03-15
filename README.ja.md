# SHA3

SHA-3 / Keccak / SHAKE (SHAKE128 / SHAKE256) のハッシュ関数を提供するJavaScript ESモジュール。

## デモ
[SHA3-512 Online](http://emn178.github.io/online-tools/sha3_512.html)  
[SHA3-384 Online](http://emn178.github.io/online-tools/sha3_384.html)  
[SHA3-256 Online](http://emn178.github.io/online-tools/sha3_256.html)  
[SHA3-224 Online](http://emn178.github.io/online-tools/sha3_224.html)  
[Keccak-512 Online](http://emn178.github.io/online-tools/keccak_512.html)  
[Keccak-384 Online](http://emn178.github.io/online-tools/keccak_384.html)  
[Keccak-256 Online](http://emn178.github.io/online-tools/keccak_256.html)  
[Keccak-224 Online](http://emn178.github.io/online-tools/keccak_224.html)  
[Shake128 Online](http://emn178.github.io/online-tools/shake_128.html)  
[Shake256 Online](http://emn178.github.io/online-tools/shake_256.html)  

## 機能
- SHA-3 / Keccak / SHAKE ハッシュアルゴリズムの実装
- 様々な入出力形式に対応(hex, buffer, arrayBuffer, array, digest)
- 可変長出力に対応したSHAKE関数
- カスタマイズできるcSHAKE関数
- 秘密鍵付きのKMAC関数

## 使い方
```js
import { SHAKE128 } from "https://code4fukui.github.io/SHA3/SHAKE128.js";

console.log(SHAKE128.digest("IchigoJam", 256));
```

```js
import { SHAKE256 } from "https://code4fukui.github.io/SHA3/SHAKE256.js";

console.log(SHAKE256.digest("IchigoJam", 256));
```

## ライセンス
MIT