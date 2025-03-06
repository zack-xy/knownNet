import{_ as s,c as a,o as n,a as l}from"./app.307726e6.js";const h=JSON.parse('{"title":"什么是算法","description":"","frontmatter":{"title":"什么是算法","author":"Zack Zheng","date":"2025/03/06 11:08","categories":["数据结构和算法"],"tags":["数据结构","算法"]},"headers":[{"level":3,"title":"什么是算法","slug":"什么是算法","link":"#什么是算法","children":[]},{"level":3,"title":"何为一个好算法","slug":"何为一个好算法","link":"#何为一个好算法","children":[]},{"level":3,"title":"算法例子","slug":"算法例子","link":"#算法例子","children":[]}],"relativePath":"others/dsa/数据结构和算法介绍/什么是算法.md","lastUpdated":1741247066000}'),p={name:"others/dsa/数据结构和算法介绍/什么是算法.md"},e=l(`<h3 id="什么是算法" tabindex="-1">什么是算法 <a class="header-anchor" href="#什么是算法" aria-hidden="true">#</a></h3><p>从计算机编程的角度来讲，算法是解决特定的问题的一套定义明确的指令集。它接受一组输入，并产生期望的输出。例如，</p><p>一个两数相加的算法：</p><ol><li>获得两个数字的输入</li><li>使用<code>+</code>运算符将数字相加</li><li>显示计算结果</li></ol><hr><h3 id="何为一个好算法" tabindex="-1">何为一个好算法 <a class="header-anchor" href="#何为一个好算法" aria-hidden="true">#</a></h3><ul><li>输入和输出应该被精确定义</li><li>算法中的每一个步骤都应该清晰明确，不存在歧义</li><li>在解决一个问题的众多不同方法中，算法应该是最为高效的。</li><li>算法不应包含计算机代码。相反，算法的编写方式应使其能够在不同的编程语言中使用。</li></ul><hr><h3 id="算法例子" tabindex="-1">算法例子 <a class="header-anchor" href="#算法例子" aria-hidden="true">#</a></h3><h5 id="算法1-相加用户输入的2个数字" tabindex="-1">算法1: 相加用户输入的2个数字 <a class="header-anchor" href="#算法1-相加用户输入的2个数字" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">步骤 1: 开始</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 2: 声明变量 num1, num2 和 sum</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 3: 读变量 num1 和 num2</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 4: num1 和 num2 相加并把结果赋值给sum. sum &lt;- num1 + num2</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 5: 展示num</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 6: 结束</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">步骤 1: 开始</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 2: 声明变量 num1, num2 和 sum</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 3: 读变量 num1 和 num2</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 4: num1 和 num2 相加并把结果赋值给sum. sum &lt;- num1 + num2</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 5: 展示num</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 6: 结束</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="算法2-在3个数字中找到最大的数字" tabindex="-1">算法2: 在3个数字中找到最大的数字 <a class="header-anchor" href="#算法2-在3个数字中找到最大的数字" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">步骤 1: 开始</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 2: 声明变量a, b和c</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 3: 读取变量a, b和c</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 4: 如果 a &gt; b</span></span>
<span class="line"><span style="color:#A6ACCD;">          如果 a &gt; c</span></span>
<span class="line"><span style="color:#A6ACCD;">            输出 a 是最大的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">          否则 </span></span>
<span class="line"><span style="color:#A6ACCD;">            输出 c 是最大的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">        否则</span></span>
<span class="line"><span style="color:#A6ACCD;">          如果 b &gt; c</span></span>
<span class="line"><span style="color:#A6ACCD;">            输出 b 是最大的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">          否则</span></span>
<span class="line"><span style="color:#A6ACCD;">            输出 c 是最大的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 5: 停止</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">步骤 1: 开始</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 2: 声明变量a, b和c</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 3: 读取变量a, b和c</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 4: 如果 a &gt; b</span></span>
<span class="line"><span style="color:#abb2bf;">          如果 a &gt; c</span></span>
<span class="line"><span style="color:#abb2bf;">            输出 a 是最大的数字</span></span>
<span class="line"><span style="color:#abb2bf;">          否则 </span></span>
<span class="line"><span style="color:#abb2bf;">            输出 c 是最大的数字</span></span>
<span class="line"><span style="color:#abb2bf;">        否则</span></span>
<span class="line"><span style="color:#abb2bf;">          如果 b &gt; c</span></span>
<span class="line"><span style="color:#abb2bf;">            输出 b 是最大的数字</span></span>
<span class="line"><span style="color:#abb2bf;">          否则</span></span>
<span class="line"><span style="color:#abb2bf;">            输出 c 是最大的数字</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 5: 停止</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h5 id="算法3-求一元二次方程的根-ax-2-bx-c-0" tabindex="-1">算法3: 求一元二次方程的根 ax^2 + bx + c = 0 <a class="header-anchor" href="#算法3-求一元二次方程的根-ax-2-bx-c-0" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">步骤 1: 开始</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 2: 声明变量 a, b, c, D, x1, x2, rp 和 ip</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 3: 计算判别式 D &lt;- b^2 - 4ac</span></span>
<span class="line"><span style="color:#A6ACCD;">步骤 4: 如果 D </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">步骤 1: 开始</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 2: 声明变量 a, b, c, D, x1, x2, rp 和 ip</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 3: 计算判别式 D &lt;- b^2 - 4ac</span></span>
<span class="line"><span style="color:#abb2bf;">步骤 4: 如果 D </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,15),c=[e];function r(i,o,b,t,d,u){return n(),a("div",null,c)}const C=s(p,[["render",r]]);export{h as __pageData,C as default};
