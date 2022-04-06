// 利用hash，场景是当前页面A通过iframe或frame嵌入了跨域的页面B
// 在A中伪代码如下：
var B = document.getElementsByTagName('iframe')
B.src = B.src + '#' + 'data'
// 在B中的伪代码如下
window.onhashchange = function () {
  var data = window.location.hash
}




// postMessage
// 窗口A(http:A.com)向跨域的窗口B(http://B.com)发送信息
Bwindow.postMessage('data', 'http://B.com')
// 在窗口B中监听
Awindow.addEventListener('message', function (event) {
  console.log(event.origin);
  console.log(event.source);
  console.log(event.data);
}, false)


// Websocket
var ws = new WebSocket('wss://echo.websocket.org')

ws.onopen = function (evt) {
  console.log('Connectio open ...');
  ws.send('Hello WebSocket')
}

ws.onmessage = function (evt) {
  console.log('Received Message: ' + evt.data);
}

ws.onclose = function (evt) {
  console.log('Connection closed');
}


// CORS

