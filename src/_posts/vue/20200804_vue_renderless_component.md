---
title: Vue.jsのレンダーレスコンポーネント
date: 2020-08-04
tags: [Vue]
meta:
  - name: keywords
    content: Vue
vssue: false
---

- いろんな場所で使い回すステートを分離して使い回す
- ステートの管理以外は何もしない


## ステートを管理するコンポーネントを実装する 1

### カウントを保持するコンポーネント 1

```vue
<!-- CounterState.vue -->
<script>
export default {
  name: "counterState",
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    // カウントアップする
    increment() {
      ++this.count;
    },
    // カウントをリセットする
    reset() {
      this.count = 0;
    }
  },
  render() {
    return this.$scopedSlots.default({
      count: this.count,
      increment: this.increment,
      reset: this.reset,
    });
  },
}
</script>

```

- 通常の `.vue` ファイルと同じように `<script>` を書く
- `render()` で `this.$scopedSlots.default` を返す
- `this.$scopedSlots.default` の引数に扱いたい `methods` や `data` を渡す 

### 使い方 2

```vue
<!-- example.vue -->
<template>
  <!-- v-slotでrenderから返した値を指定する -->
  <CounterState
    v-slot="{
      count,
      increment,
      reset
    }"
  >
    <!-- dataを表示する -->
    <p>{{ count }}</p>
    <!-- methodsを使う -->
    <button @click="countUp(increment)">+1する</button>
    <button @click="countReset(reset)">リセットする</button>
  </CounterState>
</template>

<script>
export default {
  name: "Example",
  components: {
    CounterState: () => import("./CounterState"),
  },
  methods: {
    // 引数で渡されたCounterState.vueのincrementを実行
    countUp(increment) {
      increment();
    },
    // 引数で渡されたCounterState.vueのresetを実行
    countReset(reset) {
      reset();  
    }
  }
}
</script>
```

- `<CounterState />` の `v-slot` で使いたいデータやメソッドを指定する
- `CounterState` の関数を引数に渡して実行する



### カウントを保持するコンポーネント 2

computedやpropsを足す

```vue
<!-- CounterState.vue -->
<script>
export default {
  name: "counterState",
  props: {
    // カウントの最大値
    max: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    // カウントアップする
    increment() {
      ++this.count;
    },
    // カウントをリセットする
    reset() {
      this.count = 0;
    }
  },
  computed: {
    // maxに対するcountの割合
    percent() {
      if (this.count <= 0) return 0
      return Math.floor((this.count / this.max) * 100)
    },
  },
  render() {
    return this.$scopedSlots.default({
      count: this.count,
      increment: this.increment,
      reset: this.reset,
      percent: this.percent,
    });
  },
}
</script>
```

書き方は一緒

### 使い方 2

```vue
<!-- example.vue -->
<template>
  <!-- v-slotでrenderから返した値を指定する -->
  <!-- propsを :max で指定する -->
  <CounterState
    v-slot="{
      count,
      increment,
      reset,
      percent,
    }"
    :max="10"
  >
    <!-- dataを表示する -->
    <p>{{ count }}</p>
    <!-- computedを表示する -->
    <p>{{ percent }}%</p>
    <!-- methodsを使う -->
    <button @click="countUp(increment)">+1する</button>
    <button @click="countReset(reset)">リセットする</button>
  </CounterState>
</template>

<script>
export default {
  name: "Example",
  components: {
    CounterState: () => import("./CounterState"),
  },
  methods: {
    // 引数で渡されたCounterState.vueのincrementを実行
    countUp(increment) {
      increment();
    },
    // 引数で渡されたCounterState.vueのresetを実行
    countReset(reset) {
      reset();  
    }
  }
}
</script>
```