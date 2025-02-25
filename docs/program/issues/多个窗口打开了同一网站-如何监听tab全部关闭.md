---
title: 多个窗口打开了同一网站，如何监听tab全部关闭
lang: en-US
date: 2023/06/08 00:00:00
editLink: true
categories: 
- 困难冲冲
tags: 
- 需求
---


在应对多个窗口的情况下，可以采用一种更复杂的方案来监听同一网站的tab全部关闭，核心思路是利用BroadcastChannel来进行通信。具体实现步骤如下：

在每个窗口中创建一个BroadcastChannel，并为其绑定一个message事件监听器，用于接收其他窗口发送的消息。

```javascript
const channel = new BroadcastChannel('my-channel');

channel.onmessage = function(event) {
  if (event.data === 'tab-closed') {
    // 有tab关闭
  }
};
```

在每个窗口中添加一个beforeunload事件，当窗口关闭时向其他窗口发送一个消息，表示有一个tab即将关闭。

```javascript
window.addEventListener('beforeunload', function() {
  channel.postMessage('tab-closed');
});
```

统计所有窗口中的tab关闭事件，当所有窗口都接收到了tab-close消息，则表示所有tab都已经关闭。

```javascript
let closedTabs = 0;
const windowCount = window.localStorage.getItem('window-count');

channel.onmessage = function(event) {
  if (event.data === 'tab-closed') {
    closedTabs++;
    if (closedTabs === windowCount) {
      // 所有tab已经关闭
    }
  }
};
```

注意：这种方案需要统计当前所有窗口的数量，在每个窗口中添加相应的代码。另外，需要考虑到窗口的打开和关闭过程中，窗口数量的变化。


在浏览器关闭或页面刷新时，都会触发beforeunload事件。如果需要区分这两种情况，可以利用event对象的属性来进行判断。

当用户关闭浏览器窗口时，event对象的eventType属性会被设置成"unload"。而当用户刷新页面时，eventType属性的值为"beforeunload"。

以下是示例代码：

```javascript
window.addEventListener('beforeunload', function(event) {
    if (event.eventType === 'unload') {
        // 浏览器窗口被关闭
    } else if (event.eventType === 'beforeunload') {
        // 页面被刷新
    }
});
```

需要注意的是，大多数浏览器都不支持在beforeunload事件处理程序中进行异步操作，因为在此期间页面可能已经卸载了。因此，在这个事件处理程序中最好不要进行耗时的操作和网络请求。
