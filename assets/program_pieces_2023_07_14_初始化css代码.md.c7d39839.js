import{_ as s,c as n,o as a,a as l}from"./app.fb8f0e40.js";const B=JSON.parse('{"title":"初始化css代码","description":"","frontmatter":{"title":"初始化css代码","author":"Zack Zheng","date":"2023/07/14 00:00","categories":["CSS"],"tags":["CSS"]},"headers":[],"relativePath":"program/pieces/2023/07/14/初始化css代码.md","lastUpdated":1689324171000}'),p={name:"program/pieces/2023/07/14/初始化css代码.md"},e=l(`<p>初始化css即normalize.css</p><p><a href="https://github.com/necolas/normalize.css/blob/master/normalize.css" target="_blank" rel="noreferrer">源文件地址</a></p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Document</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Correct the line height in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Prevent adjustments of font size after orientation changes in iOS.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">html</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.15</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-text-size-adjust</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Sections</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the margin in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Render the \`main\` element consistently in IE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Correct the font size and margin on \`h1\` elements within \`section\` and</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`article\` contexts in Chrome, Firefox, and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.67em</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Grouping content</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Add the correct box sizing in Firefox.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Show the overflow in Edge and IE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">hr</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> content-box</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Correct the odd \`em\` font sizing in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">pre</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> monospace</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> monospace</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Text-level semantics</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the gray background on active links in IE 10.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Remove the bottom border in Chrome 57-</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">abbr</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> underline</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> underline dotted</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct font weight in Chrome, Edge, and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">b</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">strong</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bolder</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Correct the odd \`em\` font sizing in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">code</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">kbd</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">samp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> monospace</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> monospace</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct font size in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">small</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Prevent \`sub\` and \`sup\` elements from affecting the line height in</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sub</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">75%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> baseline</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sub</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-0.25em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-0.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Embedded content</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the border on images inside links in IE 10.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Forms</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Change the font styles in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Remove the margin in Firefox and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">optgroup</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">select</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">textarea</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.15</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Show the overflow in IE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Show the overflow in Edge.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the inheritance of text transform in Edge, Firefox, and IE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Remove the inheritance of text transform in Firefox.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> button</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the inner border and padding in Firefox.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-moz-focus-inner</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">-moz-focus-inner</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">-moz-focus-inner</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">-moz-focus-inner</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Restore the focus styles unset by the previous rule.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">-moz-focusring</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">-moz-focusring</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">reset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">-moz-focusring</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]:</span><span style="color:#C792EA;">-moz-focusring</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">outline</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> dotted ButtonText</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Correct the padding in Firefox.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fieldset</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.35em</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.75em</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.625em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Correct the text wrapping in Edge and IE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Correct the color inheritance from \`fieldset\` elements in IE.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 3. Remove the padding so developers are not caught out when they zero out</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *    \`fieldset\` elements in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">legend</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> table</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 3 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct vertical alignment in Chrome, Firefox, and Opera.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">progress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">vertical-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> baseline</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the default vertical scrollbar in IE 10+.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">textarea</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Add the correct box sizing in IE 10.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Remove the padding in IE 10.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">checkbox</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">radio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> border-box</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Correct the cursor style of increment and decrement buttons in Chrome.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">-webkit-inner-spin-button</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">-webkit-outer-spin-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Correct the odd appearance in Chrome and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Correct the outline style in Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> textfield</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">outline-offset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-2px</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Remove the inner padding in Chrome and Safari on macOS.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">-webkit-search-decoration</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1. Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2. Change font properties to \`inherit\` in Safari.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">-webkit-file-upload-button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">-webkit-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> button</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inherit</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Interactive</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct display in Edge, IE 10+, and Firefox.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">details</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct display in all browsers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">summary</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> list-item</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Misc</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct display in IE 10+.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Add the correct display in IE 10.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">hidden</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Document</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the line height in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Prevent adjustments of font size after orientation changes in iOS.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">1.15</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-text-size-adjust</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Sections</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the margin in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Render the \`main\` element consistently in IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the font size and margin on \`h1\` elements within \`section\` and</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * \`article\` contexts in Chrome, Firefox, and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0.67</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Grouping content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Add the correct box sizing in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Show the overflow in Edge and IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">hr</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-sizing: </span><span style="color:#D19A66;">content-box</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">visible</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the odd \`em\` font sizing in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">pre</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Text-level semantics</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the gray background on active links in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  background-color: </span><span style="color:#D19A66;">transparent</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Remove the bottom border in Chrome 57-</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">abbr</span><span style="color:#C678DD;">[</span><span style="color:#D19A66;">title</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-bottom: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-decoration: </span><span style="color:#D19A66;">underline</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-decoration: </span><span style="color:#D19A66;">underline</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dotted</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct font weight in Chrome, Edge, and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">strong</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-weight: </span><span style="color:#D19A66;">bolder</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the inheritance and scaling of font size in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the odd \`em\` font sizing in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">code</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">kbd</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">samp</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">monospace</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct font size in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">small</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">80</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Prevent \`sub\` and \`sup\` elements from affecting the line height in</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">sub</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">sup</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">75</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  vertical-align: </span><span style="color:#D19A66;">baseline</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">sub</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  bottom: </span><span style="color:#D19A66;">-0.25</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">sup</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  top: </span><span style="color:#D19A66;">-0.5</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Embedded content</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the border on images inside links in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">img</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Forms</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Change the font styles in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Remove the margin in Firefox and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">optgroup</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">select</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">textarea</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-family: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  line-height: </span><span style="color:#D19A66;">1.15</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Show the overflow in IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Show the overflow in Edge.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">input</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">visible</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the inheritance of text transform in Edge, Firefox, and IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Remove the inheritance of text transform in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">select</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  text-transform: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;reset&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: button;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the inner border and padding in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;reset&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-moz-focus-inner</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  border-style: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Restore the focus styles unset by the previous rule.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">button</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;button&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;reset&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;submit&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">:-moz-focusring</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  outline: </span><span style="color:#D19A66;">1</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">dotted</span><span style="color:#ABB2BF;"> </span><span style="color:#FFFFFF;">ButtonText</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the padding in Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">fieldset</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0.35</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.75</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0.625</span><span style="color:#E06C75;">em</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the text wrapping in Edge and IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the color inheritance from \`fieldset\` elements in IE.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 3. Remove the padding so developers are not caught out when they zero out</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *    \`fieldset\` elements in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">legend</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-sizing: </span><span style="color:#D19A66;">border-box</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">table</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  max-width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 3 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  white-space: </span><span style="color:#D19A66;">normal</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct vertical alignment in Chrome, Firefox, and Opera.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">progress</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  vertical-align: </span><span style="color:#D19A66;">baseline</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the default vertical scrollbar in IE 10+.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">textarea</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  overflow: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Add the correct box sizing in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Remove the padding in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;checkbox&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;radio&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  box-sizing: </span><span style="color:#D19A66;">border-box</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Correct the cursor style of increment and decrement buttons in Chrome.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;number&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-webkit-inner-spin-button</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;number&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-webkit-outer-spin-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  height: </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the odd appearance in Chrome and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Correct the outline style in Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;search&quot;</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: textfield; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  outline-offset: </span><span style="color:#D19A66;">-2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Remove the inner padding in Chrome and Safari on macOS.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;search&quot;</span><span style="color:#C678DD;">]</span><span style="color:#56B6C2;">::-webkit-search-decoration</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1. Correct the inability to style clickable types in iOS and Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2. Change font properties to \`inherit\` in Safari.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">::-webkit-file-upload-button</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">-webkit-appearance</span><span style="color:#ABB2BF;">: button; </span><span style="color:#7F848E;font-style:italic;">/* 1 */</span></span>
<span class="line"><span style="color:#ABB2BF;">  font: </span><span style="color:#D19A66;">inherit</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">/* 2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Interactive</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in Edge, IE 10+, and Firefox.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">details</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in all browsers.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">summary</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">list-item</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/* Misc</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">   ========================================================================== */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in IE 10+.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * Add the correct display in IE 10.</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">[</span><span style="color:#D19A66;">hidden</span><span style="color:#C678DD;">]</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br></div></div>`,3),o=[e];function t(c,r,i,y,F,D){return a(),n("div",null,o)}const C=s(p,[["render",t]]);export{B as __pageData,C as default};
