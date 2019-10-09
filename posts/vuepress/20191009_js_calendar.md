---
title: jsでカレンダーっぽい配列を作る
layout: post
date: 2019-10-09
tags: [JavaScript]
meta:
  - name: keywords
    content: javascript calendar
---

## js でカレンダーっぽい配列を作る

特に使い道は思いつかないけどスプレッド演算子と Array.prototype の関数もりもりでカレンダーっぽい二次元配列を作る

```js
const calendarArray = (year, month) => {
  const date = new Date(year, month - 1, 1)
  const firstWeekday = date.getDay()

  date.setMonth(month)
  date.setDate(0)
  const lastDay = date.getDate()
  const lastWeekday = date.getDay()

  const beforeDays = Array(firstWeekday).fill('')
  const days = [...Array(lastDay)].map((_, i) => (i + 1).toString())
  const afterDays = Array(6 - lastWeekday).fill('')

  return [...beforeDays, ...days, ...afterDays].reduce((acc, day, i) => {
    const weekNumber = ~~(i / 7)
    acc[weekNumber] =
      acc[weekNumber] === undefined ? [day] : [...acc[weekNumber], day]
    return acc
  }, [])
}
```

2019 年 10 月でやった結果はこう
<img src="/assets/img/sc_20191009.png">

## 補足

### 月末の最終日を取得する

```js
date.setMonth(month)
date.setDate(0)
const lastDay = date.getDate()
const lastWeekday = date.getDay()
```

`date.setDate(0)`で最終日が取れる

### 指定数の空文字の配列を生成する

```js
const beforeDays = Array(firstWeekday).fill('')
```

### 指定した数値までの連番の配列を作る

```js
const days = [...Array(lastDay)].map((_, i) => (i + 1).toString())
```

`[...Array(lastDay)].map()`で月末の日付と同じ数だけ map  
`Array(lastDay).map()`だとそもそも動かないからスプレッド演算子で展開するの大事！あとは map のコールバックに渡す第二引数のインデックスを返せば連番の配列の出来上がり(1 始まりだから+1)

### 1 週間ごとに配列を分割

```js
return [...beforeDays, ...days, ...afterDays].reduce((acc, day, i) => {
  const weekNumber = ~~(i / 7)
  acc[weekNumber] =
    acc[weekNumber] === undefined ? [day] : [...acc[weekNumber], day]
  return acc
}, [])
```

- `[...beforeDays, ...days, ...afterDays]`で配列を結合
- `const weekNumber = ~~(i / 7)`で週の番号を取得
  - `~~`で小数点以下は切り捨て

## おわり
