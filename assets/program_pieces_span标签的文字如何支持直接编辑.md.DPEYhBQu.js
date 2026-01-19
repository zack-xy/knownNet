import{_ as n,c as a,o as p,aG as e}from"./chunks/framework.bL5-Nj3k.js";const o=JSON.parse('{"title":"span标签的文字如何支持直接编辑","description":"","frontmatter":{"title":"span标签的文字如何支持直接编辑","author":"Zack Zheng","date":"2023/07/14 00:01","categories":["HTML"],"tags":["HTML"]},"headers":[],"relativePath":"program/pieces/span标签的文字如何支持直接编辑.md","filePath":"program/pieces/span标签的文字如何支持直接编辑.md","lastUpdated":1741325738000}'),l={name:"program/pieces/span标签的文字如何支持直接编辑.md"};function i(r,s,c,t,b,u){return p(),a("div",null,[...s[0]||(s[0]=[e(`<p>声明contenteditable属性为true即可</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes one-dark-pro material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;span class=&quot;edit-div&quot; v-html=&quot;innerText&quot; :contenteditable=&quot;canEdit&quot; @focus=&quot;isLocked = true&quot; @blur=&quot;isLocked = false&quot; @input=&quot;changeText&quot; :placeholder=&quot;placeholder&quot; style=&quot;line-height:40px;cursor:pointer;&quot;&gt;</span></span>
<span class="line"><span>  &lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/ecmascript-6&quot;&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;editSpan&#39;,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    value: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      default: &#39;&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    placeholder: {</span></span>
<span class="line"><span>      type: String,</span></span>
<span class="line"><span>      default: &#39;请输入&#39;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    canEdit: {</span></span>
<span class="line"><span>      type: Boolean,</span></span>
<span class="line"><span>      default: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data () {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      innerText: this.value,</span></span>
<span class="line"><span>      isLocked: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  watch: {</span></span>
<span class="line"><span>    value () {</span></span>
<span class="line"><span>      if (!this.isLocked) {</span></span>
<span class="line"><span>        this.innerText = this.value</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    changeText () {</span></span>
<span class="line"><span>      this.$emit(&#39;input&#39;, this.$el.innerHTML)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; rel=&quot;stylesheet/scss&quot;&gt;</span></span>
<span class="line"><span>  .edit-div {</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    width: 720px;</span></span>
<span class="line"><span>    margin: auto;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>    min-height: 10vh;</span></span>
<span class="line"><span>    border: 1px solid #dedbdb;</span></span>
<span class="line"><span>    word-break: break-all;</span></span>
<span class="line"><span>    user-select: text;</span></span>
<span class="line"><span>    white-space: pre-wrap;</span></span>
<span class="line"><span>    font-size: 12px;</span></span>
<span class="line"><span>    padding: 2%;</span></span>
<span class="line"><span>    &amp;[contenteditable=&quot;true&quot;] {</span></span>
<span class="line"><span>      user-modify: read-write-plaintext-only;</span></span>
<span class="line"><span>      &amp;:empty:before {</span></span>
<span class="line"><span>        content: attr(placeholder);</span></span>
<span class="line"><span>        display: inline-block;</span></span>
<span class="line"><span>        color: #ccc;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div>`,2)])])}const d=n(l,[["render",i]]);export{o as __pageData,d as default};
