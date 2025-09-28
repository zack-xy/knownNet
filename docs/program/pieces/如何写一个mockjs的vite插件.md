---
title: 迭代器和生成器
author: Zack Zheng
date: 2022/11/09 09:51
categories:
 - 大海拾遗
tags:
 - 前端
 - Vite
 - Mockjs
---

### 如何写一个mockjs的vite插件

功能是拦截某个接口请求，并使用mockjs返回模拟数据

```ts [vite.config.ts]

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { Plugin } from 'vite';
import mockjs from 'mockjs';
import url from 'node:url';
// vite插件，插件是一个函数，返回一个对象
const viteMockServer = (): Plugin => {
    return {
        name: 'vite-plugin-mock',
        configureServer: (server) => { // 配置开发服务器（查vite官方文档）
            server.middlewares.use('/api/mock/list', (req, res) => {
                const parseurl = url.parse(req.originalUrl, true).query;
                res.setHeader('Content-Type', 'application/json');
                const data = mockjs.mock({
                    'list|2000': [
                        {
                            id: '@guid',
                            name: parseurl.key,
                            age: '@integer(18, 30)',
                            address: '@county(true)',
                        },
                    ],
                });
                res.end(JSON.stringify(data));
            });
        },
    };
};

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), viteMockServer()], // 使用插件
});


```
