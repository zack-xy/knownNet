import{_ as s,c as n,o as a,a as e}from"./app.c94a9725.js";const y=JSON.parse('{"title":"js数组和weakmap","description":"","frontmatter":{"title":"js数组和weakmap","author":"Zack Zheng","date":"2022/11/09 09:51","categories":["大海拾遗"],"tags":["JavaScript"]},"headers":[{"level":2,"title":"集合引用类型","slug":"集合引用类型","link":"#集合引用类型","children":[]}],"relativePath":"program/pieces/2022/11/09/js数组和weakmap.md","lastUpdated":1676537933000}'),l={name:"program/pieces/2022/11/09/js数组和weakmap.md"},p=e(`<h2 id="集合引用类型" tabindex="-1">集合引用类型 <a class="header-anchor" href="#集合引用类型" aria-hidden="true">#</a></h2><h4 id="array" tabindex="-1">Array <a class="header-anchor" href="#array" aria-hidden="true">#</a></h4><p>from()：from()用于将类数组结构转换为数组实例 第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个length属性和可索引元素的结构 第二个可选的映射函数参数 of()：of()用于将一组参数转换为数组实例</p><h5 id="检测数组" tabindex="-1">检测数组 <a class="header-anchor" href="#检测数组" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">if (value instanceof Array){   </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 操作数组</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">if (value instanceof Array){   </span></span>
<span class="line"><span style="color:#abb2bf;">    // 操作数组</span></span>
<span class="line"><span style="color:#abb2bf;">} </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">if (Array.isArray(value)){   </span></span>
<span class="line"><span style="color:#A6ACCD;">     // 操作数组</span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">if (Array.isArray(value)){   </span></span>
<span class="line"><span style="color:#abb2bf;">     // 操作数组</span></span>
<span class="line"><span style="color:#abb2bf;">} </span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="迭代器方法" tabindex="-1">迭代器方法 <a class="header-anchor" href="#迭代器方法" aria-hidden="true">#</a></h5><p>keys()返回数组索引的迭代器，values()返回数组元素的迭代器，而entries()返回索引/值对的迭代器</p><h5 id="es6新增方法" tabindex="-1">ES6新增方法 <a class="header-anchor" href="#es6新增方法" aria-hidden="true">#</a></h5><p>copyWithin():按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">// 从ints中复制索引0开始的内容，插入到索引5开始的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">// 在源索引或目标索引到达数组边界时停止ints.copyWithin(5);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 从ints中复制索引0开始到索引3结束的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">// 插入到索引4开始的位置ints.copyWithin(4, 0, 3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">// 从ints中复制索引0开始的内容，插入到索引5开始的位置</span></span>
<span class="line"><span style="color:#abb2bf;">// 在源索引或目标索引到达数组边界时停止ints.copyWithin(5);</span></span>
<span class="line"><span style="color:#abb2bf;">// 从ints中复制索引0开始到索引3结束的内容</span></span>
<span class="line"><span style="color:#abb2bf;">// 插入到索引4开始的位置ints.copyWithin(4, 0, 3);</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>fill()：向一个已有的数组中插入全部或部分相同的值，第二个参数为索引，意为从索引开始，可以指定索引范围</p><h5 id="转换" tabindex="-1">转换 <a class="header-anchor" href="#转换" aria-hidden="true">#</a></h5><p>valueOf()返回的还是数组本身。而toString()返回由数组中每个值的等效字符串拼接而成的一个逗号分隔的字符串 join()方法接收一个参数，即字符串分隔符，返回包含所有项的字符串</p><h5 id="栈方法" tabindex="-1">栈方法 <a class="header-anchor" href="#栈方法" aria-hidden="true">#</a></h5><p>push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度。 pop()方法则用于删除数组的最后一项，同时减少数组的length值，返回被删除的项</p><h5 id="队列方法" tabindex="-1">队列方法 <a class="header-anchor" href="#队列方法" aria-hidden="true">#</a></h5><p>使用shift()和push()，可以把数组当成队列来使用 shift()，它会删除数组的第一项并返回它，然后数组长度减1 unshift()，数组开头添加任意多个值，然后返回新的数组长度</p><h5 id="排序方法" tabindex="-1">排序方法 <a class="header-anchor" href="#排序方法" aria-hidden="true">#</a></h5><p>reverse()方法就是将数组元素反向排列 sort()会按照这些数值的字符串形式重新排序 sort()方法可以接收一个比较函数，用于判断哪个值应该排在前面 如果第一个参数应该排在第二个参数前面，就返回负值；如果两个参数相等，就返回0；如果第一个参数应该排在第二个参数后面，就返回正值。 ⚠️注意reverse()和sort()都返回调用它们的数组的引用。(改变原数组)</p><h5 id="操作方法" tabindex="-1">操作方法 <a class="header-anchor" href="#操作方法" aria-hidden="true">#</a></h5><p>concat()方法可以在现有数组全部元素基础上创建一个新数组。会创建一个当前数组的副本 slice()用于创建一个包含原有数组中一个或多个元素的新数组 splice()，第一个参数索引，第二个删除删除个数，第三个参数插入个数，返回一个数组，包含从数组中被删除的元素 find()返回第一个匹配的元素,第二个可选的参数，用于指定断言函数内部this的值 findIndex()返回第一个匹配元素的索引,第二个可选的参数，用于指定断言函数内部this的值 every()：对数组每一项都运行传入的函数，如果对每一项函数都返回true，则这个方法返回true。 filter()：对数组每一项都运行传入的函数，函数返回true的项会组成数组之后返回。 forEach()：对数组每一项都运行传入的函数，没有返回值。 map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。 some()：对数组每一项都运行传入的函数，如果有一项函数返回true，则这个方法返回true。</p><h5 id="归并方法" tabindex="-1">归并方法 <a class="header-anchor" href="#归并方法" aria-hidden="true">#</a></h5><p>reduce():从数组第一项开始遍历到最后一项 reduceRight():从最后一项开始遍历至第一项 接收4个参数：上一个归并值、当前项、当前项的索引和数组本身</p><h4 id="定型数组" tabindex="-1">定型数组 <a class="header-anchor" href="#定型数组" aria-hidden="true">#</a></h4><h5 id="arraybuffer" tabindex="-1">ArrayBuffer <a class="header-anchor" href="#arraybuffer" aria-hidden="true">#</a></h5><p>ArrayBuffer是所有定型数组及视图引用的基本单位 ArrayBuffer()是一个普通的JavaScript构造函数，可用于在内存中分配特定数量的字节空间</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">const buf = new ArrayBuffer(16);  // 在内存中分配16字节</span></span>
<span class="line"><span style="color:#A6ACCD;">alert(buf.byteLength);            // 16</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">const buf = new ArrayBuffer(16);  // 在内存中分配16字节</span></span>
<span class="line"><span style="color:#abb2bf;">alert(buf.byteLength);            // 16</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h6 id="dataview" tabindex="-1">DataView <a class="header-anchor" href="#dataview" aria-hidden="true">#</a></h6><p>DataView视图专为文件I/O和网络I/O设计，其API支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView对缓冲内容没有任何预设，也不能迭代。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">const buf = new ArrayBuffer(16); // DataView默认使用整个ArrayBuffer </span></span>
<span class="line"><span style="color:#A6ACCD;">const fullDataView = new DataView(buf); </span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">const buf = new ArrayBuffer(16); // DataView默认使用整个ArrayBuffer </span></span>
<span class="line"><span style="color:#abb2bf;">const fullDataView = new DataView(buf); </span></span>
<span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;">.</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h4><p>方法： set() get() has() delete() clear()</p><h5 id="weakmap" tabindex="-1">WeakMap <a class="header-anchor" href="#weakmap" aria-hidden="true">#</a></h5><p>弱映射中的键只能是Object或者继承自Object的类型，尝试使用非对象设置键会抛出TypeError。值的类型没有限制 WeakMap中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，不会阻止垃圾回收。但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。只要键存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。 特点：</p><ol><li>没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性</li><li>无法清空，即不支持clear方法</li></ol><h4 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-hidden="true">#</a></h4><p>方法： add() has() delete() clear()</p><h5 id="集合操作" tabindex="-1">集合操作 <a class="header-anchor" href="#集合操作" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">class XSet extends Set {</span></span>
<span class="line"><span style="color:#A6ACCD;">    union (...sets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return XSet.union(this, ...sets)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    intersection (...sets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return XSet.intersection(this, ...sets);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    difference (set) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return XSet.difference(this, set);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    symmetricDifference (set) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return XSet.symmetricDifference(this, set);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    cartesianProduct (set) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return XSet.cartesianProduct(this, set);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    powerSet () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return XSet.powerSet(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回两个或更多集合的并集  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static union (a, ...bSets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const unionSet = new XSet(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (const b of bSets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (const bValue of b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                unionSet.add(bValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return unionSet;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回两个或更多集合的交集  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static intersection (a, ...bSets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const intersectionSet = new XSet(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (const aValue of intersectionSet) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (const b of bSets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (!b.has(aValue)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    intersectionSet.delete(aValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return intersectionSet;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回两个集合的差集  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static difference (a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const differenceSet = new XSet(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (const bValue of b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (a.has(bValue)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                differenceSet.delete(bValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return differenceSet;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回两个集合的对称差集  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static symmetricDifference (a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 按照定义，对称差集可以表达为    </span></span>
<span class="line"><span style="color:#A6ACCD;">        return a.union(b).difference(a.intersection(b));</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回两个集合（数组对形式）的笛卡儿积  </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 必须返回数组集合，因为笛卡儿积可能包含相同值的对  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static cartesianProduct (a, b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const cartesianProductSet = new XSet();</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (const aValue of a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (const bValue of b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                cartesianProductSet.add([aValue, bValue]);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return cartesianProductSet;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 返回一个集合的幂集  </span></span>
<span class="line"><span style="color:#A6ACCD;">    static powerSet (a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const powerSet = new XSet().add(new XSet());</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (const aValue of a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            for (const set of new XSet(powerSet)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                powerSet.add(new XSet(set).add(aValue));</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return powerSet;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro has-diff vp-code-light"><code><span class="line"><span style="color:#abb2bf;">class XSet extends Set {</span></span>
<span class="line"><span style="color:#abb2bf;">    union (...sets) {</span></span>
<span class="line"><span style="color:#abb2bf;">        return XSet.union(this, ...sets)</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    intersection (...sets) {</span></span>
<span class="line"><span style="color:#abb2bf;">        return XSet.intersection(this, ...sets);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    difference (set) {</span></span>
<span class="line"><span style="color:#abb2bf;">        return XSet.difference(this, set);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    symmetricDifference (set) {</span></span>
<span class="line"><span style="color:#abb2bf;">        return XSet.symmetricDifference(this, set);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    cartesianProduct (set) {</span></span>
<span class="line"><span style="color:#abb2bf;">        return XSet.cartesianProduct(this, set);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    powerSet () {</span></span>
<span class="line"><span style="color:#abb2bf;">        return XSet.powerSet(this);</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 返回两个或更多集合的并集  </span></span>
<span class="line"><span style="color:#abb2bf;">    static union (a, ...bSets) {</span></span>
<span class="line"><span style="color:#abb2bf;">        const unionSet = new XSet(a);</span></span>
<span class="line"><span style="color:#abb2bf;">        for (const b of bSets) {</span></span>
<span class="line"><span style="color:#abb2bf;">            for (const bValue of b) {</span></span>
<span class="line"><span style="color:#abb2bf;">                unionSet.add(bValue);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">        return unionSet;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 返回两个或更多集合的交集  </span></span>
<span class="line"><span style="color:#abb2bf;">    static intersection (a, ...bSets) {</span></span>
<span class="line"><span style="color:#abb2bf;">        const intersectionSet = new XSet(a);</span></span>
<span class="line"><span style="color:#abb2bf;">        for (const aValue of intersectionSet) {</span></span>
<span class="line"><span style="color:#abb2bf;">            for (const b of bSets) {</span></span>
<span class="line"><span style="color:#abb2bf;">                if (!b.has(aValue)) {</span></span>
<span class="line"><span style="color:#abb2bf;">                    intersectionSet.delete(aValue);</span></span>
<span class="line"><span style="color:#abb2bf;">                }</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">        return intersectionSet;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 返回两个集合的差集  </span></span>
<span class="line"><span style="color:#abb2bf;">    static difference (a, b) {</span></span>
<span class="line"><span style="color:#abb2bf;">        const differenceSet = new XSet(a);</span></span>
<span class="line"><span style="color:#abb2bf;">        for (const bValue of b) {</span></span>
<span class="line"><span style="color:#abb2bf;">            if (a.has(bValue)) {</span></span>
<span class="line"><span style="color:#abb2bf;">                differenceSet.delete(bValue);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">        return differenceSet;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 返回两个集合的对称差集  </span></span>
<span class="line"><span style="color:#abb2bf;">    static symmetricDifference (a, b) {</span></span>
<span class="line"><span style="color:#abb2bf;">        // 按照定义，对称差集可以表达为    </span></span>
<span class="line"><span style="color:#abb2bf;">        return a.union(b).difference(a.intersection(b));</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 返回两个集合（数组对形式）的笛卡儿积  </span></span>
<span class="line"><span style="color:#abb2bf;">    // 必须返回数组集合，因为笛卡儿积可能包含相同值的对  </span></span>
<span class="line"><span style="color:#abb2bf;">    static cartesianProduct (a, b) {</span></span>
<span class="line"><span style="color:#abb2bf;">        const cartesianProductSet = new XSet();</span></span>
<span class="line"><span style="color:#abb2bf;">        for (const aValue of a) {</span></span>
<span class="line"><span style="color:#abb2bf;">            for (const bValue of b) {</span></span>
<span class="line"><span style="color:#abb2bf;">                cartesianProductSet.add([aValue, bValue]);</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">        return cartesianProductSet;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    // 返回一个集合的幂集  </span></span>
<span class="line"><span style="color:#abb2bf;">    static powerSet (a) {</span></span>
<span class="line"><span style="color:#abb2bf;">        const powerSet = new XSet().add(new XSet());</span></span>
<span class="line"><span style="color:#abb2bf;">        for (const aValue of a) {</span></span>
<span class="line"><span style="color:#abb2bf;">            for (const set of new XSet(powerSet)) {</span></span>
<span class="line"><span style="color:#abb2bf;">                powerSet.add(new XSet(set).add(aValue));</span></span>
<span class="line"><span style="color:#abb2bf;">            }</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">        return powerSet;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h5 id="weakset" tabindex="-1">WeakSet <a class="header-anchor" href="#weakset" aria-hidden="true">#</a></h5><p>弱集合中的值只能是Object或者继承自Object的类型 不可迭代</p>`,42),r=[p];function c(t,o,i,b,u,d){return a(),n("div",null,r)}const A=s(l,[["render",c]]);export{y as __pageData,A as default};
