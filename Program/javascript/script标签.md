JavaScript是一门用来与网页交互的脚本语言，包含以下三个组成部分。
ECMAScript：由ECMA-262定义并提供核心功能。
文档对象模型（DOM）：提供与网页内容交互的方法和接口。
浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。

`<script>`标签：8个属性
1、async：表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。  

2、charset：使用src属性指定的代码字符集。

3、crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。

4、defer：表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。

5、integrity：允许比对接收到的资源和指定的加密签名以验证子资源完整性。如果不匹配，则页面会报错，脚本不会执行。（如果引入的js被恶意更改了怎么办，这个属性可以防范，但是不是所有浏览器都支持）

6、language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。

7、src：表示包含要执行的代码的外部文件。

8、type：代替language，表示代码块中脚本语言的内容类型 。按照惯例，这个值始终都是"text/javascript"。如果这个值是module，则代码会被当成ES6模块。

--------------------------------------------------------------------------------
`使用<script>的两种方式` 

1.行内，直接在`<script>`中写js代码

`<script>`中的js代码从上到下执行，保存在解释器环境中，在`<script>`中的js代码计算完成之前，面的其余内容不会被加载，也不会被显示

2.通过src属性引用外部js代码

GET请求，将文件下载到当前的标签位置，也会阻塞页面（阻塞时间包含下载的时间）
（GET初始的请求不受浏览器同源策略限制，但返回并被执行的JavaScript则受限制。当然，这个请求仍然受父页面HTTP/HTTPS协议的限制。）

----

#### 问题1:如果我定义`<script>`内部写了行内代码，也指定了src属性引用外部js文件，会执行哪一个？
答：如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。

----

除了行内脚本和`<script>`标签加载脚本，还有`动态加载脚本`
向DOM中动态添加script元素同样可以加载指定的脚本
```
let script = document.createElement('script'); 
script.src = 'gibberish.js'; 
document.head.appendChild(script); 
```
执行到这段代码之前是不会发请求的，默认是async加载，因为不是所有浏览器都支持async属性
所以为了统一，可以设置同步
```
let script = document.createElement('script'); 
script.src = 'gibberish.js'; 
script.async = false; 
document.head.appendChild(script); 
```

⚠️注意：
1.这种方式对于浏览器预加载器是不可见的，可能严重影响性能
2.要想预加载器知道动态请求文件的存在，需要提前声明
`<link rel="preload" href="gibberish.js">`

----

`<noscript>元素`
`<noscript>`元素可以包含任何可以出现在`<body>`中的HTML元素，`<script>`除外。
浏览器不支持脚本或浏览器对脚本的支持被关闭
浏览器将显示包含在`<noscript>`中的内容

----