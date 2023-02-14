import type { DefaultTheme } from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的编程',
    items: [
      { text: '大海拾遗', link: '/program/pieces/index', activeMatch: '/program/pieces/' },
      { text: '困难冲冲', link: '/program/issues/index', activeMatch: '/program/issues/' },
      { text: '？？？', link: '/program/tools/index', activeMatch: '/categories/tools/' },
      { text: '？？？', link: '/program/solutions/index', activeMatch: '/categories/solutions/' },
    ],
    activeMatch: '/program/',
  },
  {
    text: '我的日志',
    items: [
      { text: '？？？', link: '/courses/java/index', activeMatch: '/courses/java/' },
      { text: '？？？', link: '/courses/mysql/index', activeMatch: '/courses/mysql/' },
      { text: '？？？', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
    ],
    activeMatch: '/courses/',
  },
  {
    text: '我的博客',
    link: '/tags',
    activeMatch: '/tags',
  },
  {
    text: '我的阅读',
    link: '/tags',
    activeMatch: '/tags',
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives',
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me' },
    ],
    activeMatch: '/about/', // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  },
]
