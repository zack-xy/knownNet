import{_ as s,c as n,o as a,a as e}from"./app.2ffd76d3.js";const q=JSON.parse('{"title":"Docker的网络","description":"","frontmatter":{"title":"Docker的网络","author":"Zack Zheng","date":"2025/01/03 16:30","categories":["Docker专栏"],"tags":["Docker"]},"headers":[],"relativePath":"program/specialColumn/Docker专栏/Docker的网络.md","lastUpdated":1736148670000}'),p={name:"program/specialColumn/Docker专栏/Docker的网络.md"},l=e(`<p>问题：</p><ul><li><p>1、容器为什么能获取到IP地址</p></li><li><p>2、为什么宿主机可以ping通容器的IP</p></li><li><p>3、为什么(同一宿主机)容器间的IP是互通的</p><p>bridge网桥:docker0 （相当于路由器）</p><p>查看: <code>docker network ls</code></p><p>查看详细信息： <code>docker network inspect network的ID </code></p><p>信息如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">.......</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;IPAM&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Driver&quot;: &quot;default&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Options&quot;: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;Config&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Subnet&quot;: &quot;172.17.0.0/16&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Gateway&quot;: &quot;172.17.0.1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">.......</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">.......</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;IPAM&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;Driver&quot;: &quot;default&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;Options&quot;: null,</span></span>
<span class="line"><span style="color:#abb2bf;">    &quot;Config&quot;: [</span></span>
<span class="line"><span style="color:#abb2bf;">        {</span></span>
<span class="line"><span style="color:#abb2bf;">            &quot;Subnet&quot;: &quot;172.17.0.0/16&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">            &quot;Gateway&quot;: &quot;172.17.0.1&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">        }</span></span>
<span class="line"><span style="color:#abb2bf;">    ]</span></span>
<span class="line"><span style="color:#abb2bf;">},</span></span>
<span class="line"><span style="color:#abb2bf;">.......</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>每个容器相当于一台台电脑，连接到docker0这个路由器上</p><ol><li><p>创建bridge: <code>docker network create -d bridge mybridge </code> (mybridge是bridge的名字)</p></li><li><p>使用bridge: <code>--network mybridge</code> (docker container run -d --rm --name box3 --network mybridge busybox)</p></li><li><p>让一个容器连2个bridge： <code>docker network connect bridge box3</code> (容器box3又连了bridge(默认的那个docker0))</p></li><li><p>取消一个bridge连接：<code>docker network disconnect bridge box3</code></p></li><li><p>⚠️注意⚠️：自定义的bridge（默认的bridge不行），同一个bridge的容器可以相互ping通容器的名字</p></li></ol></li><li><p>4、为什么容器能ping通外网</p><p>宿主机可以ping通外网，容器访问外网，先到docker0</p><p>经过NAT转换成eth0的ip出去，eth0是宿主机对外通信的</p><p>( NAT是用来解决IP4不够用的问题：私有ip地址 &lt;-----&gt; 公有ip地址 )</p></li><li><p>5、容器的端口转发是怎么回事</p></li></ul><p>​ -p 8080:80. =&gt; 8080是宿主机端口，80是容器端口</p><p>​ 宿主机如果是Linux，可以使用如下命令查看端口转发的配置</p><p>​ <code>sudo iptables -t nat -nvxL</code></p><p>​ (DNAT)</p><hr><h5 id="除了【bridge】还有【host】和【null】" tabindex="-1">除了【bridge】还有【host】和【null】 <a class="header-anchor" href="#除了【bridge】还有【host】和【null】" aria-hidden="true">#</a></h5><p>如果连接是【host】，就是容器和宿主机共享同一个网络。</p><p>【null】作为开发者不常用，连接到【null】意味着无法进行网络访问（第三方工具会使用）</p><hr><h5 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h5>`,12),o=[l];function r(t,c,i,b,d,u){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{q as __pageData,m as default};
