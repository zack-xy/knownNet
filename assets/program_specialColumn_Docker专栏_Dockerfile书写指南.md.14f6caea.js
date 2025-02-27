import{_ as s,c as a,o as n,a as p}from"./app.cf1ad779.js";const h=JSON.parse('{"title":"Dockerfile书写指南","description":"","frontmatter":{"title":"Dockerfile书写指南","author":"Zack Zheng","date":"2025/01/03 09:53","categories":["Docker专栏"],"tags":["Docker"]},"headers":[],"relativePath":"program/specialColumn/Docker专栏/Dockerfile书写指南.md","lastUpdated":1735883652000}'),l={name:"program/specialColumn/Docker专栏/Dockerfile书写指南.md"},e=p(`<h4 id="run执行指令" tabindex="-1">RUN执行指令 <a class="header-anchor" href="#run执行指令" aria-hidden="true">#</a></h4><ol><li>指令写一行，也就是一个run，通过&amp;&amp;连接指令，多个RUN会导致镜像多层，体积大</li></ol><h4 id="文件复制和目录操作" tabindex="-1">文件复制和目录操作 <a class="header-anchor" href="#文件复制和目录操作" aria-hidden="true">#</a></h4><p><code>COPY</code>和<code>ADD</code>都可以把本地的一个文件复制到镜像里，如果目标目录不存在，自动创建</p><p><code>ADD</code>如果复制一个gzip等压缩文件的话，会自动解压缩</p><p><code>WORKDIR</code>用于目录切换:<code>WORKFIR /app</code>就是切换到app目录(目录不存在自动创建)</p><h4 id="构建参数和环境变量-arg-vs-env" tabindex="-1">构建参数和环境变量(ARG vs ENV) <a class="header-anchor" href="#构建参数和环境变量-arg-vs-env" aria-hidden="true">#</a></h4><p>二者都可以用来设置变量</p><h5 id="env" tabindex="-1">ENV <a class="header-anchor" href="#env" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM ubuntu:20.04</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV VERSION=2.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    apt-get install -y wget &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    wget https://github.com/ipinfo/cli/releases/download/ipinfo-\${VERSION}/ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar zxf ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    mv ipinfo_\${VERSION}_linux_amd64 /usr/bin/ipinfo &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    rm -rf ipinfo_\${VERSION}_linux_amd64.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM ubuntu:20.04</span></span>
<span class="line"><span style="color:#abb2bf;">ENV VERSION=2.0.1</span></span>
<span class="line"><span style="color:#abb2bf;">RUN apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    apt-get install -y wget &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    wget https://github.com/ipinfo/cli/releases/download/ipinfo-\${VERSION}/ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    tar zxf ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    mv ipinfo_\${VERSION}_linux_amd64 /usr/bin/ipinfo &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    rm -rf ipinfo_\${VERSION}_linux_amd64.tar.gz</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="arg" tabindex="-1">ARG <a class="header-anchor" href="#arg" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM ubuntu:20.04</span></span>
<span class="line"><span style="color:#A6ACCD;">ARG VERSION=2.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    apt-get install -y wget &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    wget https://github.com/ipinfo/cli/releases/download/ipinfo-\${VERSION}/ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    tar zxf ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    mv ipinfo_\${VERSION}_linux_amd64 /usr/bin/ipinfo &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    rm -rf ipinfo_\${VERSION}_linux_amd64.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM ubuntu:20.04</span></span>
<span class="line"><span style="color:#abb2bf;">ARG VERSION=2.0.1</span></span>
<span class="line"><span style="color:#abb2bf;">RUN apt-get update &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    apt-get install -y wget &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    wget https://github.com/ipinfo/cli/releases/download/ipinfo-\${VERSION}/ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    tar zxf ipinfo_\${VERSION}_linux_amd64.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    mv ipinfo_\${VERSION}_linux_amd64 /usr/bin/ipinfo &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    rm -rf ipinfo_\${VERSION}_linux_amd64.tar.gz</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-hidden="true">#</a></h5><ul><li>ARG作用范围是Dockerfile和构建镜像的过程中（在build的时候可以动态指定值<code>--build-arg VERSION=2.0.0</code>）</li><li>ENV作用范围是构建镜像和容器中(ENV作为环境变量保存在容器中)</li></ul><h4 id="cmd容器启动命令" tabindex="-1">CMD容器启动命令 <a class="header-anchor" href="#cmd容器启动命令" aria-hidden="true">#</a></h4><p>CMD可以用来设置容器启动时默认会执行的命令</p><ul><li>容器启动时默认执行的命令</li><li>如果docker container run启动容器时指定了其他命令，则CMD命令会被忽略</li><li>如果定义了多个CMD，只有最后一个会被执行(<code>CMD [&quot;ipinfo&quot;]</code>, 也可以写成<code>CMD[]</code>因为没有指定命令，所以在运行容器时，需要指定命令，否则报错)</li></ul><p>比如ipinfo这个镜像里面写了<code>CMD[]</code><br><code>docker container run --rm -it ipinfo ipinfo 8.8.8.8</code><br><code>--rm</code>表示运行完删除容器<br><code>-it</code>表示进入交互式<br> 第一个<code>ipinfo</code>镜像的名字<br> 第二个<code>ipinfo</code>是指定的命令<br><code>8.8.8.8</code>是命令的参数</p><h4 id="容器启动命令entrypoint" tabindex="-1">容器启动命令ENTRYPOINT <a class="header-anchor" href="#容器启动命令entrypoint" aria-hidden="true">#</a></h4><p>ENTRYPOINT也可以设置容器启动时要执行的命令</p><h5 id="区别-1" tabindex="-1">区别： <a class="header-anchor" href="#区别-1" aria-hidden="true">#</a></h5><ul><li><code>CMD</code>设置的命令，可以在docker container run时传入其他的命令覆盖CMD，但是<code>ENTRYPOINT</code>设置的命令一定会执行</li><li><code>ENTRYPOINT</code>和<code>CMD</code>可以联合使用，<code>ENTRYPOINT</code>设置执行的命令，<code>CMD</code>传递参数</li></ul><p>联合使用的例子:</p><div class="language-dockerfile line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM ubuntu:21.04</span></span>
<span class="line"><span style="color:#A6ACCD;">ENTRYPOINT [&quot;echo&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM ubuntu:21.04</span></span>
<span class="line"><span style="color:#abb2bf;">ENTRYPOINT [&quot;echo&quot;]</span></span>
<span class="line"><span style="color:#abb2bf;">CMD []</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="shell格式和exec格式" tabindex="-1">Shell格式和Exec格式 <a class="header-anchor" href="#shell格式和exec格式" aria-hidden="true">#</a></h5><p>CMD和ENTRYPOINT都支持shell格式和Exec(可执行命令)格式</p><ul><li><p>Shell格式</p><p><code>CMD echo &quot;hello docker&quot;</code></p><p><code>ENTRYPOINT echo &quot;hello docker&quot;</code></p><div class="language-dockerfile line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM ubuntu:21.04</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV NAME=docker</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD echo &quot;hello $NAME&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM ubuntu:21.04</span></span>
<span class="line"><span style="color:#abb2bf;">ENV NAME=docker</span></span>
<span class="line"><span style="color:#abb2bf;">CMD echo &quot;hello $NAME&quot;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>Exec格式</p><p><code>ENTRYPOINT [&quot;echo&quot;, &quot;hello docker&quot;]</code></p><p><code>CMD [&quot;echo&quot;, &quot;hello docker&quot;]</code></p></li></ul><p>​ 上面的第三种shell需要改写如下：</p><div class="language-dockerfile line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM ubuntu:21.04</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV NAME=docker</span></span>
<span class="line"><span style="color:#A6ACCD;">CMD [&quot;sh&quot;, &quot;-c&quot;, &quot;echo hello $NAME&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM ubuntu:21.04</span></span>
<span class="line"><span style="color:#abb2bf;">ENV NAME=docker</span></span>
<span class="line"><span style="color:#abb2bf;">CMD [&quot;sh&quot;, &quot;-c&quot;, &quot;echo hello $NAME&quot;]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="合理应用缓存" tabindex="-1">合理应用缓存 <a class="header-anchor" href="#合理应用缓存" aria-hidden="true">#</a></h4><p>不经常改变的放在前面，经常改动的放在后面（因为改动后，从改动的语句开始，后面的语句都不会使用缓存）</p><p>比如：</p><p><code>COPY app.py /src/app.py</code>这一句可以放在<code>RUN pip install flask</code>后面</p><p>因为app.py文件经常改动，pip install flask可以应用缓存</p><h4 id="dockerignore" tabindex="-1">dockerignore <a class="header-anchor" href="#dockerignore" aria-hidden="true">#</a></h4><p><code>docker image build -t flask-demo .</code></p><p>最后的.表示当前目录，会把当前目录的所有东西都作为上下文传给Docker守护进程，如果这个目录里有些在构建镜像时不需要的很大很多的文件，那么构建的时间就会很长</p><p>可以创建<code>.dockerignore</code>文件忽略不需要的文件\\夹</p><h4 id="镜像的多阶段构建" tabindex="-1">镜像的多阶段构建 <a class="header-anchor" href="#镜像的多阶段构建" aria-hidden="true">#</a></h4><p>镜像中不需要编译的环境，只需要编译的结果</p><p>两个阶段：</p><p>阶段1: 编译c代码，起名builder</p><p>阶段2: --from=builder, 运行c代码</p><div class="language-dockerfile line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM gcc:9.4 AS builder</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COPY hello.c /src/hello.c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR /src</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RUN gcc --static -o hello hello.c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">FROM alpine:3.13.5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COPY --from=builder /src/hello /src/hello</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ENTRYPOINT [ &quot;/src/hello&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CMD []</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM gcc:9.4 AS builder</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">COPY hello.c /src/hello.c</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">WORKDIR /src</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">RUN gcc --static -o hello hello.c</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">FROM alpine:3.13.5</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">COPY --from=builder /src/hello /src/hello</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">ENTRYPOINT [ &quot;/src/hello&quot; ]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">CMD []</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="尽量使用非root用户" tabindex="-1">尽量使用非root用户 <a class="header-anchor" href="#尽量使用非root用户" aria-hidden="true">#</a></h4><ul><li><p>通过<code>groupadd</code>和<code>useradd</code>创建一个flask的组和用户</p></li><li><p>通过USER指定后面的命令要以flask这个用户的身份运行</p><p>（如下useradd的第一个flask就是groupadd创建的系统组flask，后一个flask表示用户flask）</p></li></ul><div class="language-dockerfile line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">FROM python:3.9.5-slim</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RUN pip install flask &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    groupadd -r flask &amp;&amp; useradd -r -g flask flask &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    mkdir /src &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    chown -R flask:flask /src</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">USER flask</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COPY app.py /src/app.py</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR /src</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV FLASK_APP=app.py</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">EXPOSE 5000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CMD [&quot;flask&quot;, &quot;run&quot;, &quot;-h&quot;, &quot;0.0.0.0&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">FROM python:3.9.5-slim</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">RUN pip install flask &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    groupadd -r flask &amp;&amp; useradd -r -g flask flask &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    mkdir /src &amp;&amp; \\</span></span>
<span class="line"><span style="color:#abb2bf;">    chown -R flask:flask /src</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">USER flask</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">COPY app.py /src/app.py</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">WORKDIR /src</span></span>
<span class="line"><span style="color:#abb2bf;">ENV FLASK_APP=app.py</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">EXPOSE 5000</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">CMD [&quot;flask&quot;, &quot;run&quot;, &quot;-h&quot;, &quot;0.0.0.0&quot;]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,47),o=[e];function c(r,i,t,b,d,u){return n(),a("div",null,o)}const C=s(l,[["render",c]]);export{h as __pageData,C as default};
