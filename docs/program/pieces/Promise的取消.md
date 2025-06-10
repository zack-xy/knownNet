---
title: Promise的取消
author: Zack Zheng
date: 2025/06/10 10:56
categories:
 - 大海拾遗
tags:
 - 前端
 - Promise
---


```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Promise的取消</title>
</head>

<body>
  <button id="start">Start</button>
  <button id="cancel">Cancel</button>
  <script>
    // 取消promise
    class CancelToken {
      constructor(cancelFn) {
        this.promise = new Promise((resolve, reject) => {
          cancelFn(() => {
            setTimeout(console.log, 0, "delay cancelled")
            resolve()
          })
        })
      }
    }

    const startButton = document.querySelector('#start')
    const cancelButton = document.querySelector('#cancel')

    function cancellableDelayedResolve(delay) {
      setTimeout(console.log, 0, "set delay")

      return new Promise((resolve, reject) => {
        const id = setTimeout(() => {
          setTimeout(console.log, 0, "delayed resolve")
          resolve()
        }, delay)
        // 取消了类实例化的promise
        const cancelToken = new CancelToken((cancelCallback) => cancelButton.addEventListener("click", cancelCallback))
        // 消除了定时，只有定时内有当前promise状态扭转的代码
        // 消除了定时，相当于取消了promise，当前的promise一直是pending
        cancelToken.promise.then(() => clearTimeout(id))
      })
    }

    startButton.addEventListener("click", () => cancellableDelayedResolve(1000))
  </script>
</body>

</html>


```

