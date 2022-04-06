var util

// 注意！！！！！代码有缺省，代码不完整

util.jsonp = function (url, success, onerror, charset) {
  var callbackName = util.getName('tt_player')
  window[callbackName] = function () {
    if (onsuccess && util.isFunction(onsuccess)) {
      onsuccess(arguments[0])
    }
  }
  var script = util.createScript(url + '&callback=' + callbackName, charset)
  script.onload = script.onreadystatechange = function () {
    if (!script.readyState || /loaded|complete/.test(script.readyState)) {
      script.onload = script.onreadystatechange = null
      // 移除该script的DOM对象
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      // 删除函数或变量
      window[callbackName] = null
    }
  }
  script.onerror = function () {
    if (onerror && util.isFunction(onerror)) {
      onerror()
    }
  }
  document.getElementByTagName('head')[0].appendChild(script)
}

// 请求
util.json = function (options) {
  var opt = {
    url: '',
    type: 'get',
    data: {},
    success: function () { },
    error: function () { },
  }
  util.extend(opt, options)
  if (opt.url) {
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new Window.ActiveXObject('Microsoft.XMLHTTP')
    var data = opt.data,
      url = opt.url,
      type = opt.type.toUpperCase(),
      dataArr = [];
    for (var k in data) {
      dataArr.push(k + '=' + data[k])
    }
    if (type === 'GET') {
      url = url + '?' + dataArr.join('&')
      xhr.open(type, url.replace(/\?$/g, ''), true)
      xhr.send()
    }
    if (type === 'POST') {
      xhr.open(type, url, true)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.send(dataArr.join('&'))
    }
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 304) {
        var res;
        if (opt.success && opt.success instanceof Function) {
          res = xhr.responseText
          if (typeof res === 'string') {
            res = JSON.parse(res)
            opt.success.call(xhr, res)
          }
        }
      } else {
        if (opt.error && opt.error instanceof Function) {
          opt.error.call(xhr, res)
        }
      }
    }
  }
}

export default util