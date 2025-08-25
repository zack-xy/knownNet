import{_ as s,c as a,o as e,aG as p}from"./chunks/framework.Bwfhi3i_.js";const u=JSON.parse('{"title":"设置Debian12清华镜像源","description":"","frontmatter":{"title":"设置Debian12清华镜像源","date":"2024/01/02 00:00:00","categories":["Debian"],"tags":["Debian"]},"headers":[],"relativePath":"program/specialColumn/操作系统专栏/Debian12设置清华镜像源.md","filePath":"program/specialColumn/操作系统专栏/Debian12设置清华镜像源.md","lastUpdated":1740468438000}'),r={name:"program/specialColumn/操作系统专栏/Debian12设置清华镜像源.md"};function i(l,n,c,t,o,b){return e(),a("div",null,[...n[0]||(n[0]=[p(`<p><a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noreferrer">清华镜像地址</a></p><p>1、防止无法拉取HTTPS源</p><p><code>apt install apt-transport-https ca-certificates</code></p><p>2、修改<code>/etc/apt/sources.list.d/debian.sources</code>这个文件内容如下</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>Types: deb</span></span>
<span class="line"><span>URIs: http://mirrors.tuna.tsinghua.edu.cn/debian</span></span>
<span class="line"><span>Suites: bookworm bookworm-updates bookworm-backports</span></span>
<span class="line"><span>Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span>Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span></span>
<span class="line"><span>Types: deb-src</span></span>
<span class="line"><span>URIs: http://mirrors.tuna.tsinghua.edu.cn/debian</span></span>
<span class="line"><span>Suites: bookworm bookworm-updates bookworm-backports</span></span>
<span class="line"><span>Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span>Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换</span></span>
<span class="line"><span>Types: deb</span></span>
<span class="line"><span>URIs: http://mirrors.tuna.tsinghua.edu.cn/debian-security</span></span>
<span class="line"><span>Suites: bookworm-security</span></span>
<span class="line"><span>Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span>Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Types: deb-src</span></span>
<span class="line"><span>URIs: http://mirrors.tuna.tsinghua.edu.cn/debian-security</span></span>
<span class="line"><span>Suites: bookworm-security</span></span>
<span class="line"><span>Components: main contrib non-free non-free-firmware</span></span>
<span class="line"><span>Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,5)])])}const d=s(r,[["render",i]]);export{u as __pageData,d as default};
