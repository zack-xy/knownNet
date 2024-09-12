import{_ as s,c as n,o as a,a as l}from"./app.2eb5d5a2.js";const D=JSON.parse('{"title":"我在工作中是怎么使用闭包的","description":"","frontmatter":{"title":"我在工作中是怎么使用闭包的","lang":"en-US","date":"2023-02-05T00:00:00.000Z","editLink":true,"categories":["博客"],"tags":["技术"]},"headers":[],"relativePath":"program/pieces/2024/05/30/测试页面.md","lastUpdated":1726156512000}'),p={name:"program/pieces/2024/05/30/测试页面.md"},e=l(`<div class="language-mermaid line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: 我是标题</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">stateDiagram-v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">state</span><span style="color:#A6ACCD;"> SC &lt;&lt;choice&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">S0:地球</span></span>
<span class="line"><span style="color:#A6ACCD;">S1:人类</span></span>
<span class="line"><span style="color:#A6ACCD;">S2:哺乳动物</span></span>
<span class="line"><span style="color:#A6ACCD;">S3:狗</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">S4:测试</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">state</span><span style="color:#A6ACCD;"> S0 </span><span style="color:#89DDFF;font-style:italic;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    S2 </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> S1</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#C3E88D;">包含</span></span>
<span class="line"><span style="color:#A6ACCD;">    S2 </span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;"> S3</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#C3E88D;">包含</span></span>
<span class="line"><span style="color:#A6ACCD;">    S1--&gt;S3:饲养</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">note right of</span><span style="color:#A6ACCD;"> S0</span></span>
<span class="line"><span style="color:#C3E88D;">    这是一段注释</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end note</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">侧额--&gt;SC</span></span>
<span class="line"><span style="color:#A6ACCD;">SC--&gt;第一</span></span>
<span class="line"><span style="color:#A6ACCD;">SC--&gt;第二</span></span>
<span class="line"><span style="color:#A6ACCD;">SC--&gt;第三</span></span>
<span class="line"><span style="color:#A6ACCD;">第二--&gt;第三</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#ABB2BF;">title: 我是标题</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#C678DD;">stateDiagram-v2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">state</span><span style="color:#ABB2BF;"> SC &lt;&lt;choice&gt;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">S0:地球</span></span>
<span class="line"><span style="color:#ABB2BF;">S1:人类</span></span>
<span class="line"><span style="color:#ABB2BF;">S2:哺乳动物</span></span>
<span class="line"><span style="color:#ABB2BF;">S3:狗</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">S4:测试</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">state</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">S0</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">S2</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">--&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">S1</span><span style="color:#C678DD;">:</span><span style="color:#98C379;">包含</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">S2</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">--&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">S3</span><span style="color:#C678DD;">:</span><span style="color:#98C379;">包含</span></span>
<span class="line"><span style="color:#ABB2BF;">    S1--&gt;S3:饲养</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">note right of</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">S0</span></span>
<span class="line"><span style="color:#98C379;">    这是一段注释</span></span>
<span class="line"><span style="color:#C678DD;">end note</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">侧额--&gt;SC</span></span>
<span class="line"><span style="color:#ABB2BF;">SC--&gt;第一</span></span>
<span class="line"><span style="color:#ABB2BF;">SC--&gt;第二</span></span>
<span class="line"><span style="color:#ABB2BF;">SC--&gt;第三</span></span>
<span class="line"><span style="color:#ABB2BF;">第二--&gt;第三</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,1),c=[e];function o(t,r,i,y,C,B){return a(),n("div",null,c)}const b=s(p,[["render",o]]);export{D as __pageData,b as default};
