---
title: storybook v5がうまく動かなかった
date: 2019-07-11
tags: [React, storybook]
meta:
  - name: keywords
    content: storybook
vssue: false
---

## 環境

create-react-app した後に sotrybookv5 入れたらうまく動かなかった

```
"@storybook/addon-actions": "^5.1.9",
"@storybook/addon-links": "^5.1.9",
"@storybook/addons": "^5.1.9",
"@storybook/cli": "^5.1.9",
"@storybook/react": "^5.1.9",
```

## エラーの内容

```bash
$ yarn add -D @storybook/cli
$ yarn sb init
$ yarn run storybook
yarn run v1.7.0
$ start-storybook -p 9009 -s public
info @storybook/react v5.1.9
info
info => Loading static files from: /Users/taku-ando/Documents/*****/public .
info => Loading presets
WARN   Failed to load preset: "/Users/taku-ando/Documents/******/node_modules/@storybook/core/dist/server/manager/manager-preset.js"
ERR! Error: Cannot find module '../internals/array-methods'
ERR!     at Function.Module._resolveFilename (module.js:548:15)
ERR!     at Function.Module._load (module.js:475:25)
ERR!     at Module.require (module.js:597:17)
ERR!     at require (internal/module.js:11:18)...
```

## 解消方法

これ

https://github.com/storybookjs/storybook/issues/6984

`yarn add -D core-js@^2.5.7`した後に`yarn run start`したらうまくいった

```bash
$ yarn add -D core-js@^2.5.7
$ yarn storybook
yarn run v1.7.0
$ start-storybook -p 9009 -s public
info @storybook/react v5.1.9
info
info => Loading static files from: /Users/taku-ando/Documents/*****/public .
info => Loading presets
info => Loading presets
info => Loading custom addons config.
info => Using default webpack setup.
info => Loading create-react-app config.
webpack built 56fbcc1923d89e17e878 in 9307ms
```
