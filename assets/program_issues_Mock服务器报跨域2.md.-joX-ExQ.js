import{_ as n,c as a,o as e,ax as p}from"./chunks/framework.DtvkEc4l.js";const d=JSON.parse('{"title":"Mock服务器报跨域2","description":"","frontmatter":{"title":"Mock服务器报跨域2","lang":"en-US","date":"2023/07/14 00:00:00","editLink":true,"categories":["困难冲冲"],"tags":["Bug"]},"headers":[],"relativePath":"program/issues/Mock服务器报跨域2.md","filePath":"program/issues/Mock服务器报跨域2.md","lastUpdated":1740468438000}'),l={name:"program/issues/Mock服务器报跨域2.md"};function r(i,s,t,c,o,u){return e(),a("div",null,s[0]||(s[0]=[p(`<p>Mock服务器使用的是CORS跨域方案</p><p>对于CORS方案，分为两种请求，一种是简单请求和非简单请求</p><h6 id="简单请求" tabindex="-1">简单请求 <a class="header-anchor" href="#简单请求" aria-label="Permalink to &quot;简单请求&quot;">​</a></h6><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>（1) 请求方法是以下三种方法之一：HEAD，GET，POST</span></span>
<span class="line"><span>（2）HTTP的头信息不超出以下几种字段：</span></span>
<span class="line"><span>	Accept</span></span>
<span class="line"><span>	Accept-Language</span></span>
<span class="line"><span>	Content-Language</span></span>
<span class="line"><span>	Last-Event-ID</span></span>
<span class="line"><span>	Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>简单请求，又区分是否携带cookie，可以查看<a href="./Mock服务器报跨域.html">上一篇文章</a></p><h6 id="非简单请求" tabindex="-1">非简单请求 <a class="header-anchor" href="#非简单请求" aria-label="Permalink to &quot;非简单请求&quot;">​</a></h6><p>不满足上述情况，就是非简单请求，写这篇文章，就是因为，前端axios请求配置了Content-Type为application/json</p><p>导致Mock服务器报了跨域。这时，服务器会检查请求的域名是否在许可名单之中，服务器不能配置成<code>origin:&#39;*&#39;</code>，需要具体指定，可以配置白名单。</p><p>这里代码演示Mock使用的koa2-cors如何配置</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>const cors = require(&#39;koa2-cors&#39;);// CORS是一个W3C标准，全称是&quot;跨域资源共享&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(</span></span>
<span class="line"><span>    cors({</span></span>
<span class="line"><span>        origin: function(ctx) { //设置允许来自指定域名请求</span></span>
<span class="line"><span>            const whiteList = [&#39;http://weipxiu.com&#39;,&#39;http://localhost:8081&#39;]; //可跨域白名单</span></span>
<span class="line"><span>            let url = ctx.header.referer.substr(0,ctx.header.referer.length - 1);</span></span>
<span class="line"><span>            if(whiteList.includes(url)){</span></span>
<span class="line"><span>                return url //注意，这里域名末尾不能带/，否则不成功</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            return &#39;http://localhost::3000&#39; //默认允许本地请求3000端口可跨域</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        maxAge: 5, //指定本次预检请求的有效期，单位为秒。</span></span>
<span class="line"><span>        credentials: true, //是否允许发送Cookie</span></span>
<span class="line"><span>        allowMethods: [&#39;GET&#39;, &#39;POST&#39;, &#39;PUT&#39;, &#39;DELETE&#39;, &#39;OPTIONS&#39;], //设置所允许的HTTP请求方法</span></span>
<span class="line"><span>        allowHeaders: [&#39;Content-Type&#39;, &#39;Authorization&#39;, &#39;Accept&#39;], //设置服务器支持的所有头信息字段</span></span>
<span class="line"><span>        exposeHeaders: [&#39;WWW-Authenticate&#39;, &#39;Server-Authorization&#39;] //设置获取其他自定义字段</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,10)]))}const m=n(l,[["render",r]]);export{d as __pageData,m as default};
