# web 系のメモ

[web 系のメモ](https://taku-ando.github.io/)

VuePress で生成してる技術ブログ  
何かしら引っかかったところとかのメモ代わり

~~ソースを管理する source ブランチとビルドした結果を管理する master ブランチに分けてます~~

GitHub Pages が指定ブランチの `/docs` 指定で公開できるようになってたので `master` だけ管理するように変更した

```
git clone https://github.com/taku-ando/taku-ando.github.io.git
cd taku-ando.github.io

# dev
yarn && yarn dev

# build
yarn && yarn build
```
