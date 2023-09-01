import{_ as s,c as n,o as a,a as l}from"./app.784ef28d.js";const C=JSON.parse('{"title":"配置项目git提交规范（约定式提交）","description":"","frontmatter":{"title":"配置项目git提交规范（约定式提交）","author":"Zack Zheng","date":"2023/07/10 00:00","categories":["git"],"tags":["规范","git"]},"headers":[],"relativePath":"program/pieces/2023/07/10/配置项目git提交规范.md","lastUpdated":1689318007000}'),p={name:"program/pieces/2023/07/10/配置项目git提交规范.md"},e=l(`<p><a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noreferrer">什么是约定式提交规范</a></p><p>提交的信息大致规范是这样：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">&lt;类型&gt;[可选 范围]: &lt;描述&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[可选 正文]</span></span>
<span class="line"><span style="color:#A6ACCD;">[可选 脚注]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">&lt;类型&gt;[可选 范围]: &lt;描述&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">[可选 正文]</span></span>
<span class="line"><span style="color:#abb2bf;">[可选 脚注]</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>手动写这样的描述基本上是不切实际的，所以要配置自动化生成</p><hr><ol><li><p>全局安装Commitizen</p><p><code>npm install -g commitizen</code></p></li><li><p>安装和配置cz-customizable插件</p><p>2.1. 安装cz-customizable</p><p><code>pnpm add cz-customizable@7.0.0 -D</code></p><p>2.2. 在package.json中添加配置</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">....</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;config&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;path&quot;: &quot;node_modules/cz-customizable&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">....</span></span>
<span class="line"><span style="color:#abb2bf;">&quot;config&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">	&quot;commitizen&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">		&quot;path&quot;: &quot;node_modules/cz-customizable&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">	}</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>根目录下创建.cz-config.js自定义提示文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  types: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;feat&#39;, name: &#39;feat:     A new feature&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;fix&#39;, name: &#39;fix:      A bug fix&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;docs&#39;, name: &#39;docs:     Documentation only changes&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;style&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;style:    Changes that do not affect the meaning of the code\\n            (white-space, formatting, missing semi-colons, etc)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;refactor: A code change that neither fixes a bug nor adds a feature&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;perf&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;perf:     A code change that improves performance&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;test&#39;, name: &#39;test:     Adding missing tests&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &#39;chore&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;chore:    Changes to the build process or auxiliary tools\\n            and libraries such as documentation generation&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;revert&#39;, name: &#39;revert:   Revert to a commit&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;WIP&#39;, name: &#39;WIP:      Work in progress&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 范围</span></span>
<span class="line"><span style="color:#A6ACCD;">  scopes: [{ name: &#39;blogs&#39; }, { name: &#39;books&#39; }, { name: &#39;program&#39; }, { name: &#39;config&#39; }],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG</span></span>
<span class="line"><span style="color:#A6ACCD;">  allowTicketNumber: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  isTicketNumberRequired: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ticketNumberPrefix: &#39;TICKET-&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ticketNumberRegExp: &#39;\\\\d{1,5}&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // it needs to match the value for field type. Eg.: &#39;fix&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  /*</span></span>
<span class="line"><span style="color:#A6ACCD;">  scopeOverrides: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    fix: [</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      {name: &#39;merge&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">      {name: &#39;style&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">      {name: &#39;e2eTest&#39;},</span></span>
<span class="line"><span style="color:#A6ACCD;">      {name: &#39;unitTest&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  */</span></span>
<span class="line"><span style="color:#A6ACCD;">  // override the messages, defaults are as follows</span></span>
<span class="line"><span style="color:#A6ACCD;">  messages: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &quot;Select the type of change that you&#39;re committing:&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    scope: &#39;\\nDenote the SCOPE of this change (optional):&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // used if allowCustomScopes is true</span></span>
<span class="line"><span style="color:#A6ACCD;">    customScope: &#39;Denote the SCOPE of this change(optional):&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    subject: &#39;Write a SHORT, IMPERATIVE tense description of the change:\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    body: &#39;Provide a LONGER description of the change (optional). Use &quot;|&quot; to break new line:\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    breaking: &#39;List any BREAKING CHANGES (optional):\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    footer: &#39;List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\\n&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    confirmCommit: &#39;Are you sure you want to proceed with the commit above?(Y/N)&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  allowCustomScopes: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // skip any questions you want(要跳过的步骤)</span></span>
<span class="line"><span style="color:#A6ACCD;">  skipQuestions: [&#39;scope&#39;, &#39;customScope&#39;, &#39;body&#39;, &#39;breaking&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // limit subject length(提交描述的限制长度)</span></span>
<span class="line"><span style="color:#A6ACCD;">  subjectLimit: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // breaklineChar: &#39;|&#39;, // It is supported for fields body and footer.</span></span>
<span class="line"><span style="color:#A6ACCD;">  // footerPrefix : &#39;ISSUES CLOSED:&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // askForBreakingChangeFirst : true, // default is false</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">module.exports = {</span></span>
<span class="line"><span style="color:#abb2bf;">  types: [</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;feat&#39;, name: &#39;feat:     A new feature&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;fix&#39;, name: &#39;fix:      A bug fix&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;docs&#39;, name: &#39;docs:     Documentation only changes&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    {</span></span>
<span class="line"><span style="color:#abb2bf;">      value: &#39;style&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      name: &#39;style:    Changes that do not affect the meaning of the code\\n            (white-space, formatting, missing semi-colons, etc)&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    {</span></span>
<span class="line"><span style="color:#abb2bf;">      value: &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      name: &#39;refactor: A code change that neither fixes a bug nor adds a feature&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    {</span></span>
<span class="line"><span style="color:#abb2bf;">      value: &#39;perf&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      name: &#39;perf:     A code change that improves performance&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;test&#39;, name: &#39;test:     Adding missing tests&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    {</span></span>
<span class="line"><span style="color:#abb2bf;">      value: &#39;chore&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      name: &#39;chore:    Changes to the build process or auxiliary tools\\n            and libraries such as documentation generation&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;revert&#39;, name: &#39;revert:   Revert to a commit&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;WIP&#39;, name: &#39;WIP:      Work in progress&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">  ],</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">  // 范围</span></span>
<span class="line"><span style="color:#abb2bf;">  scopes: [{ name: &#39;blogs&#39; }, { name: &#39;books&#39; }, { name: &#39;program&#39; }, { name: &#39;config&#39; }],</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG</span></span>
<span class="line"><span style="color:#abb2bf;">  allowTicketNumber: false,</span></span>
<span class="line"><span style="color:#abb2bf;">  isTicketNumberRequired: false,</span></span>
<span class="line"><span style="color:#abb2bf;">  ticketNumberPrefix: &#39;TICKET-&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">  ticketNumberRegExp: &#39;\\\\d{1,5}&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">  // it needs to match the value for field type. Eg.: &#39;fix&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">  /*</span></span>
<span class="line"><span style="color:#abb2bf;">  scopeOverrides: {</span></span>
<span class="line"><span style="color:#abb2bf;">    fix: [</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">      {name: &#39;merge&#39;},</span></span>
<span class="line"><span style="color:#abb2bf;">      {name: &#39;style&#39;},</span></span>
<span class="line"><span style="color:#abb2bf;">      {name: &#39;e2eTest&#39;},</span></span>
<span class="line"><span style="color:#abb2bf;">      {name: &#39;unitTest&#39;}</span></span>
<span class="line"><span style="color:#abb2bf;">    ]</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  */</span></span>
<span class="line"><span style="color:#abb2bf;">  // override the messages, defaults are as follows</span></span>
<span class="line"><span style="color:#abb2bf;">  messages: {</span></span>
<span class="line"><span style="color:#abb2bf;">    type: &quot;Select the type of change that you&#39;re committing:&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">    scope: &#39;\\nDenote the SCOPE of this change (optional):&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    // used if allowCustomScopes is true</span></span>
<span class="line"><span style="color:#abb2bf;">    customScope: &#39;Denote the SCOPE of this change(optional):&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    subject: &#39;Write a SHORT, IMPERATIVE tense description of the change:\\n&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    body: &#39;Provide a LONGER description of the change (optional). Use &quot;|&quot; to break new line:\\n&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    breaking: &#39;List any BREAKING CHANGES (optional):\\n&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    footer: &#39;List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\\n&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    confirmCommit: &#39;Are you sure you want to proceed with the commit above?(Y/N)&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">  allowCustomScopes: true,</span></span>
<span class="line"><span style="color:#abb2bf;">  allowBreakingChanges: [&#39;feat&#39;, &#39;fix&#39;],</span></span>
<span class="line"><span style="color:#abb2bf;">  // skip any questions you want(要跳过的步骤)</span></span>
<span class="line"><span style="color:#abb2bf;">  skipQuestions: [&#39;scope&#39;, &#39;customScope&#39;, &#39;body&#39;, &#39;breaking&#39;, &#39;footer&#39;],</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;">  // limit subject length(提交描述的限制长度)</span></span>
<span class="line"><span style="color:#abb2bf;">  subjectLimit: 100,</span></span>
<span class="line"><span style="color:#abb2bf;">  // breaklineChar: &#39;|&#39;, // It is supported for fields body and footer.</span></span>
<span class="line"><span style="color:#abb2bf;">  // footerPrefix : &#39;ISSUES CLOSED:&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">  // askForBreakingChangeFirst : true, // default is false</span></span>
<span class="line"><span style="color:#abb2bf;">};</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><p>下面这个文件是基本解释，使用上面的一般模板</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">// 配置解释</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 可选类型</span></span>
<span class="line"><span style="color:#A6ACCD;">  types: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;feat&#39;, name: &#39;feat: 新功能&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;fix&#39;, name: &#39;fix: 修复&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;docs&#39;, name: &#39;docs: 文档变更&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;style&#39;, name: &#39;style: 代码格式&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;refactor&#39;, name: &#39;refactor: 重构&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;perf&#39;, name: &#39;perf: 性能优化&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;test&#39;, name: &#39;test: 增加测试&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;chore&#39;, name: &#39;chore: 构建过程或辅助工具的变动&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;revert&#39;, name: &#39;revert: 回退&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;build&#39;, name: &#39;build: 打包&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">    { value: &#39;wip&#39;, name: &#39;WIP:      Work in progress&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 消息步骤</span></span>
<span class="line"><span style="color:#A6ACCD;">  messages: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;请选择提交类型:&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    customScope: &#39;请输入修改范围(可选):&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    subject: &#39;请简要描述提交(必填):&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    body: &#39;请输入详细描述(可选):&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    footer: &#39;请选择要关闭的issue(可选):&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    confirmCommit: &#39;确认使用以上信息提交?(y/n)&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 跳过问题</span></span>
<span class="line"><span style="color:#A6ACCD;">  skipQuestions: [&#39;body&#39;,&#39;footer&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // subject文字长度默认为72</span></span>
<span class="line"><span style="color:#A6ACCD;">  subjectLimit: 72</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">// 配置解释</span></span>
<span class="line"><span style="color:#abb2bf;">module.exports = {</span></span>
<span class="line"><span style="color:#abb2bf;">  // 可选类型</span></span>
<span class="line"><span style="color:#abb2bf;">  types: [</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;feat&#39;, name: &#39;feat: 新功能&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;fix&#39;, name: &#39;fix: 修复&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;docs&#39;, name: &#39;docs: 文档变更&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;style&#39;, name: &#39;style: 代码格式&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;refactor&#39;, name: &#39;refactor: 重构&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;perf&#39;, name: &#39;perf: 性能优化&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;test&#39;, name: &#39;test: 增加测试&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;chore&#39;, name: &#39;chore: 构建过程或辅助工具的变动&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;revert&#39;, name: &#39;revert: 回退&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;build&#39;, name: &#39;build: 打包&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">    { value: &#39;wip&#39;, name: &#39;WIP:      Work in progress&#39; },</span></span>
<span class="line"><span style="color:#abb2bf;">  ],</span></span>
<span class="line"><span style="color:#abb2bf;">  // 消息步骤</span></span>
<span class="line"><span style="color:#abb2bf;">  messages: {</span></span>
<span class="line"><span style="color:#abb2bf;">    type: &#39;请选择提交类型:&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    customScope: &#39;请输入修改范围(可选):&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    subject: &#39;请简要描述提交(必填):&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    body: &#39;请输入详细描述(可选):&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    footer: &#39;请选择要关闭的issue(可选):&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">    confirmCommit: &#39;确认使用以上信息提交?(y/n)&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  // 跳过问题</span></span>
<span class="line"><span style="color:#abb2bf;">  skipQuestions: [&#39;body&#39;,&#39;footer&#39;],</span></span>
<span class="line"><span style="color:#abb2bf;">  // subject文字长度默认为72</span></span>
<span class="line"><span style="color:#abb2bf;">  subjectLimit: 72</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></li><li><p>使用<code>git cz</code>代替<code>git commit</code></p></li></ol><hr><p>现在，我们可以通过<code>git cz</code>生成提交信息，但是没有强制，依然可以手动提交其他信息</p><p>需要使用GitHooks限制提交</p><p>工具：commitlint+husky（commitlint校验提交信息，husky是git hook工具）</p><ol><li><p>安装commitlint</p><p><code>pnpm add @commitlint/config-conventional @commitlint/cli -D</code></p></li><li><p>创建commitlint.config.js文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 继承的规则</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 定义规则</span></span>
<span class="line"><span style="color:#A6ACCD;">  rules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // type的类型定义: 表示git提交的type必须在以下类型范围之内</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;type-enum&#39;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 当前验证错误级别</span></span>
<span class="line"><span style="color:#A6ACCD;">      2,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 在什么情况下进行验证</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;always&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 范型内容</span></span>
<span class="line"><span style="color:#A6ACCD;">      [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;feat&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;fix&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;docs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;style&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;perf&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;test&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;chore&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;revert&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;wip&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    // subject大小写不做校验 新版可能没有这个配置项了</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;subject-case&#39;: [0]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">module.exports = {</span></span>
<span class="line"><span style="color:#abb2bf;">  // 继承的规则</span></span>
<span class="line"><span style="color:#abb2bf;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#abb2bf;">  // 定义规则</span></span>
<span class="line"><span style="color:#abb2bf;">  rules: {</span></span>
<span class="line"><span style="color:#abb2bf;">    // type的类型定义: 表示git提交的type必须在以下类型范围之内</span></span>
<span class="line"><span style="color:#abb2bf;">    &#39;type-enum&#39;: [</span></span>
<span class="line"><span style="color:#abb2bf;">      // 当前验证错误级别</span></span>
<span class="line"><span style="color:#abb2bf;">      2,</span></span>
<span class="line"><span style="color:#abb2bf;">      // 在什么情况下进行验证</span></span>
<span class="line"><span style="color:#abb2bf;">      &#39;always&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      // 范型内容</span></span>
<span class="line"><span style="color:#abb2bf;">      [</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;feat&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;fix&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;docs&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;style&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;perf&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;test&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;chore&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;revert&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">        &#39;wip&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">      ]</span></span>
<span class="line"><span style="color:#abb2bf;">    ],</span></span>
<span class="line"><span style="color:#abb2bf;">    // subject大小写不做校验 新版可能没有这个配置项了</span></span>
<span class="line"><span style="color:#abb2bf;">    &#39;subject-case&#39;: [0]</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></li><li><p>安装husky</p><p><code>pnpm add husky -D</code></p></li><li><p>启动hooks，生成.husky文件夹</p><p><code>npx husky install</code></p></li><li><p>添加commitlint的hook到husky中</p></li></ol><p>​ <code>npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</code></p><hr><p>配置校验，使提交前，代码都要符合eslint规范</p><ol><li><p>安装lint-staged</p><p><code>pnpm add lint-staged -D</code></p></li><li><p>在pre-commit钩子里，添加eslint校验</p><p><code>npx husky add .husky/pre-commit &quot;npx eslint --ext .js,.vue src&quot;</code></p></li><li><p>配置自动eslint修复，使用lint-staged(只检查本次修改更新的代码)</p><p>2.1 添加package.json配置</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">&quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;src/**/*.{js,ts,tsx,vue,md}&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;eslint --cache --fix&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;git add&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">&quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#abb2bf;">	&quot;src/**/*.{js,ts,tsx,vue,md}&quot;: [</span></span>
<span class="line"><span style="color:#abb2bf;">		&quot;eslint --cache --fix&quot;,</span></span>
<span class="line"><span style="color:#abb2bf;">		&quot;git add&quot;</span></span>
<span class="line"><span style="color:#abb2bf;">	]</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>2.2 修改步骤1中pre-commit指令为：<code>npx lint-staged </code></p></li></ol>`,15),o=[e];function c(r,t,i,b,u,m){return a(),n("div",null,o)}const A=s(p,[["render",c]]);export{C as __pageData,A as default};
