---
title: nuxtでlodashをいい感じに読み込む
date: 2020-03-01
tags: [Nuxt, lodash]
meta:
  - name: keywords
    content: Nuxt, lodash
vssue: false
---

# nuxtでlodashをいい感じに読み込む

参考:[GitHub - lodash/lodash-webpack-plugin: Smaller modular Lodash builds.](https://github.com/lodash/lodash-webpack-plugin)

普通に使うとデカすぎモジュールが爆誕してしまう lodash くんを `lodash-webpack-plugin` と `babel-lodash-plugin` でtree shakingする

## 使い方

```bash
yarn add --dev lodash-webpack-plugin babel-plugin-lodash
```

nuxt.config.jsのbuildに追記
```js
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

export default {
  build: {
    plugins: [
      new LodashModuleReplacementPlugin()
    ],
    babel: {
      plugins: ['lodash']
    }
  }
}
```

これでimport方法に縛り無しでtree shakingしてくれる＆`nuxt.config.js`更新するだけで良いので楽

```js
// OK
import _ from "lodash"

// OK
import { get } from "lodash"

// OK
import get from "lodash/get"
```

## オプション

一部の関数は個別にオプションの指定が必要なので注意
オプションの一覧はここ[GitHub - lodash/lodash-webpack-plugin: Smaller modular Lodash builds.](https://github.com/lodash/lodash-webpack-plugin#feature-sets)

例えば`_.get(obj, 'hoge')`はオプション不要だけど`_.get(obj, 'hoge.fuga')`みたいに直下のプロパティ以外を取得する場合はオプション付けないと意図した動作にならないので注意

nuxt.config.js
```js
// _.get(obj, 'hoge.fuga')したい場合
export default {
  build: {
    plugins: [
      new LodashModuleReplacementPlugin({
        // ここに必要なオプションを書く
        paths: true
      })
    ],
    babel: {
      plugins: ['lodash']
    }
  }
}
```

## おわり

各ファイルのサイズを可視化して気持ちよくなる

```bash
yarn build --analyze
# .nuxt/stats/client.htmlが生成される
```