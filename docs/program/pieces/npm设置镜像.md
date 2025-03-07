---
title: npm设置镜像
author: Zack Zheng
date: 2023/03/05 00:00
categories:
 - npm
tags:
 - npm
---


```bash

npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
npm config set puppeteer_download_host https://npm.taobao.org/mirrors/
npm config set python_mirror https://npm.taobao.org/mirrors/python/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set sentrycli_cdnurl https://npm.taobao.org/mirrors/sentry-cli/
npm config set sharp_binary_host https://npm.taobao.org/mirrors/sharp/
npm config set sharp_dist_base_url https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sharp_libvips_binary_host https://npm.taobao.org/mirrors/sharp-libvips/
npm config set sqlite3_binary_site https://npm.taobao.org/mirrors/sqlite3/

```

安装node-gyp出错

```
npm config set disturl https://npm.taobao.org/mirrors/node/
```

安装node-sass提示：

Windows/OS X/Linux 64-bit with Node.js 16.x

```
npm cache clean -f
npm rebuild node-sass
```

-----------


快速删除node_modules的工具rimraf

```
npm i -g rimraf
```

```
{
    "scripts": {
        "reset": "rimraf node_modules package-lock.json yarn.lock && npm i"
    }
}
```



