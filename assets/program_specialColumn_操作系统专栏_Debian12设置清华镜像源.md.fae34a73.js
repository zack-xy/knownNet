import{_ as s,c as n,o as a,a as e}from"./app.883fd970.js";const d=JSON.parse('{"title":"设置Debian12清华镜像源","description":"","frontmatter":{"title":"设置Debian12清华镜像源","date":"2024-01-02T00:00:00.000Z","categories":["Debian"],"tags":["Debian"]},"headers":[],"relativePath":"program/specialColumn/操作系统专栏/Debian12设置清华镜像源.md","lastUpdated":1735867127000}'),p={name:"program/specialColumn/操作系统专栏/Debian12设置清华镜像源.md"},l=e(`<p><a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noreferrer">清华镜像地址</a></p><p>1、防止无法拉取HTTPS源</p><p><code>apt install apt-transport-https ca-certificates</code></p><p>2、修改<code>/etc/apt/sources.list.d/debian.sources</code>这个文件内容如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">Types: deb</span></span>
<span class="line"><span style="color:#A6ACCD;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian</span></span>
<span class="line"><span style="color:#A6ACCD;">Suites: bookworm bookworm-updates bookworm-backports</span></span>
<span class="line"><span style="color:#A6ACCD;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#A6ACCD;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span style="color:#A6ACCD;">Types: deb-src</span></span>
<span class="line"><span style="color:#A6ACCD;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian</span></span>
<span class="line"><span style="color:#A6ACCD;">Suites: bookworm bookworm-updates bookworm-backports</span></span>
<span class="line"><span style="color:#A6ACCD;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#A6ACCD;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换</span></span>
<span class="line"><span style="color:#A6ACCD;">Types: deb</span></span>
<span class="line"><span style="color:#A6ACCD;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian-security</span></span>
<span class="line"><span style="color:#A6ACCD;">Suites: bookworm-security</span></span>
<span class="line"><span style="color:#A6ACCD;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#A6ACCD;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Types: deb-src</span></span>
<span class="line"><span style="color:#A6ACCD;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian-security</span></span>
<span class="line"><span style="color:#A6ACCD;">Suites: bookworm-security</span></span>
<span class="line"><span style="color:#A6ACCD;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#A6ACCD;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">Types: deb</span></span>
<span class="line"><span style="color:#abb2bf;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian</span></span>
<span class="line"><span style="color:#abb2bf;">Suites: bookworm bookworm-updates bookworm-backports</span></span>
<span class="line"><span style="color:#abb2bf;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#abb2bf;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span style="color:#abb2bf;">Types: deb-src</span></span>
<span class="line"><span style="color:#abb2bf;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian</span></span>
<span class="line"><span style="color:#abb2bf;">Suites: bookworm bookworm-updates bookworm-backports</span></span>
<span class="line"><span style="color:#abb2bf;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#abb2bf;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"># 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换</span></span>
<span class="line"><span style="color:#abb2bf;">Types: deb</span></span>
<span class="line"><span style="color:#abb2bf;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian-security</span></span>
<span class="line"><span style="color:#abb2bf;">Suites: bookworm-security</span></span>
<span class="line"><span style="color:#abb2bf;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#abb2bf;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">Types: deb-src</span></span>
<span class="line"><span style="color:#abb2bf;">URIs: http://mirrors.tuna.tsinghua.edu.cn/debian-security</span></span>
<span class="line"><span style="color:#abb2bf;">Suites: bookworm-security</span></span>
<span class="line"><span style="color:#abb2bf;">Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span style="color:#abb2bf;">Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,5),r=[l];function o(i,c,t,b,u,y){return a(),n("div",null,r)}const C=s(p,[["render",o]]);export{d as __pageData,C as default};
