---
title: Github Actions备忘
author: Zack Zheng
date: 2025/07/14 17:58
categories:
 - 大海拾遗
tags:
 - Github Actions
---


```yml

name: Deploy Pages

on:
  # 推送时执行
  push:
    branches: [main, master]
  # pr 时执行
  pull_request:
    branches: [main, master]
  # 定时执行，字段含义：分钟 小时 日 月 星期
  schedule:
    - cron: 30 17 * * *
  # 可手动执行
  workflow_dispatch:

jobs: 
  deploy-github-pages:
    runs-on: ubuntu-latest
    steps:
      - 

```
