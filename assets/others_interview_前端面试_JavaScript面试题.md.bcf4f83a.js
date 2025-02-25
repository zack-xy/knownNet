import{_ as s,c as n,o as a,a as l}from"./app.314beff6.js";const C=JSON.parse('{"title":"JavaScript面试题","description":"","frontmatter":{"title":"JavaScript面试题","author":"Zack Zheng","date":"1999/01/01 00:00","categories":["面试题"],"tags":["JavaScript"]},"headers":[{"level":3,"title":"以下代码输出什么","slug":"以下代码输出什么","link":"#以下代码输出什么","children":[]}],"relativePath":"others/interview/前端面试/JavaScript面试题.md","lastUpdated":1709557953000}'),p={name:"others/interview/前端面试/JavaScript面试题.md"},e=l(`<h3 id="以下代码输出什么" tabindex="-1">以下代码输出什么 <a class="header-anchor" href="#以下代码输出什么" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}+{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#A6ACCD;">([]</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">[])</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#ABB2BF;">({}</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">{}).</span><span style="color:#E06C75;">length</span></span>
<span class="line"><span style="color:#ABB2BF;">([]</span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;">[]).</span><span style="color:#E06C75;">length</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){}).</span><span style="color:#E06C75;">length</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>{}.toString =&gt; &quot;[object Object]&quot; 所以第一个是30</p><p>[].toSting =&gt; &quot;&quot; 所以第二个是0 ( [1,2,3].toString() =&gt; &quot;1,2,3&quot; )</p><p>函数的长度是形参的个数，所以是0</p><p>扩展(function(){})+{} =&gt; &#39;function(){}[object Object]&#39;</p><hr><h4 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-hidden="true">#</a></h4><h5 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-hidden="true">#</a></h5><p>服务端解决方案，加载速度快（模块文件一般存在本地硬盘） Commonjs规定，每一个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性是对外的接口(module.exports)，加载某个模块，就是加载这个exports属性</p><ul><li>每一个文件是一个模块，有自己的作用域。在文件内定义的变量、函数等都是私有的，对其他文件不可见</li><li>运行时加载，只能在运行时确定一些东西</li><li>同步加载，只有加载完成才能执行后序操作</li><li>导出时都是值拷贝，即使导出的值变了，导入的值也不会变，如果要更新导入的值，需要重新导入</li><li>模块在首次执行后会缓存，再次加载只返回缓存结果，若想再次执行，可清除缓存</li><li>模块加载的顺序是代码出现的顺序</li></ul><p>基本语法：<br> 暴露模块：<code>module.exports = value或exports.xxx = value</code><br> 引入模块：<code>require(xxx)</code></p><p>因为nodejs主要用于服务器编程，模块文件一般已经存在在本地硬盘，所以加载起来比较快，不用考虑异步加载的方式 。如果是浏览器环境，要从服务器加载模块，使用commonJS需要等到所有模块都下载完并运行后才能使用，阻塞后面代码的运行。所以浏览器需要采用非同步的方式。</p><h5 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-hidden="true">#</a></h5><p>会编译成require/exports来执行(RequireJS)</p><p>使用异步方式加载模块，模块的加载不影响后面代码的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数</p><p>定义暴露模块</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">// 定义没有依赖的模块</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">define(function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 模块</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义有依赖的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">define([&#39;module1&#39;, &#39;module2&#39;], function(m1, m2)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 模块</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">// 定义没有依赖的模块</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">define(function () {</span></span>
<span class="line"><span style="color:#abb2bf;">    return 模块</span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 定义有依赖的模块</span></span>
<span class="line"><span style="color:#abb2bf;">define([&#39;module1&#39;, &#39;module2&#39;], function(m1, m2)) {</span></span>
<span class="line"><span style="color:#abb2bf;">    return 模块</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>引用模块</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">require([&#39;module1&#39;, &#39;module2&#39;], function(m1, m2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 使用m1,m2</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">require([&#39;module1&#39;, &#39;module2&#39;], function(m1, m2) {</span></span>
<span class="line"><span style="color:#abb2bf;">    // 使用m1,m2</span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="cmd" tabindex="-1">CMD <a class="header-anchor" href="#cmd" aria-hidden="true">#</a></h5><p>专门用于浏览器端，异步加载模块，使用模块时才会加载执行，整合了CommonJS和AMD的特点</p><p>定义暴露模块</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">// 定义没有依赖的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">define(function(require, exports, module) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    exports.xxx = value</span></span>
<span class="line"><span style="color:#A6ACCD;">    module.exports = value</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 定义有依赖的模块</span></span>
<span class="line"><span style="color:#A6ACCD;">define(function(require, exports, module) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 引入依赖的模块 - 同步</span></span>
<span class="line"><span style="color:#A6ACCD;">    var module2 = require(&#39;./module2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 引入依赖模块 - 异步</span></span>
<span class="line"><span style="color:#A6ACCD;">    require.async(&#39;./module3&#39;, function(m3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 暴露模块</span></span>
<span class="line"><span style="color:#A6ACCD;">    exports.xxx = value</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">// 定义没有依赖的模块</span></span>
<span class="line"><span style="color:#abb2bf;">define(function(require, exports, module) {</span></span>
<span class="line"><span style="color:#abb2bf;">    exports.xxx = value</span></span>
<span class="line"><span style="color:#abb2bf;">    module.exports = value</span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 定义有依赖的模块</span></span>
<span class="line"><span style="color:#abb2bf;">define(function(require, exports, module) {</span></span>
<span class="line"><span style="color:#abb2bf;">    // 引入依赖的模块 - 同步</span></span>
<span class="line"><span style="color:#abb2bf;">    var module2 = require(&#39;./module2&#39;)</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    // 引入依赖模块 - 异步</span></span>
<span class="line"><span style="color:#abb2bf;">    require.async(&#39;./module3&#39;, function(m3) {</span></span>
<span class="line"><span style="color:#abb2bf;">    })</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    // 暴露模块</span></span>
<span class="line"><span style="color:#abb2bf;">    exports.xxx = value</span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>引入使用模块</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">define(function (require) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var m1 = require(&#39;./module1&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    var m2 = require(&#39;./module2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    m1.show()</span></span>
<span class="line"><span style="color:#A6ACCD;">    m2.show()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">define(function (require) {</span></span>
<span class="line"><span style="color:#abb2bf;">    var m1 = require(&#39;./module1&#39;)</span></span>
<span class="line"><span style="color:#abb2bf;">    var m2 = require(&#39;./module2&#39;)</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    m1.show()</span></span>
<span class="line"><span style="color:#abb2bf;">    m2.show()</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h5 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-hidden="true">#</a></h5><p>使用import和export形式导入和导出模块，<br> 异步导入<br> 导入和导出的值都指向一个内存地址，导入值会随导出值变化<br> 会编译成require/exports执行。<br> 编译阶段，import会被提到头部，首先执行<br> 允许动态加载模块import()函数</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">import(&#39;/modules/myModule.mjs&#39;).then((module) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 模块已经导入</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">import(&#39;/modules/myModule.mjs&#39;).then((module) =&gt; {</span></span>
<span class="line"><span style="color:#abb2bf;">    // 模块已经导入</span></span>
<span class="line"><span style="color:#abb2bf;">})</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-hidden="true">#</a></h5><p>ES6输出值的引用，CommonJS输出值的拷贝<br> ES6模块编译时输出接口，CommonJS运行时加载<br> ES6异步加载模块，CommonJS同步加载模块</p>`,31),o=[e];function r(c,i,t,b,d,u){return a(),n("div",null,o)}const y=s(p,[["render",r]]);export{C as __pageData,y as default};
