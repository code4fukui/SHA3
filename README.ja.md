# SHA3

シンプルな SHA-3 / Keccak / Shake (SHAKE128 / SHAKE256) ハッシュのESモジュールです。

## デモ
[SHA3-512 Online](http://emn178.github.io/online-tools/sha3_512.html)  
[SHAKE128 Online](http://emn178.github.io/online-tools/shake_128.html)

## 特徴
- SHA-3、Keccak、SHAKE128、およびSHAKE256ハッシュ関数をサポート
- ESモジュール形式
- ハッシュの生成、更新、確定（finalize）を行うメソッドを提供
- さまざまな出力形式（hex、ArrayBuffer、整数配列）をサポート

## 使い方

```js
import { SHAKE128 } from "https://code4fukui.github.io/SHA3/SHAKE128.js";

console.log(SHAKE128.digest("IchigoJam", 256));
```

```js
import { SHAKE256 } from "https://code4fukui.github.io/SHA3/SHAKE256.js";

console.log(SHAKE256.digest("IchigoJam", 256));
```

## 注意事項
* v0.8.0以降では、finalize後にハッシュを更新（update）しようとするとエラーがスローされます。
* v0.2.0以降、sha3メソッドはkeccakにリネームされました。つまり、v0.1.xのsha3メソッドは、v0.2.x以降のkeccakメソッドと同じものです。
* `buffer`メソッドは非推奨です。代わりに`arrayBuffer`を使用してください。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
