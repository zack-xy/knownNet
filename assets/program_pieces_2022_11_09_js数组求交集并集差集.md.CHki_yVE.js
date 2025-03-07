import{_ as n,c as a,o as p,ax as e}from"./chunks/framework.DtvkEc4l.js";const u=JSON.parse('{"title":"js数组求交集并集差集","description":"","frontmatter":{"title":"js数组求交集并集差集","author":"Zack Zheng","date":"2022/11/09 09:51","categories":["大海拾遗"],"tags":["JavaScript"]},"headers":[],"relativePath":"program/pieces/2022/11/09/js数组求交集并集差集.md","filePath":"program/pieces/2022/11/09/js数组求交集并集差集.md","lastUpdated":1676537933000}'),l={name:"program/pieces/2022/11/09/js数组求交集并集差集.md"};function r(i,s,t,c,b,o){return p(),a("div",null,s[0]||(s[0]=[e(`<p>表示最大最小数值 Number.MAX_VALUE Number.MIN_VALUE</p><p>表示无穷大、无穷小 Infinity、-Infinity</p><hr><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>var a = [1,2,3,4,5]</span></span>
<span class="line"><span>var b = [2,4,6,8,10]</span></span>
<span class="line"><span>console.log(&quot;数组a：&quot;, a);</span></span>
<span class="line"><span>console.log(&quot;数组b：&quot;, b);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>var sa = new Set(a);</span></span>
<span class="line"><span>var sb = new Set(b);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 交集</span></span>
<span class="line"><span>let intersect = a.filter(x =&gt; sb.has(x));</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 差集</span></span>
<span class="line"><span>let minus = a.filter(x =&gt; !sb.has(x));</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 补集</span></span>
<span class="line"><span>let complement  = [...a.filter(x =&gt; !sb.has(x)), ...b.filter(x =&gt; !sa.has(x))];</span></span>
<span class="line"><span></span></span>
<span class="line"><span> </span></span>
<span class="line"><span>// 并集</span></span>
<span class="line"><span>let unionSet = Array.from(new Set([...a, ...b]));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4)]))}const _=n(l,[["render",r]]);export{u as __pageData,_ as default};
