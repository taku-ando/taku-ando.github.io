(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{449:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前書き"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前書き"}},[a._v("#")]),a._v(" 前書き")]),a._v(" "),t("p",[a._v("ある日ふとiOSアプリを作ってみたいと思ってしまった。ただPHPとJavaScriptぐらいしかまともに触った事ないので、なんとなくググってたらいいのがあった")]),a._v(" "),t("p",[a._v("＿人人人人人人人＿"),t("br"),a._v("\n＞　ReactNative　＜"),t("br"),a._v("\n￣Y^Y^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("blockquote",[t("p",[a._v("React Native は、Facebook社が開発・公開しているネイティブアプリのクロスプラットフォーム開発フレームワークです。 言語としてJavaScriptを使用し、React.jsを触ったことがある人であれば気軽にモバイルアプリ開発を始められます。")])]),a._v(" "),t("p",[a._v("なんか凄い！！これしかない！！Reactほぼ知らんけど調べりゃなんとかなるでしょ！！！")]),a._v(" "),t("p",[a._v("ちなみに解説ではない(出来ない)ので、詳しいことは他で調べてね！")]),a._v(" "),t("h2",{attrs:{id:"なにを作るのか"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#なにを作るのか"}},[a._v("#")]),a._v(" なにを作るのか")]),a._v(" "),t("p",[a._v("手元にあるmacとiPhone8+"),t("br"),a._v("\n自分用のikaWidget欲しい。欲しくない？自分用にカスタマイズした記録アプリ欲しい")]),a._v(" "),t("h3",{attrs:{id:"ikawidgetとは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ikawidgetとは"}},[a._v("#")]),a._v(" ikaWidgetとは")]),a._v(" "),t("p",[a._v("スプラトゥーン2専用のバトルの履歴を確認できるアプリ"),t("br"),a._v("\n不満はない"),t("s",[a._v("けど作りたいもののネタが全く思いつかなかった")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"環境を整える"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#環境を整える"}},[a._v("#")]),a._v(" 環境を整える")]),a._v(" "),t("p",[a._v("まずは開発環境、このQiitaの記事が良さげなので、これをみながら整える\nhttps://qiita.com/YutamaKotaro/items/dd7846c6db15e2307daa")]),a._v(" "),t("h3",{attrs:{id:"xcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xcode"}},[a._v("#")]),a._v(" xcode")]),a._v(" "),t("p",[a._v("5ギガあるからダウンロード中に他の作業を進める")]),a._v(" "),t("h3",{attrs:{id:"nodebrew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodebrew"}},[a._v("#")]),a._v(" nodebrew")]),a._v(" "),t("p",[a._v("前に入れたはず。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nodebrew "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\nbash: nodebrew: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" not found\n")])])]),t("p",[a._v("＿人人人人人人人人人人人人＿"),t("br"),a._v("\n＞　はいってない！！！！　＜"),t("br"),a._v("\n￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("p",[a._v("ググって見つけたQiitaのページを参考にしながらnodeとnpmを削除する"),t("br"),a._v("\n参考：https://qiita.com/tabolog/items/da18143e70f40e356b5d")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("read")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" /usr/local/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${i}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf /usr/local/lib/node "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     /usr/local/lib/node_modules "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n     /var/db/receipts/org.nodejs.*\n     \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.npm\n")])])]),t("p",[a._v("この時点で"),t("code",[a._v("node")]),a._v("がまだ認識されてるのでhomebrew使って削除")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ brew uninstall node\n")])])]),t("h3",{attrs:{id:"nodebrew-再"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodebrew-再"}},[a._v("#")]),a._v(" nodebrew(再)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nodebrew\n\nxcrun: error: invalid active developer path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/Library/Developer/CommandLineTools"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun\nError: Failure "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" executing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --local --replace-all homebrew.analyticsmessage "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" exited with "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".\nxcrun: error: invalid active developer path "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/Library/Developer/CommandLineTools"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun\nError: Failure "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" executing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --local --replace-all homebrew.private "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" exited with "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".\n")])])]),t("p",[a._v("めっちゃエラーでるやん...\nCommandLineToolsもなんか入れたような記憶があるけど、全てが曖昧...")]),a._v(" "),t("p",[a._v("とりあえずxcodeダウンロード待とう。。")]),a._v(" "),t("h3",{attrs:{id:"nodebrew-再-再"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodebrew-再-再"}},[a._v("#")]),a._v(" nodebrew(再)(再)")]),a._v(" "),t("p",[a._v("xcodeのダウンロード終わったので、再々チャレンジ")]),a._v(" "),t("p",[a._v("＿人人人人人人人＿"),t("br"),a._v("\n＞　いけた！！！　＜"),t("br"),a._v("\n￣Y^Y^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("p",[a._v("いつからかxcodeダウンロードすると一緒にCmmandLineToolsも一緒にインストールされるようになったらしく、手間が省けた！！")]),a._v(" "),t("h2",{attrs:{id:"nodebrew関連の環境変数を設定-nodeインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodebrew関連の環境変数を設定-nodeインストール"}},[a._v("#")]),a._v(" nodebrew関連の環境変数を設定&nodeインストール")]),a._v(" "),t("p",[a._v("参考：https://qiita.com/tabolog/items/da18143e70f40e356b5d")]),a._v(" "),t("p",[a._v("ここら辺は全部上のページみながらやったら大丈夫そう。\nありがたや・・・")]),a._v(" "),t("p",[a._v("nodeのバージョンはLTSのv10.13.0いれた。現時点(2018/10/31)でv11.0.0があったけどとりあえずは。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nodebrew install-binary v10.13.0\n$ nodebrew use v10.13.0\n$ node -v\nv10.13.0\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" -v\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.4")]),a._v(".1\n")])])]),t("p",[a._v("おk")]),a._v(" "),t("h2",{attrs:{id:"watchmanインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watchmanインストール"}},[a._v("#")]),a._v(" watchmanインストール")]),a._v(" "),t("p",[a._v("書いてないけど最初の方でエラー出まくったのでこれも(再)")]),a._v(" "),t("img",{attrs:{src:"/assets/img/screenshot_02.png"}}),a._v(" "),t("p",[a._v("＿人人人人人人人＿"),t("br"),a._v("\n＞　いけた！！！　＜"),t("br"),a._v("\n￣Y^Y^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("p",[a._v("ここまで成果0 Allエラーだったから普通に嬉しい！！！")]),a._v(" "),t("h2",{attrs:{id:"reactnativeインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactnativeインストール"}},[a._v("#")]),a._v(" ReactNativeインストール")]),a._v(" "),t("h3",{attrs:{id:"インストールする"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストールする"}},[a._v("#")]),a._v(" インストールする")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g react-native-cli\n\n")])])]),t("h3",{attrs:{id:"プロジェクト生成する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#プロジェクト生成する"}},[a._v("#")]),a._v(" プロジェクト生成する")]),a._v(" "),t("p",[a._v("適当に作業用ディレクトリ作ってコマンド")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("react-native init sample\n")])])]),t("p",[a._v("生成したら"),t("code",[a._v("sample/ios/sample.xcodeproj")]),a._v("を開く"),t("br"),a._v("\nXcodeが立ち上がるから左上のRunボタン押す"),t("br"),a._v("\nビルド始まる")]),a._v(" "),t("h2",{attrs:{id:"ビルド出来ない"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ビルド出来ない"}},[a._v("#")]),a._v(" ビルド出来ない")]),a._v(" "),t("img",{attrs:{src:"/assets/img/cs_20181031_2.png"}}),a._v(" "),t("p",[a._v("＿人人人人人人人人人人人人人人＿"),t("br"),a._v("\n＞　またエラーやんけ！！！　＜"),t("br"),a._v("\n￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("p",[a._v("全部node-modules/react-native/third-party/double-conversion-1.1.6/src/*.cc関連のファイルがないエラー")]),a._v(" "),t("p",[a._v("調べたらissuesあった\nhttps://github.com/facebook/react-native/issues/21168")]),a._v(" "),t("p",[a._v("xcode10で出てるエラーっぽい")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" node_modules/react-native/scripts "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" ./ios-install-third-party.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" node_modules/react-native/third-party/glog-0.3.5/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/scripts/ios-configure-glog.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/\n")])])]),t("p",[a._v("して、")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("react-native run-ios\n")])])]),t("p",[a._v("＿人人人人人人人人人＿"),t("br"),a._v("\n＞　うご！いた！！　＜"),t("br"),a._v("\n￣Y^YY^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("img",{attrs:{src:"/assets/img/cs_20181031_1.png"}}),a._v(" "),t("p",[a._v("＿人人人人人人人人人＿"),t("br"),a._v("\n＞　HelloWorld！！　＜"),t("br"),a._v("\n￣Y^YY^Y^Y^Y^Y^Y^￣")]),a._v(" "),t("h2",{attrs:{id:"一旦区切る"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一旦区切る"}},[a._v("#")]),a._v(" 一旦区切る")]),a._v(" "),t("p",[a._v("エラー数でトロコン出来そうな勢いだった")])])}),[],!1,null,null,null);s.default=n.exports}}]);