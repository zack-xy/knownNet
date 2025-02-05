import{_ as s,c as n,o as a,a as p}from"./app.3a254f68.js";const A=JSON.parse('{"title":"Java访问权限和注解","description":"","frontmatter":{"title":"Java访问权限和注解","author":"Zack Zheng","date":"2022/02/16 09:51","categories":["Java专栏"],"tags":["Java"]},"headers":[],"relativePath":"program/specialColumn/Java专栏/Java访问权限和注解.md","lastUpdated":1716899662000}'),l={name:"program/specialColumn/Java专栏/Java访问权限和注解.md"},e=p(`<p>注解：</p><p>@Override<br> @SuppressWarning(&quot;警告类别&quot;) // 忽略警告信息。<br> @SuppressWarning({&quot;警告类别1&quot;,&quot;警告类别2&quot;}) // 忽略多个警告类别。</p><hr><p>访问权限：从上到下依次渐小</p><p>public 任何地方可见<br> protected 仅在自己的包和自己的子类中可见 无修饰 仅在自己的包中可见 private 仅在自己的类中可见</p><p>只有public和无修饰符可以修饰顶级类（类可以嵌套，在最外面的称为顶级类） 一个Java文件里可以有多个顶级类，只能有一个public类（必须和文件名相同），其他顶级类无修饰符</p><hr><p>static修饰成员变量：类变量\\静态变量\\静态字段<br> 无static修饰的成员变量：实例变量(可以通过类名访问，也可以通过实例访问)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">public class Person {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private int age;</span></span>
<span class="line"><span style="color:#A6ACCD;">    private static int id;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">public class Person {</span></span>
<span class="line"><span style="color:#abb2bf;">    private int age;</span></span>
<span class="line"><span style="color:#abb2bf;">    private static int id;</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>static修饰方法：静态方法\\类方法<br> 内部不可以使用this<br> 不能直接访问实例变量和实例方法</p><p>静态导入，可以免写类</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">import static com.mj.other.Test.*;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 就不用写Test.age了，直接age就可以了</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">import static com.mj.other.Test.*;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 就不用写Test.age了，直接age就可以了</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><p>实例变量初始化：</p><ol><li>声明时给个默认值</li><li>构造函数中赋值</li><li>初始化块（类中大括号代码，每一次实例创建时都会执行，这部分代码编译器会把这个代码放在构造函数的最上面）</li></ol><p>类变量初始化：<br> 1.声明时给个默认值<br> 2.静态初始化块(类被第一次初始化被用时执行)</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">static {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 默认值代码</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">static {</span></span>
<span class="line"><span style="color:#abb2bf;">    // 默认值代码</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><p>单例模式：如果一个类设计为单例模式，则这个类只能创建一个实例</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">public class Rocket {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private static Rocket instance = new Rocket();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 构造方法私有化</span></span>
<span class="line"><span style="color:#A6ACCD;">    privte Rocket() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 公共的静态方法，返回唯一的那个实例</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static Rocket getInstance() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 第二种</span></span>
<span class="line"><span style="color:#A6ACCD;">public class Rocket2 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    private static Rocket instance = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    privte Rocket() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 这个方法线程不安全</span></span>
<span class="line"><span style="color:#A6ACCD;">    public static Rocket getInstance() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(instance == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            instance = new Rocket();</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">public class Rocket {</span></span>
<span class="line"><span style="color:#abb2bf;">    private static Rocket instance = new Rocket();</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    // 构造方法私有化</span></span>
<span class="line"><span style="color:#abb2bf;">    privte Rocket() {</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">    </span></span>
<span class="line"><span style="color:#abb2bf;">    // 公共的静态方法，返回唯一的那个实例</span></span>
<span class="line"><span style="color:#abb2bf;">    public static Rocket getInstance() {</span></span>
<span class="line"><span style="color:#abb2bf;">        return instance;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">// 第二种</span></span>
<span class="line"><span style="color:#abb2bf;">public class Rocket2 {</span></span>
<span class="line"><span style="color:#abb2bf;">    private static Rocket instance = null;</span></span>
<span class="line"><span style="color:#abb2bf;">    privte Rocket() {}</span></span>
<span class="line"><span style="color:#abb2bf;">    // 这个方法线程不安全</span></span>
<span class="line"><span style="color:#abb2bf;">    public static Rocket getInstance() {</span></span>
<span class="line"><span style="color:#abb2bf;">        if(instance == null) {</span></span>
<span class="line"><span style="color:#abb2bf;">            instance = new Rocket();</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">        return instance;</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr><p>final修饰的类：不能被继承<br> final修饰的方法：不能被重写<br> final修饰的变量：只能进行1次赋值</p><hr><p>嵌套类：嵌套类(跟实例关联，必须有实例才能用，可以访问外部类成员变量、方法)<br> 嵌套类实例：<code>外部类.new 内部类</code>，内部类有一个指针指向外部类，所以外部类实例一直不会销毁，直到所有的内部类实例都销毁了，说明没有引用外部类实例了，外部类实例才会销毁。 静态嵌套类：就是顶级类，只是类代码定义在另一个类中(可以访问外部类的私有实例变量和方法，不能访问实例变量和实例方法)</p><p>什么时候使用嵌套类：</p><ul><li>如果类A只使用在类C内部，考虑类C定义在类A中</li><li>如果类C经常访问类A的私有成员，考虑类C定义在类A中</li><li>经常访问非公共的实例成员，设计为内部类，否则设计为静态嵌套类(尽量静态，因为上面的引用原因)</li></ul><p>局部类：定义在代码块中的类<br> 只能访问final和有效final(如果一个变量只赋值了一次)的局部变量<br> 可以访问外部类的所有实例成员</p>`,27),c=[e];function r(o,i,t,b,u,C){return a(),n("div",null,c)}const d=s(l,[["render",r]]);export{A as __pageData,d as default};
