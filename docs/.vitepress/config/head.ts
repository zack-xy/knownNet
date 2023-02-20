import type { HeadConfig } from 'vitepress'
import { baseConfig } from './base'
export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/knownNet/favicon.ico' }],
  ['meta', { name: 'author', content: 'Zack Zheng' }],
  ['meta', { name: 'keywords', content: 'zack zheng, 知识, 博客, 随笔' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: baseConfig.locale }],
  ['meta', { property: 'og:title', content: baseConfig.title }],
  ['meta', { property: 'og:description', content: baseConfig.description }],
  ['meta', { property: 'og:site', content: baseConfig.site }],
  ['meta', { property: 'og:site_name', content: baseConfig.title }],
  ['meta', { property: 'og:image', content: baseConfig.image }],
]
