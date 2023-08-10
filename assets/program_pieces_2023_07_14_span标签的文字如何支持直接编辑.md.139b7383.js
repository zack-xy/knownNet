import{_ as s,c as n,o as a,a as l}from"./app.a25dc1ae.js";const A=JSON.parse('{"title":"span标签的文字如何支持直接编辑","description":"","frontmatter":{"title":"span标签的文字如何支持直接编辑","author":"Zack Zheng","date":"2023/07/14 00:00","categories":["HTML"],"tags":["HTML"]},"headers":[],"relativePath":"program/pieces/2023/07/14/span标签的文字如何支持直接编辑.md","lastUpdated":1689315829000}'),p={name:"program/pieces/2023/07/14/span标签的文字如何支持直接编辑.md"},e=l(`<p>声明contenteditable属性为true即可</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;span class=&quot;edit-div&quot; v-html=&quot;innerText&quot; :contenteditable=&quot;canEdit&quot; @focus=&quot;isLocked = true&quot; @blur=&quot;isLocked = false&quot; @input=&quot;changeText&quot; :placeholder=&quot;placeholder&quot; style=&quot;line-height:40px;cursor:pointer;&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;text/ecmascript-6&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;editSpan&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">      default: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    placeholder: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">      default: &#39;请输入&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    canEdit: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">      default: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  data () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      innerText: this.value,</span></span>
<span class="line"><span style="color:#A6ACCD;">      isLocked: false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    value () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!this.isLocked) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.innerText = this.value</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeText () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$emit(&#39;input&#39;, this.$el.innerHTML)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style lang=&quot;scss&quot; rel=&quot;stylesheet/scss&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .edit-div {</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: block;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 720px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin: auto;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 5px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    min-height: 10vh;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border: 1px solid #dedbdb;</span></span>
<span class="line"><span style="color:#A6ACCD;">    word-break: break-all;</span></span>
<span class="line"><span style="color:#A6ACCD;">    user-select: text;</span></span>
<span class="line"><span style="color:#A6ACCD;">    white-space: pre-wrap;</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: 12px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 2%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &amp;[contenteditable=&quot;true&quot;] {</span></span>
<span class="line"><span style="color:#A6ACCD;">      user-modify: read-write-plaintext-only;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &amp;:empty:before {</span></span>
<span class="line"><span style="color:#A6ACCD;">        content: attr(placeholder);</span></span>
<span class="line"><span style="color:#A6ACCD;">        display: inline-block;</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: #ccc;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><pre class="shiki one-dark-pro vp-code-light"><code><span class="line"><span style="color:#abb2bf;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;span class=&quot;edit-div&quot; v-html=&quot;innerText&quot; :contenteditable=&quot;canEdit&quot; @focus=&quot;isLocked = true&quot; @blur=&quot;isLocked = false&quot; @input=&quot;changeText&quot; :placeholder=&quot;placeholder&quot; style=&quot;line-height:40px;cursor:pointer;&quot;&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;/span&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;script type=&quot;text/ecmascript-6&quot;&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">export default {</span></span>
<span class="line"><span style="color:#abb2bf;">  name: &#39;editSpan&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">  props: {</span></span>
<span class="line"><span style="color:#abb2bf;">    value: {</span></span>
<span class="line"><span style="color:#abb2bf;">      type: String,</span></span>
<span class="line"><span style="color:#abb2bf;">      default: &#39;&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    placeholder: {</span></span>
<span class="line"><span style="color:#abb2bf;">      type: String,</span></span>
<span class="line"><span style="color:#abb2bf;">      default: &#39;请输入&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    canEdit: {</span></span>
<span class="line"><span style="color:#abb2bf;">      type: Boolean,</span></span>
<span class="line"><span style="color:#abb2bf;">      default: true</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  data () {</span></span>
<span class="line"><span style="color:#abb2bf;">    return {</span></span>
<span class="line"><span style="color:#abb2bf;">      innerText: this.value,</span></span>
<span class="line"><span style="color:#abb2bf;">      isLocked: false</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  watch: {</span></span>
<span class="line"><span style="color:#abb2bf;">    value () {</span></span>
<span class="line"><span style="color:#abb2bf;">      if (!this.isLocked) {</span></span>
<span class="line"><span style="color:#abb2bf;">        this.innerText = this.value</span></span>
<span class="line"><span style="color:#abb2bf;">      }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  methods: {</span></span>
<span class="line"><span style="color:#abb2bf;">    changeText () {</span></span>
<span class="line"><span style="color:#abb2bf;">      this.$emit(&#39;input&#39;, this.$el.innerHTML)</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;style lang=&quot;scss&quot; rel=&quot;stylesheet/scss&quot;&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  .edit-div {</span></span>
<span class="line"><span style="color:#abb2bf;">    display: block;</span></span>
<span class="line"><span style="color:#abb2bf;">    width: 720px;</span></span>
<span class="line"><span style="color:#abb2bf;">    margin: auto;</span></span>
<span class="line"><span style="color:#abb2bf;">    border-radius: 5px;</span></span>
<span class="line"><span style="color:#abb2bf;">    min-height: 10vh;</span></span>
<span class="line"><span style="color:#abb2bf;">    border: 1px solid #dedbdb;</span></span>
<span class="line"><span style="color:#abb2bf;">    word-break: break-all;</span></span>
<span class="line"><span style="color:#abb2bf;">    user-select: text;</span></span>
<span class="line"><span style="color:#abb2bf;">    white-space: pre-wrap;</span></span>
<span class="line"><span style="color:#abb2bf;">    font-size: 12px;</span></span>
<span class="line"><span style="color:#abb2bf;">    padding: 2%;</span></span>
<span class="line"><span style="color:#abb2bf;">    &amp;[contenteditable=&quot;true&quot;] {</span></span>
<span class="line"><span style="color:#abb2bf;">      user-modify: read-write-plaintext-only;</span></span>
<span class="line"><span style="color:#abb2bf;">      &amp;:empty:before {</span></span>
<span class="line"><span style="color:#abb2bf;">        content: attr(placeholder);</span></span>
<span class="line"><span style="color:#abb2bf;">        display: inline-block;</span></span>
<span class="line"><span style="color:#abb2bf;">        color: #ccc;</span></span>
<span class="line"><span style="color:#abb2bf;">      }</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  }</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div>`,2),c=[e];function t(o,r,b,i,u,y){return a(),n("div",null,c)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
