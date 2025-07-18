import type { DefaultTheme } from 'vitepress/theme'
import { nav } from './nav'
import { sidebar } from './sidebar'

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: '/logo.png',
  outline: {
    level: 'deep',
    label: '页面导航'
  }, // 右侧大纲标题层级
  lastUpdatedText: '最后更新', // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: '上一篇',
    next: '下一篇',
  },
  // // 编辑链接配置
  // editLink: {
  //   pattern: '',
  //   text: '不妥之处，敬请雅正',
  // },
  // 全文搜索配置
  algolia: {
    appId: 'IGTX50T2RS',
    apiKey: 'bf9426d927f85aa97c27c0f924a97615',
    indexName: 'knownnet',
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    { icon: 'github', link: 'https://github.com/zack-xy/knownNet' },
    {
      icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>',
      },
      link: 'https://gitee.com/zackzhengxy',
    },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 512 512" ><path fill="#49A0AE" d = "M7.9,256C7.9,119,119,7.9,256,7.9C393,7.9,504.1,119,504.1,256c0,137-111.1,248.1-248.1,248.1C119,504.1,7.9,393,7.9,256z" > </path><path fill="#49A0AE" d="M110.6,141.1h288.9c23.3,0,42.3,18.9,42.3,42.3v237c38.7-43.8,62.3-101.3,62.3-164.3C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256c0,62,22.8,118.7,60.4,162.2V183.4C68.4,160,87.3,141.1,110.6,141.1z"></path > <path fill="#E8E8E8" d = "M256,504.1c74,0,140.3-32.4,185.8-83.8v-237c0-23.3-18.9-42.3-42.3-42.3H110.6c-23.3,0-42.3,18.9-42.3,42.3v234.8C113.8,470.8,181,504.1,256,504.1z" > </path><path fill="#BC2C2A" d="M165.5 130.8L165.5 365.1 253.4 302.7 341.2 365.1 341.2 130.8z"></path > <path fill="#CC3432" d = "M165.5,122.9v234.3l87.8-62.5l87.9,62.5V244.7c0,0,0,0,0-0.1V122.9H165.5z" > </path><path fill="#DDA027" d="M253.4 153.8L270 187.5 307.3 192.9 280.3 219.2 286.7 256.3 253.4 238.8 220.1 256.3 226.5 219.2 199.5 192.9 236.7 187.5z"></path > <path fill="#DDA027" d = "M220.1,260.2c-0.8,0-1.6-0.3-2.3-0.8c-1.2-0.9-1.8-2.4-1.6-3.8l6-35.1l-25.5-24.8c-1.1-1-1.5-2.6-1-4c0.5-1.4,1.7-2.5,3.2-2.7l35.2-5.1l15.7-31.9c1.3-2.7,5.7-2.7,7,0l15.7,31.9l35.2,5.1c1.5,0.2,2.7,1.3,3.2,2.7c0.5,1.4,0.1,3-1,4l-25.5,24.8l6,35.1c0.3,1.5-0.4,3-1.6,3.8c-1.2,0.9-2.8,1-4.1,0.3l-31.5-16.5l-31.5,16.5C221.3,260,220.7,260.2,220.1,260.2z M253.4,234.9c0.6,0,1.2,0.1,1.8,0.4l26.3,13.8l-5-29.3c-0.2-1.3,0.2-2.6,1.1-3.5l21.3-20.7l-29.4-4.3c-1.3-0.2-2.4-1-2.9-2.1l-13.1-26.6l-13.1,26.6c-0.6,1.2-1.7,2-2.9,2.1l-29.4,4.3l21.3,20.7c0.9,0.9,1.3,2.2,1.1,3.5l-5,29.3l26.3-13.8C252.1,235,252.8,234.9,253.4,234.9z" > </path><g><path fill="#BC2C2A" d="M341.2 122.9L341.2 141.1 357.6 141.1z"></path > </g><g><path fill="#BC2C2A" d="M165.6 122.9L165.6 141.1 149.3 141.1z"></path > </g>< /svg>',
      },
      link: '/knownNet/navLinks/index',
    },
  ],
}
