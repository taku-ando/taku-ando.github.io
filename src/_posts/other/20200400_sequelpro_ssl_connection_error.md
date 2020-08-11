---
title: sequel pro のSSL接続がエラーになる
date: 2020-04-01
tags: [SequelPro]
meta:
  - name: keywords
    content: SequelPro
vssue: false
---

# 解決策

SSH鍵(`.pem`)に適切な権限が付与してなかっただけ  
SSH鍵に指定するファイルに `chmod` でOK

```
chmod 600 ~/.ssh/xxx.pem
```

戒め