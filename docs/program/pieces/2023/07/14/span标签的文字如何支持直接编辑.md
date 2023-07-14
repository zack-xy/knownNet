---
title: span标签的文字如何支持直接编辑
author: Zack Zheng
date: 2023/07/14 00:00
categories:
 - HTML
tags:
 - HTML
---

声明contenteditable属性为true即可

```
<template>
  <span class="edit-div" v-html="innerText" :contenteditable="canEdit" @focus="isLocked = true" @blur="isLocked = false" @input="changeText" :placeholder="placeholder" style="line-height:40px;cursor:pointer;">
  </span>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'editSpan',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      innerText: this.value,
      isLocked: false
    }
  },
  watch: {
    value () {
      if (!this.isLocked) {
        this.innerText = this.value
      }
    }
  },
  methods: {
    changeText () {
      this.$emit('input', this.$el.innerHTML)
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .edit-div {
    display: block;
    width: 720px;
    margin: auto;
    border-radius: 5px;
    min-height: 10vh;
    border: 1px solid #dedbdb;
    word-break: break-all;
    user-select: text;
    white-space: pre-wrap;
    font-size: 12px;
    padding: 2%;
    &[contenteditable="true"] {
      user-modify: read-write-plaintext-only;
      &:empty:before {
        content: attr(placeholder);
        display: inline-block;
        color: #ccc;
      }
    }
  }
</style>
```

