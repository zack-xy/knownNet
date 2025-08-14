---
title: ElementUI中select组件搜索时第一个输入的字符自动清空
lang: en-US
date: 2023/03/08 21:47
editLink: true
categories: 
- 困难冲冲
tags: 
- Bug
- 工作日常
---

同事过来问我的一个问题。    
他在原有页面select上增加可搜索的功能，他实现了一个自定义的搜索，但是发现第一次输入的字符会自动被清空    

我检查了这个el-select的定义，除了数据比较乱之外（已有上线功能），感觉没有异常    
起初认为是他自定义的搜索写的有问题，我建议套用element ui定义的搜索   
更换了之后bug依然  

依旧感觉写法是没有问题，但是无从下手该如何修改。   
没有办法，因为页面里混了很多其他数据和业务代码，我生成一个最小的demo来复现问题   
在我电脑上创建了一个最简单的可搜索select下拉框，采用类似的写法发现是没有问题的   

检查了一下他的element ui的版本，较低，怀疑element ui的低版本bug，让他升级后，bug依然   
在我电脑上跑他的项目，确实有这个bug，但为什么简单的demo不复现呢？   
将简单的demo，复制到项目里，经过对比修改不停的尝试，后来发现了最小的可复现bug
（最小复现跟他项目里稍有不同，并不是第一次输入清空，而是第二次输入清空，但是bug类似）   

最小复现
```vue
<script>
import { escapeRegexpString } from 'element-ui/src/utils/util'
export default {
  data() {
    return {
      options: [],
      optionsCopy: [{ label: 'Aby', value: '10', }, { label: 'Ady', value: '11', }, { label: 'aByds', value: '12', }, { label: 'Csyra', value: '13', }, { label: 'ITDWp', value: '14', }, { label: 'REWR', value: '15', },],
    }
  },
  methods: {
    filterMethod(val) {
      if (val !== '')
        this.options = this.optionsCopy.filter(item => new RegExp(escapeRegexpString(val.trim()), 'i').test(item.label))
      else this.options = this.optionsCopy
    },
    queryOptions(visible) {
      if (visible)
        this.options = this.optionsCopy
    },
  },
}
</script>

<template>
  <div>
    <label for="">下拉框</label>
    <el-select
      v-model="value"
      placeholder="请选择"
      filterable
      :filter-method="filterMethod"
      @visible-change="queryOptions"
    >
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<style lang="scss" scoped></style>
```

`key绑定的值是index` 
`只要修改key不只绑定index，则上面的bug就会消失`   

