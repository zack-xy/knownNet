---
title: 监听pushState和replaceState事件
lang: en-US
date: 2023/02/21 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
---

#### 监听pushState和replaceState事件

```js
const bindEventListener = function (type) {
  const historyEvent = history[type]
  return function () {
    const newEvent = historyEvent.apply(this, arguments)
    const e = new Event(type)
    e.arguments = arguments
    window.dispatchEvent(e)
    return newEvent
  }
}
history.pushState = bindEventListener('pushState')
history.replaceState = bindEventListener('replaceState')
```

```js
window.addEventListener('replaceState', (e) => {
  console.log('THEY DID IT AGAIN! replaceState')
})
window.addEventListener('pushState', (e) => {
  console.log('THEY DID IT AGAIN! pushState')
})
```
