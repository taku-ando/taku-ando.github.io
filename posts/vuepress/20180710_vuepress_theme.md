---
title: VuePressにテーマを適用させる その2
layout: post
date: 2018-09-25
tags: [vuepress]
meta:
  - name: keywords
    content: vuepress theme テーマ
---

# VuePressにテーマを適用させる その2

vuepressの基本のテーマから別のテーマに変えたかったけど日本語のvuepressの情報がない、英語も読めない、こういうジェネレーター自体使ったことないの三重苦で苦戦したので、備忘録

ちなみにこのブログはvuepressで生成しててテーマは[**meteorlxy**](https://github.com/meteorlxy/vuepress-theme-meteorlxy)を使ってます。(すごくいい！)

スプラトゥーン２やってたらその１投稿してから2か月経ってた。怖い。  
全ルールS+あたりで停滞してます。Xの道のりは遠い

## テーマのパッケージをインストールする

前回まででvuepressの下準備ができたので、yarnを使って適用したいテーマのパッケージをインストールします。  
今回はこのホームページで使ってる[**vuepress-theme-meteorlxy**](https://github.com/meteorlxy/vuepress-theme-meteorlxy)で進めます

```bash
$ yarn add vuepress-theme-meteorlxy
```

インストールが完了したらテーマを反映するためにconfig.js(vuepressの設定ファイル)を作成します。

```bash
$ touch .vuepress/config.js
```

設定できる内容は[vuepressのリファレンス](https://vuepress.vuejs.org/config/#basic-config)で説明してあるんですが、今回見るのはこっち。  

[:sparkles:https://github.com/meteorlxy/vuepress-theme-meteorlxy:sparkles:](https://github.com/meteorlxy/vuepress-theme-meteorlxy)

ここのreadmeに書いてる設定内容を丸ごとconfig.jsにコピペします。

> As Vuepress doesn't allow themes to access Vuepress's config by now, you have to add extra config in .vupress/config.js of your project.
> Here's the sample config of my own homepage:

まだvuepressではテーマから設定を変更できないからconfig.jsに設定追加してね！ってことらしいです。
ここまできたらひとまずテーマの適用はできてるはずなので、`yarn dev`で確認してみます。

```bash
$ yarn dev
```

<img src="/assets/img/localhost_8082_.png">
できた！！！！


## PostsとAboutページを作成する

テーマを反映させたらPosts(投稿一覧ページ)とかAboutページを作成します。  
追加したパッケージの中に、PostsとAboutページ用のテンプレートが用意されているのでそれに合わせてマークダウンファイルとディレクトリを作成していきます。
ちなみにここで躓きました。

作成する前に確認するのが、`/node_modules/vuepress-theme-meteorlxy/layouts/`配下のvueファイル。ここにあるファイルが各ページのテンプレートになります。それぞれの役割は↓のような感じです。

+ Home.vue   =>   トップページ
+ Page.vue   =>   個別のページ(このページだとAboutページとか)
+ Post.vue   =>   ブログ記事のページ
+ Posts.bue  =>   投稿一覧ページ


### トップページを作る

まずトップページを作ります。ターミナルで参照するディレクトリをルート(`/blog/`)に移動します。
そしてルートディレクトリでindex.mdを作成します。

```bash
$ touch index.md
```

作成したindex.mdに下の内容をコピペ
```md
---
home: true
lang: ja
layout: Home
footer: MIT Licensed | Copyright © 2018-present taku-ando
---

```

Fromt-Matterっていうらしい。[公式のドキュメント](https://vuepress.vuejs.org/default-theme-config/#custom-page-class)にも書いてあったけど他の静的サイトジェネレータを使ったことなかったので存在すら知らず、どうやってレイアウトを適用させるのかさっぱりだった。恥ずかしや。

これの`layout: 〇〇`のところにテンプレートの名前を書きます。トップページなのでHomeですね。

### Aboutページを作る

次はAboutページを作ります。今ターミナルで参照してるルートディレクトリで下のコマンドを実行します。

```bash
$ mkdir about
$ cd about
$ touch index.md
```

今度はaboutディレクトリを作成して、その中にindex.mdを作成しました。

作成したindex.mdに下の内容をコピペします。

```
---
layout: Page
---

# aboutページ
ここには書きたい内容を書いてね！！
```

今度は`layout: Page`を指定します。

ここで一旦画面を確認して見ます。

<img src="/assets/img/localhost_8080_about_.png">

フォントがえらい可愛いことになってるので、ちょっと手直しします。手直しするファイルは`/node_modules/vuepress-theme-meteorlxy/styles/normalize.styl`の12行目のfont-family

```styl
/* これから */
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Heiti SC, Hiragino Sans GB, Microsoft YaHei, Dengxian, Simsun, sans-serif

/* Heiti SCを消してこう */
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Hiragino Sans GB, Microsoft YaHei, Dengxian, Simsun, sans-serif

```

<img src="/assets/img/screenshot_01.png">

よし。

### 投稿一覧ページを作る

続いて投稿一覧ページを作ります。

ターミナルでルートディレクトリに移動してから下のコマンドを実行します。

```bash
$ mkdir posts
$ cd posts
$ touch index.md
```

次に作成したindex.mdに下の内容をコピペ
```
---
title: 投稿一覧
layout: Posts
---
```

`layout: Posts`を指定して、`title`には好きなタイトルを入れます。このブログだと投稿一覧にしてます。

ここまでで各ページの用意ができたので、最後に投稿ページを作ります！


## 記事を投稿する

最後です！もうちょい！

`/posts/`配下に好きな名前でディレクトリを作成します。ここのディレクトリ名がURLの一部になります。サンプルで一個作ってみます。

```bash
$ cd posts
$ mkdir sample
$ cd sample
```
上の例だと、http://localhost:8080/posts/sample/っていうURLになります。

続いてブログの記事を追加します。
```bash
$ touch sample.md
```

ファイル名もURLの一部になります。今回のsample.mdだとhttp://localhost:8080/posts/sample/sample.htmlっていうURLになります。

それでは記事の内容を書いていきます。
```touch.md
---
title: VuePressで初めての投稿
layout: post
date: 2018-09-25
tags: [vuepress]
meta:
  - name: keywords
    content: vuepress theme テーマ
---


# 記事のタイトル
本文とかを好きに描く

```

これで出来上がり。Fromt-Matterの内容はなんとなく察してください。
最後に`yarn dev`してちゃんと反映してるかどうか見て見ましょう。

# 終わり
終わった。

スプラトゥーン2面白いからぜひ皆さんやりましょう。スプラトゥーン2から逃げるな。