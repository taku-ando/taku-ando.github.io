---
title: ReactNative を使ってiOSアプリを作るまでの日記その1
layout: post
date: 2018-10-31
tags: [ReactNative,react,雑記]
meta:
  - name: keywords
    content: reactNative react
---

## 前書き
ある日ふとiOSアプリを作ってみたいと思ってしまった。ただPHPとJavaScriptぐらいしかまともに触った事ないので、なんとなくググってたらいいのがあった

＿人人人人人人人＿  
＞　ReactNative　＜  
￣Y^Y^Y^Y^Y^Y^Y^￣  

>React Native は、Facebook社が開発・公開しているネイティブアプリのクロスプラットフォーム開発フレームワークです。 言語としてJavaScriptを使用し、React.jsを触ったことがある人であれば気軽にモバイルアプリ開発を始められます。

なんか凄い！！これしかない！！Reactほぼ知らんけど調べりゃなんとかなるでしょ！！！

ちなみに解説ではない(出来ない)ので、詳しいことは他で調べてね！


## なにを作るのか

手元にあるmacとiPhone8+  
自分用のikaWidget欲しい。欲しくない？自分用にカスタマイズした記録アプリ欲しい

### ikaWidgetとは

スプラトゥーン2専用のバトルの履歴を確認できるアプリ  
不満はない~~けど作りたいもののネタが全く思いつかなかった~~。


## 環境を整える

まずは開発環境、このQiitaの記事が良さげなので、これをみながら整える
https://qiita.com/YutamaKotaro/items/dd7846c6db15e2307daa

### xcode
5ギガあるからダウンロード中に他の作業を進める


### nodebrew

前に入れたはず。

``` bash
$ nodebrew help
bash: nodebrew: command not found
```

＿人人人人人人人人人人人人＿    
＞　はいってない！！！！　＜    
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣    



ググって見つけたQiitaのページを参考にしながらnodeとnpmを削除する  
参考：https://qiita.com/tabolog/items/da18143e70f40e356b5d



``` bash
$ lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom \
| while read i; do
  sudo rm /usr/local/${i}
done
sudo rm -rf /usr/local/lib/node \
     /usr/local/lib/node_modules \
     /var/db/receipts/org.nodejs.*
     
$ sudo rm -rf ~/.npm
```

この時点で`node`がまだ認識されてるのでhomebrew使って削除

``` bash
$ brew uninstall node
```

### nodebrew(再)

```bash
$ brew install nodebrew

xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
Error: Failure while executing; `git config --local --replace-all homebrew.analyticsmessage true` exited with 1.
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
Error: Failure while executing; `git config --local --replace-all homebrew.private true` exited with 1.
```

めっちゃエラーでるやん...
CommandLineToolsもなんか入れたような記憶があるけど、全てが曖昧...

とりあえずxcodeダウンロード待とう。。



### nodebrew(再)(再)

xcodeのダウンロード終わったので、再々チャレンジ


＿人人人人人人人＿  
＞　いけた！！！　＜  
￣Y^Y^Y^Y^Y^Y^Y^￣  

いつからかxcodeダウンロードすると一緒にCmmandLineToolsも一緒にインストールされるようになったらしく、手間が省けた！！

## nodebrew関連の環境変数を設定&nodeインストール

参考：https://qiita.com/tabolog/items/da18143e70f40e356b5d

ここら辺は全部上のページみながらやったら大丈夫そう。
ありがたや・・・

nodeのバージョンはLTSのv10.13.0いれた。現時点(2018/10/31)でv11.0.0があったけどとりあえずは。

```bash
$ nodebrew install-binary v10.13.0
$ nodebrew use v10.13.0
$ node -v
v10.13.0
$ npm -v
6.4.1
```

おk

## watchmanインストール

書いてないけど最初の方でエラー出まくったのでこれも(再)

<img src="/assets/img/screenshot_02.png">

＿人人人人人人人＿  
＞　いけた！！！　＜   
￣Y^Y^Y^Y^Y^Y^Y^￣  

ここまで成果0 Allエラーだったから普通に嬉しい！！！


## ReactNativeインストール

### インストールする

```bash
npm install -g react-native-cli

```

### プロジェクト生成する

適当に作業用ディレクトリ作ってコマンド

```bash
react-native init sample
```

生成したら```sample/ios/sample.xcodeproj```を開く  
Xcodeが立ち上がるから左上のRunボタン押す  
ビルド始まる

## ビルド出来ない

<img src="/assets/img/cs_20181031_2.png">


＿人人人人人人人人人人人人人人＿  
＞　またエラーやんけ！！！　＜  
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣  

全部node-modules/react-native/third-party/double-conversion-1.1.6/src/*.cc関連のファイルがないエラー

調べたらissuesあった
https://github.com/facebook/react-native/issues/21168

xcode10で出てるエラーっぽい

```bash
$ cd node_modules/react-native/scripts && ./ios-install-third-party.sh && cd ../../../
$ cd node_modules/react-native/third-party/glog-0.3.5/ && ../../scripts/ios-configure-glog.sh && cd ../../../../
```

して、

```bash
react-native run-ios
```

＿人人人人人人人人人＿  
＞　うご！いた！！　＜  
￣Y^YY^Y^Y^Y^Y^Y^￣  


<img src="/assets/img/cs_20181031_1.png">


＿人人人人人人人人人＿  
＞　HelloWorld！！　＜  
￣Y^YY^Y^Y^Y^Y^Y^￣  


## 一旦区切る

エラー数でトロコン出来そうな勢いだった