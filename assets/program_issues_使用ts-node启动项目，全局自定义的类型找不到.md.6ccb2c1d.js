import{_ as s,c as n,o as a,a as e}from"./app.75d19d50.js";const m=JSON.parse('{"title":"使用ts-node启动项目，全局自定义的类型找不到","description":"","frontmatter":{"title":"使用ts-node启动项目，全局自定义的类型找不到","lang":"en-US","date":"2023/07/21 00:00:00","editLink":true,"categories":["困难冲冲"],"tags":["Bug"]},"headers":[],"relativePath":"program/issues/使用ts-node启动项目，全局自定义的类型找不到.md","lastUpdated":1740468438000}'),l={name:"program/issues/使用ts-node启动项目，全局自定义的类型找不到.md"},p=e(`<p>在tsconfig中加入如下几行(我的全局自定义类型在src/types/global.d.ts中)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">&quot;ts-node&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;files&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;files&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;src/index.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;src/types/global.d.ts&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">&quot;ts-node&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;files&quot;: true</span></span>
<span class="line"><span style="color:#abb2bf;">},</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;files&quot;: [</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;src/index.ts&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">  &quot;src/types/global.d.ts&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,2),t=[p];function o(c,r,i,b,_,d){return a(),n("div",null,t)}const y=s(l,[["render",o]]);export{m as __pageData,y as default};
