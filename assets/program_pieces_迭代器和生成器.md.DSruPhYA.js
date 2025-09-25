import{_ as s,c as a,o as e,aG as p}from"./chunks/framework.DsljODgs.js";const d=JSON.parse('{"title":"迭代器和生成器","description":"","frontmatter":{"title":"迭代器和生成器","author":"Zack Zheng","date":"2022/11/09 09:51","categories":["大海拾遗"],"tags":["JavaScript"]},"headers":[],"relativePath":"program/pieces/迭代器和生成器.md","filePath":"program/pieces/迭代器和生成器.md","lastUpdated":1741325738000}'),l={name:"program/pieces/迭代器和生成器.md"};function r(i,n,c,t,o,b){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h3 id="迭代器与生成器" tabindex="-1">迭代器与生成器 <a class="header-anchor" href="#迭代器与生成器" aria-label="Permalink to &quot;迭代器与生成器&quot;">​</a></h3><p>实现了正式的Iterable接口，就可以通过迭代器Iterator消费</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>// 这个类实现了可迭代接口（Iterable）</span></span>
<span class="line"><span>// 调用默认的迭代器工厂函数会返回</span></span>
<span class="line"><span>// 一个实现迭代器接口（Iterator）的迭代器对象</span></span>
<span class="line"><span>class Foo { </span></span>
<span class="line"><span>    [Symbol.iterator]() {     </span></span>
<span class="line"><span>        return {       </span></span>
<span class="line"><span>            next() {         </span></span>
<span class="line"><span>                return { done: false, value: &#39;foo&#39; };       </span></span>
<span class="line"><span>            }     </span></span>
<span class="line"><span>        }   </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>let f = new Foo();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="自定义迭代器" tabindex="-1">自定义迭代器 <a class="header-anchor" href="#自定义迭代器" aria-label="Permalink to &quot;自定义迭代器&quot;">​</a></h4><h5 id="可选的return-方法用于指定在迭代器提前关闭时执行的逻辑。" tabindex="-1">可选的return()方法用于指定在迭代器提前关闭时执行的逻辑。 <a class="header-anchor" href="#可选的return-方法用于指定在迭代器提前关闭时执行的逻辑。" aria-label="Permalink to &quot;可选的return()方法用于指定在迭代器提前关闭时执行的逻辑。&quot;">​</a></h5><p>for-of循环通过break、continue、return或throw提前退出</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>class Counter { </span></span>
<span class="line"><span>    constructor(limit) { </span></span>
<span class="line"><span>        this.limit = limit; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>    [Symbol.iterator] () { </span></span>
<span class="line"><span>        let count = 1, limit = this.limit; </span></span>
<span class="line"><span>        return { </span></span>
<span class="line"><span>            next () { </span></span>
<span class="line"><span>                if (count &lt;= limit) { </span></span>
<span class="line"><span>                    return { done: false, value: count++ }; </span></span>
<span class="line"><span>                } else { </span></span>
<span class="line"><span>                    return { done: true, value: undefined }; </span></span>
<span class="line"><span>                } </span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            return() { </span></span>
<span class="line"><span>                console.log(&#39;Exiting early&#39;); </span></span>
<span class="line"><span>                return { done: true }; </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>        }; </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>let counter = new Counter(3); </span></span>
<span class="line"><span>for (let i of counter) { console.log(i); } // 1 // 2 // 3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h6 id="如果迭代器没有关闭-则还可以继续从上次离开的地方继续迭代。比如-数组的迭代器就是不能关闭的" tabindex="-1">如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如，数组的迭代器就是不能关闭的 <a class="header-anchor" href="#如果迭代器没有关闭-则还可以继续从上次离开的地方继续迭代。比如-数组的迭代器就是不能关闭的" aria-label="Permalink to &quot;如果迭代器没有关闭，则还可以继续从上次离开的地方继续迭代。比如，数组的迭代器就是不能关闭的&quot;">​</a></h6><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>let a = [1, 2, 3, 4, 5]; </span></span>
<span class="line"><span>let iter = a[Symbol.iterator](); </span></span>
<span class="line"><span>for (let i of iter) {   </span></span>
<span class="line"><span>    console.log(i);    </span></span>
<span class="line"><span>    if (i &gt; 2) {     </span></span>
<span class="line"><span>        break   </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>} // 1 // 2 // 3 </span></span>
<span class="line"><span>for (let i of iter) {   </span></span>
<span class="line"><span>    console.log(i); </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>// 4</span><span> // 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>因为return()方法是可选的，所以并非所有迭代器都是可关闭的。要知道某个迭代器是否可关闭，可以测试这个迭代器实例的return属性是不是函数对象。不过，仅仅给一个不可关闭的迭代器增加这个方法并不能让它变成可关闭的。这是因为调用return()不会强制迭代器进入关闭状态。即便如此，return()方法还是会被调用。</p><h3 id="生成器" tabindex="-1">生成器 <a class="header-anchor" href="#生成器" aria-label="Permalink to &quot;生成器&quot;">​</a></h3><p>有在一个函数块内暂停和恢复代码执行的能力,使用生成器可以自定义迭代器和实现协程。 生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。 只要是可以定义函数的地方，就可以定义生成器。 // 生成器函数声明</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>function* generatorFn() {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>成器对象一开始处于暂停执行（suspended）的状态。 与迭代器相似，生成器对象也实现了Iterator接口，因此具有next()方法。调用这个方法会让生成器开始或恢复执行。</p><h4 id="通过yield中断执行" tabindex="-1">通过yield中断执行 <a class="header-anchor" href="#通过yield中断执行" aria-label="Permalink to &quot;通过yield中断执行&quot;">​</a></h4><p>生成器函数在遇到yield关键字之前会正常执行。遇到这个关键字后，执行会停止，函数作用域的状态会被保留 停止执行的生成器函数只能通过在生成器对象上调用next()方法来恢复执行 此时的yield关键字有点像函数的中间返回语句，它生成的值会出现在next()方法返回的对象里 通过yield关键字退出的生成器函数会处在done: false状态；通过return关键字退出的生成器函数会处于done: true状态。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>function* generatorFn() {  </span></span>
<span class="line"><span>    yield &#39;foo&#39;; </span></span>
<span class="line"><span>    yield &#39;bar&#39;;   </span></span>
<span class="line"><span>    return &#39;baz&#39;; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>let generatorObject = generatorFn(); </span></span>
<span class="line"><span>console.log(generatorObject.next());  // { done: false, value: &#39;foo&#39; } </span></span>
<span class="line"><span>console.log(generatorObject.next());  // { done: false, value: &#39;bar&#39; } </span></span>
<span class="line"><span>console.log(generatorObject.next());  // { done: true, value: &#39;baz&#39; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="使用yield实现输入和输出" tabindex="-1">使用yield实现输入和输出 <a class="header-anchor" href="#使用yield实现输入和输出" aria-label="Permalink to &quot;使用yield实现输入和输出&quot;">​</a></h4><p>除了可以作为函数的中间返回语句使用，yield关键字还可以作为函数的中间参数使用。上一次让生成器函数暂停的yield关键字会接收到传给next()方法的第一个值。这里有个地方不太好理解——第一次调用next()传入的值不会被使用，因为这一次调用是为了开始执行生成器函数：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>function* generatorFn(initial) {   </span></span>
<span class="line"><span>    console.log(initial);    </span></span>
<span class="line"><span>    console.log(yield);   </span></span>
<span class="line"><span>    console.log(yield); </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>let generatorObject = generatorFn(&#39;foo&#39;); </span></span>
<span class="line"><span>generatorObject.next(&#39;bar&#39;);  // foo </span></span>
<span class="line"><span>generatorObject.next(&#39;baz&#39;);  // baz </span></span>
<span class="line"><span>generatorObject.next(&#39;qux&#39;);  // qux</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>yield关键字可以同时用于输入和输出，如下例所示：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>function* generatorFn() {  </span></span>
<span class="line"><span>    return yield &#39;foo&#39;; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>let generatorObject = generatorFn(); </span></span>
<span class="line"><span>console.log(generatorObject.next());       // { done: false, value: &#39;foo&#39;} </span></span>
<span class="line"><span>console.log(generatorObject.next(&#39;bar&#39;));  // { done: true, value: &#39;bar&#39; }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="产生可迭代对象" tabindex="-1">产生可迭代对象 <a class="header-anchor" href="#产生可迭代对象" aria-label="Permalink to &quot;产生可迭代对象&quot;">​</a></h4><p>使用星号增强yield的行为，让它能够迭代一个可迭代对象，从而一次产出一个值</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>function* generatorFn() { </span></span>
<span class="line"><span>    yield* [1, 2, 3]; </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>let generatorObject = generatorFn(); </span></span>
<span class="line"><span>for (const x of generatorFn()) {   </span></span>
<span class="line"><span>    console.log(x); </span></span>
<span class="line"><span>} // 1 // 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="使用yield-实现递归算法" tabindex="-1">使用yield*实现递归算法 <a class="header-anchor" href="#使用yield-实现递归算法" aria-label="Permalink to &quot;使用yield*实现递归算法&quot;">​</a></h4><p>yield*最有用的地方是实现递归操作，此时生成器可以产生自身。看下面的例子：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>function* nTimes(n) {   </span></span>
<span class="line"><span>    if (n &gt; 0) {  </span></span>
<span class="line"><span>        yield* nTimes(n - 1); </span></span>
<span class="line"><span>        yield n - 1;   </span></span>
<span class="line"><span>    } </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>for (const x of nTimes(3)) {   </span></span>
<span class="line"><span>    console.log(x); </span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>// 0 </span></span>
<span class="line"><span>// 1 </span></span>
<span class="line"><span>// 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="提前终止生成器" tabindex="-1">提前终止生成器 <a class="header-anchor" href="#提前终止生成器" aria-label="Permalink to &quot;提前终止生成器&quot;">​</a></h4><p>可选的return()方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个方法：throw() return不可恢复 throw可恢复</p>`,30)])])}const m=s(l,[["render",r]]);export{d as __pageData,m as default};
