import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/knownNet/',
  title: '记录每一次成长',
  titleTemplate: '知识库',
  description: 'Zack Zheng\'s personal website',
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // sidebar: [
    //     {
    //         text: 'Guide',
    //         items: [
    //             { text: 'Introduction', link: '/introduction' },
    //             { text: 'Getting Started', link: '/getting-started' }
    //         ]
    //     }
    // ]
  },
})
