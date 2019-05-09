---
title: VuePressにdisqus導入してコメント機能つけた
layout: post
date: 2018-09-26
tags: [vuepress, disqus]
meta:
  - name: keywords
    content: vuepress disqus
---

# VuePressにdisqus導入した

せっかくのブログ(個人メモ)作ったし、せっかくなのでコメント機能つけてそれっぽくしたかった。そこでよく見かけるdisqusを導入してみたお話。

disqusのアカウント登録は取得済みの前提で、メモ感覚で書きます。

# 手順

## disqusからJSのコードとか取ってくる

disqusにログインしてSettings > Installation > Universal Codeのボタンクリックの順にページ移動する

<img src="/assets/img/disqus_01.png">

ページを開いたら下のコードをどこかに取っておく
```js
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://YOUR_ID.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

```


## コンポーネントを作る
`/.vuepress/components/`配下にPostDisqus.vueファイルを作成する。内容はこのページを参考にさせてもらいました！

https://k33g.gitlab.io/articles/2018-07-02-DISQUS.html

``` vue
<template>
  <div id="disqus_thread"></div>
</template>
<script>
export default {
  name: 'PostDisqus',
  mounted() {
    var disqus_config = function () {
      this.page.url = window.location.origin;  
      this.page.identifier = window.location.pathname; 
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://YOUR_ID.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
}
</script>
```
さっき取ってきたJSの一部をmountedに書く感じです。  
`s.src = https://YOUR_ID.disqus.com/embed.js`のYOUR_IDの部分は自分のIDに書き換えてください。


## 投稿ページのテンプレートにコンポーネントを突っ込む

自分が使ってるテーマだとlayouts/Post.vueが投稿ページのテンプレートなので、このファイルを編集します。これは使ってるテーマによって違うと思うので、いい感じにしましょう。

変更した内容は下の感じです。

```vue
<template>
  <article class="post">
    <PostMeta/>

    <Content
      :key="$page.path"
      class="post-content markdown-body"/>
    <!-- ここにコンポーネントを挿入する -->
    <PostDisqus/>
    <PostMeta/>

  </article>
</template>

<script>
/* ここでコンポーネントをimport */
import PostDisqus from '@theme/components/PostDisqus'
import PostMeta from '@theme/components/PostMeta'
export default {
  name: 'Post',
  components: {
    PostMeta,
    // ここにもコンポーネント名を追加
    PostDisqus
  }
}
</script>
```

これで投稿ページの全ページにdisqusのコメント機能が使えるようになった。よかった。
<img src="/assets/img/disqus_02.png">

## 終わり

あとはcss編集するなりなんなりで、いい感じにできればいいなと思います。disqusでコメントした事ない方はこのページにテストとか書いてもらって大丈夫です。
