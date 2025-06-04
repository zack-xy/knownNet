import type { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的编程',
    items: [
      { text: '大海拾遗', link: '/program/pieces/index', activeMatch: '/program/pieces/' },
      { text: '困难冲冲', link: '/program/issues/index', activeMatch: '/program/issues/' },
      { text: '体系专栏', link: '/program/specialColumn/index', activeMatch: '/program/specialColumn/' },
    ],
    activeMatch: '/program/',
  },
  {
    text: '我的阅读',
    items: [
      { text: '编程类', link: '/books/techAndCodes/index', activeMatch: '/books/techAndCodes/' },
      { text: '社科类', link: '/books/socialSciences/index', activeMatch: '/books/socialSciences/' },
      { text: '英语类', link: '/books/english/index', activeMatch: '/books/english/' },
    ],
    activeMatch: '/books/',
  },
  {
    text: '我的杂项',
    items: [
      { text: '编程面试', link: '/others/interview/index', activeMatch: '/others/interview/' },
      { text: '何以编程', link: '/others/feature/index', activeMatch: '/others/feature/' },
      { text: '数据结构与算法', link: '/others/dsa/index', activeMatch: '/others/dsa/' },
    ],
    activeMatch: '/others/',
  },
  {
    text: '我的博客',
    link: '/blogs/index',
    activeMatch: '/blogs',
  },
  {
    text: '本站统计',
    items: [
      { text: '我的标签', link: '/tags', activeMatch: '/tags' },
      { text: '我的归档', link: '/timeline/index', activeMatch: '/timeline/index' },
    ],
  },
  {
    text: '关于',
    items: [
      { text: '关于本站', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' },
    ],
    activeMatch: '/about/', // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
]
