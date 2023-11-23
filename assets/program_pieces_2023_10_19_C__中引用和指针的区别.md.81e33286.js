import{_ as s,c as n,o as a,a as l}from"./app.db7222e2.js";const y=JSON.parse('{"title":"C++中引用和指针的区别","description":"","frontmatter":{"title":"C++中引用和指针的区别","author":"Zack Zheng","date":"2023/10/19 00:00","categories":["C++"],"tags":["C++"]},"headers":[{"level":3,"title":"指针：指针变量相对应的内存空间里存储的值恰好是某个内存地址","slug":"指针-指针变量相对应的内存空间里存储的值恰好是某个内存地址","link":"#指针-指针变量相对应的内存空间里存储的值恰好是某个内存地址","children":[]},{"level":3,"title":"引用：表示某一对象的别名，是一种特殊的指针","slug":"引用-表示某一对象的别名-是一种特殊的指针","link":"#引用-表示某一对象的别名-是一种特殊的指针","children":[]},{"level":3,"title":"引用的应用","slug":"引用的应用","link":"#引用的应用","children":[]},{"level":3,"title":"代码例子","slug":"代码例子","link":"#代码例子","children":[]},{"level":3,"title":"区别","slug":"区别","link":"#区别","children":[]}],"relativePath":"program/pieces/2023/10/19/C++中引用和指针的区别.md","lastUpdated":1697726906000}'),p={name:"program/pieces/2023/10/19/C++中引用和指针的区别.md"},e=l(`<h3 id="指针-指针变量相对应的内存空间里存储的值恰好是某个内存地址" tabindex="-1">指针：指针变量相对应的内存空间里存储的值恰好是某个内存地址 <a class="header-anchor" href="#指针-指针变量相对应的内存空间里存储的值恰好是某个内存地址" aria-hidden="true">#</a></h3><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">int x = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">int *ptr = &amp;x;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">int x = 5;</span></span>
<span class="line"><span style="color:#abb2bf;">int *ptr = &amp;x;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>ptr是一个指针变量名</li><li>通过指针获取这个指针指向的内存中的值称为解引用</li><li>空指针不能解引用</li></ul><p>解引用（*就是解引用运算符）</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 创建指针b，存储a的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">    int *b = &amp;a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 对指针b中存储的地址进行解引用</span></span>
<span class="line"><span style="color:#A6ACCD;">    int c = *b;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 输出结果为：1 0x61feb4 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout&lt;&lt;a&lt;&lt;&quot; &quot;&lt;&lt;b&lt;&lt;&quot; &quot;&lt;&lt;c</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">int main() {</span></span>
<span class="line"><span style="color:#abb2bf;">    int a = 1;</span></span>
<span class="line"><span style="color:#abb2bf;">    // 创建指针b，存储a的地址</span></span>
<span class="line"><span style="color:#abb2bf;">    int *b = &amp;a;</span></span>
<span class="line"><span style="color:#abb2bf;">    // 对指针b中存储的地址进行解引用</span></span>
<span class="line"><span style="color:#abb2bf;">    int c = *b;</span></span>
<span class="line"><span style="color:#abb2bf;">    // 输出结果为：1 0x61feb4 1</span></span>
<span class="line"><span style="color:#abb2bf;">    cout&lt;&lt;a&lt;&lt;&quot; &quot;&lt;&lt;b&lt;&lt;&quot; &quot;&lt;&lt;c</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="引用-表示某一对象的别名-是一种特殊的指针" tabindex="-1">引用：表示某一对象的别名，是一种特殊的指针 <a class="header-anchor" href="#引用-表示某一对象的别名-是一种特殊的指针" aria-hidden="true">#</a></h3><p><code>类型标识符 &amp;引用名=目标变量名</code></p><div class="language-c++ line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">int x = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">int &amp;y = x;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">int x = 5;</span></span>
<span class="line"><span style="color:#abb2bf;">int &amp;y = x;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>对象和对象的引用都指向同一地址<br> 类型标识符是指目标变量的类型<br> 引用声明完毕后，相当于目标变量名有2个名称（目标原名称、引用名）</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    int &amp;b = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout&lt;&lt;a&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 输出结果为2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">int main() {</span></span>
<span class="line"><span style="color:#abb2bf;">    int a = 1;</span></span>
<span class="line"><span style="color:#abb2bf;">    int &amp;b = a;</span></span>
<span class="line"><span style="color:#abb2bf;">    b = 2;</span></span>
<span class="line"><span style="color:#abb2bf;">    cout&lt;&lt;a&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 输出结果为2</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="引用的应用" tabindex="-1">引用的应用 <a class="header-anchor" href="#引用的应用" aria-hidden="true">#</a></h3><ol><li>函数参数引用传递</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">use namespace std;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 引用传递的方式</span></span>
<span class="line"><span style="color:#A6ACCD;">void func (int &amp;a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a + 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 传统值传递的方式</span></span>
<span class="line"><span style="color:#A6ACCD;">void func1 (int a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a + 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a=5,b=5;</span></span>
<span class="line"><span style="color:#A6ACCD;">    func(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">    func1(b);</span></span>
<span class="line"><span style="color:#A6ACCD;">    cout&lt;&lt;a&lt;&lt;&quot; &quot;&lt;&lt;b&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">use namespace std;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 引用传递的方式</span></span>
<span class="line"><span style="color:#abb2bf;">void func (int &amp;a) {</span></span>
<span class="line"><span style="color:#abb2bf;">    a = a + 10;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 传统值传递的方式</span></span>
<span class="line"><span style="color:#abb2bf;">void func1 (int a) {</span></span>
<span class="line"><span style="color:#abb2bf;">    a = a + 10;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">int main() {</span></span>
<span class="line"><span style="color:#abb2bf;">    int a=5,b=5;</span></span>
<span class="line"><span style="color:#abb2bf;">    func(a);</span></span>
<span class="line"><span style="color:#abb2bf;">    func1(b);</span></span>
<span class="line"><span style="color:#abb2bf;">    cout&lt;&lt;a&lt;&lt;&quot; &quot;&lt;&lt;b&lt;&lt;endl;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2"><li>常引用 使用引用并确保引用的安全性</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const int &amp;b = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 通过引用修改变量，报错</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">int main() {</span></span>
<span class="line"><span style="color:#abb2bf;">    int a = 1;</span></span>
<span class="line"><span style="color:#abb2bf;">    const int &amp;b = a;</span></span>
<span class="line"><span style="color:#abb2bf;">    // 通过引用修改变量，报错</span></span>
<span class="line"><span style="color:#abb2bf;">    b = 2;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="代码例子" tabindex="-1">代码例子 <a class="header-anchor" href="#代码例子" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">int a=10,*p;</span></span>
<span class="line"><span style="color:#A6ACCD;">int &amp;b=a; // 引用，变量b和a指向同一个空间</span></span>
<span class="line"><span style="color:#A6ACCD;">p=&amp;a; // 指针P存储变量a的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">string s=&quot;c++&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">string *ps=&amp;s;</span></span>
<span class="line"><span style="color:#A6ACCD;">cout&lt;&lt;p&lt;&lt;endl; // 输出结果是指针p的值，变量a的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">cout&lt;&lt;b&lt;&lt;endl; // 输入结果是变量b的值10</span></span>
<span class="line"><span style="color:#A6ACCD;">cout&lt;&lt;*p&lt;&lt;endl; // 输出结果是指针p指向的变量的值，即变量a的值10</span></span>
<span class="line"><span style="color:#A6ACCD;">cout&lt;&lt;ps&lt;&lt;endl; // 输出结果是指针ps的值，变量s的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">cout&lt;&lt;*ps&lt;&lt;endl; // 输出结果是指针ps指向的变量的值，即变量s的值&quot;c++&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">int a=10,*p;</span></span>
<span class="line"><span style="color:#abb2bf;">int &amp;b=a; // 引用，变量b和a指向同一个空间</span></span>
<span class="line"><span style="color:#abb2bf;">p=&amp;a; // 指针P存储变量a的地址</span></span>
<span class="line"><span style="color:#abb2bf;">string s=&quot;c++&quot;;</span></span>
<span class="line"><span style="color:#abb2bf;">string *ps=&amp;s;</span></span>
<span class="line"><span style="color:#abb2bf;">cout&lt;&lt;p&lt;&lt;endl; // 输出结果是指针p的值，变量a的地址</span></span>
<span class="line"><span style="color:#abb2bf;">cout&lt;&lt;b&lt;&lt;endl; // 输入结果是变量b的值10</span></span>
<span class="line"><span style="color:#abb2bf;">cout&lt;&lt;*p&lt;&lt;endl; // 输出结果是指针p指向的变量的值，即变量a的值10</span></span>
<span class="line"><span style="color:#abb2bf;">cout&lt;&lt;ps&lt;&lt;endl; // 输出结果是指针ps的值，变量s的地址</span></span>
<span class="line"><span style="color:#abb2bf;">cout&lt;&lt;*ps&lt;&lt;endl; // 输出结果是指针ps指向的变量的值，即变量s的值&quot;c++&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-hidden="true">#</a></h3><ul><li>指针有自己的一块空间，而引用只是一个别名</li><li>使用sizeof看一个指针的大小是4，而引用则是被引用对象的大小</li><li>指针可以被初始化为NULL，而引用必须被初始化而且必须是一个已有对象的引用</li><li>作为参数传递时，指针需要被解引用才可以对对象进行操作，而直接对引用的修改都会改变引用所指向的对象</li><li>指针在使用中可以指向其他对象，但是引用只能是一个对象的引用，不能被改变</li><li>指针可以有多级指针（**P），而引用只有一级</li><li>指针和引用使用++运算符的意义不一样</li><li>如果返回动态内存分配的对象或者内存，必须使用指针，引用可能引起内存泄漏</li></ul>`,19),c=[e];function t(o,i,r,b,d,u){return a(),n("div",null,c)}const m=s(p,[["render",t]]);export{y as __pageData,m as default};
