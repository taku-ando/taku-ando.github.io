(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vuepressにdisqus導入した"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepressにdisqus導入した","aria-hidden":"true"}},[t._v("#")]),t._v(" VuePressにdisqus導入した")]),a("p",[t._v("せっかくのブログ(個人メモ)作ったし、せっかくなのでコメント機能つけてそれっぽくしたかった。そこでよく見かけるdisqusを導入してみたお話。")]),a("p",[t._v("disqusのアカウント登録は取得済みの前提で、メモ感覚で書きます。")]),a("h1",{attrs:{id:"手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手順","aria-hidden":"true"}},[t._v("#")]),t._v(" 手順")]),a("h2",{attrs:{id:"disqusからjsのコードとか取ってくる"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disqusからjsのコードとか取ってくる","aria-hidden":"true"}},[t._v("#")]),t._v(" disqusからJSのコードとか取ってくる")]),a("p",[t._v("disqusにログインしてSettings > Installation > Universal Codeのボタンクリックの順にページ移動する")]),a("img",{attrs:{src:"/assets/img/disqus_01.png"}}),a("p",[t._v("ページを開いたら下のコードをどこかに取っておく")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("  "),a("span",{attrs:{class:"token constant"}},[t._v("LEARN")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("WHY")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("DEFINING")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("THESE")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("VARIABLES")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("IS")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("IMPORTANT")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("disqus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("universalcode"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("#configuration"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("variables"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/*\nvar disqus_config = function () {\nthis.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable\nthis.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable\n};\n*/")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// DON'T EDIT BELOW THIS LINE")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'script'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://YOUR_ID.disqus.com/embed.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data-timestamp'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("noscript"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Please enable JavaScript to view the "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"https://disqus.com/?ref_noscript"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("comments powered by Disqus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("noscript"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"コンポーネントを作る"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#コンポーネントを作る","aria-hidden":"true"}},[t._v("#")]),t._v(" コンポーネントを作る")]),a("p",[a("code",[t._v("/.vuepress/components/")]),t._v("配下にPostDisqus.vueファイルを作成する。内容はこのページを参考にさせてもらいました！")]),a("p",[t._v("https://k33g.gitlab.io/articles/2018-07-02-DISQUS.html")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("disqus_thread"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'PostDisqus'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("disqus_config")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("origin"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("identifier "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// DON'T EDIT BELOW THIS LINE")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'script'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://YOUR_ID.disqus.com/embed.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      s"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data-timestamp'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("さっき取ってきたJSの一部をmountedに書く感じです。"),a("br"),a("code",[t._v("s.src = https://YOUR_ID.disqus.com/embed.js")]),t._v("のYOUR_IDの部分は自分のIDに書き換えてください。")]),a("h2",{attrs:{id:"投稿ページのテンプレートにコンポーネントを突っ込む"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#投稿ページのテンプレートにコンポーネントを突っ込む","aria-hidden":"true"}},[t._v("#")]),t._v(" 投稿ページのテンプレートにコンポーネントを突っ込む")]),a("p",[t._v("自分が使ってるテーマだとlayouts/Post.vueが投稿ページのテンプレートなので、このファイルを編集します。これは使ってるテーマによって違うと思うので、いい感じにしましょう。")]),a("p",[t._v("変更した内容は下の感じです。")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("article")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PostMeta")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v(":key")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$page.path"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post-content markdown-body"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- ここにコンポーネントを挿入する --\x3e")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PostDisqus")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PostMeta")]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("article")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("/* ここでコンポーネントをimport */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PostDisqus "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@theme/components/PostDisqus'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PostMeta "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@theme/components/PostMeta'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Post'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    PostMeta"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// ここにもコンポーネント名を追加")]),t._v("\n    PostDisqus\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("これで投稿ページの全ページにdisqusのコメント機能が使えるようになった。よかった。\n"),a("img",{attrs:{src:"/assets/img/disqus_02.png"}})]),a("h2",{attrs:{id:"終わり"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#終わり","aria-hidden":"true"}},[t._v("#")]),t._v(" 終わり")]),a("p",[t._v("あとはcss編集するなりなんなりで、いい感じにできればいいなと思います。disqusでコメントした事ない方はこのページにテストとか書いてもらって大丈夫です。")])])}],!1,null,null,null);s.default=o.exports}}]);