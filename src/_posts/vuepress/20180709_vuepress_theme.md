---
title: VuePressにテーマを適用させる その1
date: 2018-07-10
tags: [vuepress@0.x]
meta:
  - name: keywords
    content: vuepress@0.x theme テーマ
vssue: false
---

# vuepressにテーマを適用させる

vuepressの基本のテーマから別のテーマに変えたかったけど日本語のvuepressの情報がない、英語も読めない、こういうジェネレーター自体使ったことないの三重苦で苦戦したので、備忘録

ちなみにこのブログはvuepressで生成しててテーマは[**meteorlxy**](https://github.com/meteorlxy/vuepress-theme-meteorlxy)を使ってます。(すごくいい！)


## 必要なもの

* node.js 8.x以上
* git
* yarn
* mac(windowsは試してないのでわからない)

## テーマ適用して公開するまでのおおまかな道のり

1. githubでアカウント作ってリポジトリまで作成
2. vuepressインストール
3. テーマ適用
4. github pageで公開する

1のgithubで~は飛ばします。


## 2.vuepressインストール

```bash
$ mkdir blog
$ cd blog
```
`blog`の部分は自分の好きなディレクトリ名でいいです。  



```bash
$ yarn add -D vuepress

# インストールが終わったらblogの中身がこんな構成になってると思います.
$ tree -L 1

|-- node_modules
|-- package.json
`-- yarn.lock
```

次にpackage.jsonにscriptsを追加します。
```json
{
  …
  "scripts": {
    "dev": "vuepress dev",
    "build": "vuepress build"
  }
}
```

上の2つ追加すると`yarn dev`でローカルサーバー立ち上げて確認、`yarn build`で静的なファイルをビルドできます。便利！

## ビルドしてみる

早速`yarn build`してみる
```bash
$ yarn build

 WAIT  Extracting site metadata...
[21:28:20] Compiling Client
[21:28:20] Compiling Server
(node:28487) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
[21:28:24] Compiled Server in 4s
[21:28:27] Compiled Client in 7s
 WAIT  Rendering static HTML...

 DONE  Success! Generated static files in .vuepress/dist.

✨  Done in 8.86s.
```

多分こんな感じのログが出てきてファイル生成完了。楽！  
`DONE  Success! Generated static files in .vuepress/dist.`って言ってるので、
blog/.vuepress/dist配下に静的なファイルを生成してくれたみたいです。
ただ、上から順番に進んでると404ページのhtmlだけ生成されてるので寂しい感じに。
試しにblog直下にマークダウンファイルを設置してもう一回ビルドしてみます。

```bash
# README.mdをルートディレクトリ配下に生成
$ echo '# Hello VuePress!' > README.md

# もう一回ビルド
$ yarn build

# ビルドした後はこんな感じでindex.htmlが増えてるはず
# dist
# ├── 404.html
# ├── assets
# └── index.html
```
せっかくなんで生成されたファイルをlocalhostで確認します。

```bash
$ yarn dev
```

上のコマンドを実行するとサーバーが立ち上がるので、[localhost:8080](http://localhost:8080)にアクセス

<img src="/assets/img/localhost_8080_.png">

こんな感じ。


ひとまず2. vuepressインストールはこんな感じ。
3以降の手順はまた。