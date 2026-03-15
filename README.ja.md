# SHA3

SHA-3 / Keccak / SHAKE (SHAKE128 / SHAKE256) のハッシュ関数を提供するJavaScript ESモジュール。

## デモ
[SHA3-512 Online](http://emn178.github.io/online-tools/sha3_512.html)  
[SHAKE128 Online](http://emn178.github.io/online-tools/shake_128.html)

## 機能
- SHA-3、Keccak、SHAKE128、SHAKE256のハッシュ関数をサポート
- ES module形式
- ハッシュの更新、最終化をサポするメソッド
- 様々な出力形式に対応(hex, ArrayBuffer, integer array)

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