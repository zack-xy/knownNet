import{_ as a,c as n,o as p,aG as e}from"./chunks/framework.C6-Ju1Us.js";const o=JSON.parse('{"title":"html特殊标签和特殊符号","description":"","frontmatter":{"title":"html特殊标签和特殊符号","author":"Zack Zheng","date":"2021/02/05 22:36","categories":["大海拾遗"],"tags":["HTML"]},"headers":[],"relativePath":"program/pieces/html特殊标签和特殊符号.md","filePath":"program/pieces/html特殊标签和特殊符号.md","lastUpdated":1742350079000}'),l={name:"program/pieces/html特殊标签和特殊符号.md"};function i(r,s,t,c,b,m){return p(),n("div",null,[...s[0]||(s[0]=[e(`<hr><h4 id="符集介绍" tabindex="-1">符集介绍 <a class="header-anchor" href="#符集介绍" aria-label="Permalink to &quot;符集介绍&quot;">​</a></h4><p>gb2312 国标6763个汉字 BIG5 繁体中文 GBK 全部中文，国标扩展 gb2312扩展包含繁体 UTF-8基本包含全世界所有国家包含的字符</p><hr><h4 id="横线、换行、加粗、删除线、下划线标签" tabindex="-1">横线、换行、加粗、删除线、下划线标签 <a class="header-anchor" href="#横线、换行、加粗、删除线、下划线标签" aria-label="Permalink to &quot;横线、换行、加粗、删除线、下划线标签&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>&lt;hr /&gt;   </span></span>
<span class="line"><span>横线</span></span>
<span class="line"><span>&lt;br /&gt;   </span></span>
<span class="line"><span>换行</span></span>
<span class="line"><span>&lt;b&gt;&lt;/b&gt;&lt;strong&gt;&lt;/strong&gt;   </span></span>
<span class="line"><span>加粗   (XHTML都推荐用后面的)</span></span>
<span class="line"><span>&lt;i&gt;&lt;/i&gt; &lt;em&gt;&lt;/em&gt;                </span></span>
<span class="line"><span>倾斜</span></span>
<span class="line"><span>&lt;s&gt;&lt;/s&gt;&lt;del&gt;&lt;/del&gt;               </span></span>
<span class="line"><span>删除线</span></span>
<span class="line"><span>&lt;u&gt;&lt;/u&gt;&lt;ins&gt;&lt;/ins&gt;               </span></span>
<span class="line"><span>下划线</span></span>
<span class="line"><span>&lt;a href=&quot;#&quot;&gt;&lt;/a&gt;                     </span></span>
<span class="line"><span>空链接  target=&quot;_blank&quot; 新窗口</span></span>
<span class="line"><span>&lt;base target=&quot;_blank&quot;/&gt;  </span></span>
<span class="line"><span>写在&lt;head&gt;&lt;/head&gt;中，使全体链接都新窗口打开</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr><h4 id="锚点定位" tabindex="-1">锚点定位 <a class="header-anchor" href="#锚点定位" aria-label="Permalink to &quot;锚点定位&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>1、使用相应的id名标注跳转目标的位置</span></span>
<span class="line"><span>&lt;div id=&quot;zackTest&quot;&gt;网页内容&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、使用&lt;a href=&quot;#zackTest&quot;&gt;锚点链接&lt;/a&gt;  </span></span>
<span class="line"><span>href指向id</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h4 id="特殊符号" tabindex="-1">特殊符号 <a class="header-anchor" href="#特殊符号" aria-label="Permalink to &quot;特殊符号&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>不换行空格：&amp;nbsp; （空白键）</span></span>
<span class="line"><span>半角空格：&amp;ensp;    （二分之一em宽）</span></span>
<span class="line"><span>全角空格：&amp;emsp;    （一个em宽）</span></span>
<span class="line"><span>窄空格： &amp;thinsp;      （六分之一em宽）</span></span>
<span class="line"><span>零宽不连字：&amp;zwnj;（不打印字符，抑制连字）</span></span>
<span class="line"><span>零宽连字：&amp;zwj;      (不打印字符，使字相连)</span></span>
<span class="line"><span>其他空白：</span></span>
<span class="line"><span>空格（&amp;#x0020;）、</span></span>
<span class="line"><span>制表位（&amp;#x0009;）、</span></span>
<span class="line"><span>换行（&amp;#x000A;）</span></span>
<span class="line"><span>回车（&amp;#x000D;）</span></span>
<span class="line"><span>（&amp;#12288;）</span></span>
<span class="line"><span>&lt;小于号：&amp;lt;</span></span>
<span class="line"><span>&gt;大于号：&amp;gt;</span></span>
<span class="line"><span>&amp;和号：&amp;amp;</span></span>
<span class="line"><span>¥人民币：&amp;yen;</span></span>
<span class="line"><span>©版权：&amp;copy;</span></span>
<span class="line"><span>®注册商标：&amp;reg;</span></span>
<span class="line"><span>。摄氏度: &amp;deg;</span></span>
<span class="line"><span>±正负号：&amp;plusmn;</span></span>
<span class="line"><span>x乘号：&amp;times;</span></span>
<span class="line"><span>➗除号：&amp;divide;</span></span>
<span class="line"><span>2 平方2（上标2）：&amp;sup2;</span></span>
<span class="line"><span>3 立方3（上标3）：&amp;sup3;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,12)])])}const d=a(l,[["render",i]]);export{o as __pageData,d as default};
