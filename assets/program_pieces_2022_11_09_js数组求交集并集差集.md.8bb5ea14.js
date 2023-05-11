import{_ as s,c as n,o as a,a as l}from"./app.6bd4f314.js";const C=JSON.parse('{"title":"js数组求交集并集差集","description":"","frontmatter":{"title":"js数组求交集并集差集","author":"Zack Zheng","date":"2022/11/09 09:51","categories":["大海拾遗"],"tags":["JavaScript"]},"headers":[],"relativePath":"program/pieces/2022/11/09/js数组求交集并集差集.md","lastUpdated":1676537933000}'),p={name:"program/pieces/2022/11/09/js数组求交集并集差集.md"},e=l(`<p>表示最大最小数值 Number.MAX_VALUE Number.MIN_VALUE</p><p>表示无穷大、无穷小 Infinity、-Infinity</p><hr><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">var a = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = [2,4,6,8,10]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&quot;数组a：&quot;, a);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&quot;数组b：&quot;, b);</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">var sa = new Set(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">var sb = new Set(b);</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 交集</span></span>
<span class="line"><span style="color:#A6ACCD;">let intersect = a.filter(x =&gt; sb.has(x));</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 差集</span></span>
<span class="line"><span style="color:#A6ACCD;">let minus = a.filter(x =&gt; !sb.has(x));</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 补集</span></span>
<span class="line"><span style="color:#A6ACCD;">let complement  = [...a.filter(x =&gt; !sb.has(x)), ...b.filter(x =&gt; !sa.has(x))];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 并集</span></span>
<span class="line"><span style="color:#A6ACCD;">let unionSet = Array.from(new Set([...a, ...b]));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">var a = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#abb2bf;">var b = [2,4,6,8,10]</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(&quot;数组a：&quot;, a);</span></span>
<span class="line"><span style="color:#abb2bf;">console.log(&quot;数组b：&quot;, b);</span></span>
<span class="line"><span style="color:#abb2bf;"> </span></span>
<span class="line"><span style="color:#abb2bf;">var sa = new Set(a);</span></span>
<span class="line"><span style="color:#abb2bf;">var sb = new Set(b);</span></span>
<span class="line"><span style="color:#abb2bf;"> </span></span>
<span class="line"><span style="color:#abb2bf;">// 交集</span></span>
<span class="line"><span style="color:#abb2bf;">let intersect = a.filter(x =&gt; sb.has(x));</span></span>
<span class="line"><span style="color:#abb2bf;"> </span></span>
<span class="line"><span style="color:#abb2bf;">// 差集</span></span>
<span class="line"><span style="color:#abb2bf;">let minus = a.filter(x =&gt; !sb.has(x));</span></span>
<span class="line"><span style="color:#abb2bf;"> </span></span>
<span class="line"><span style="color:#abb2bf;">// 补集</span></span>
<span class="line"><span style="color:#abb2bf;">let complement  = [...a.filter(x =&gt; !sb.has(x)), ...b.filter(x =&gt; !sa.has(x))];</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"> </span></span>
<span class="line"><span style="color:#abb2bf;">// 并集</span></span>
<span class="line"><span style="color:#abb2bf;">let unionSet = Array.from(new Set([...a, ...b]));</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4),o=[e];function c(r,t,b,i,A,y){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{C as __pageData,m as default};
