import type { DefaultTheme } from 'vitepress/theme'
import fastGlob from 'fast-glob'
import matter from 'gray-matter'
import { createLogger } from 'vite'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/program/pieces/': getItemsByYear('program/pieces'),
  '/program/specialColumn/': getItems('program/specialColumn'),

  '/books/socialSciences/': getItems('books/socialSciences'),
  '/books/techAndCodes/': getItems('books/techAndCodes'),
  '/books/english/': getItems('books/english'),
  '/books/japanese/': getItems('books/japanese'),

  '/blogs/': getBlogs('blogs'),
  '/program/issues/': getBlogs('program/issues'),
  '/others/interview/': getItems('others/interview'),
  '/others/feature/': getItems('others/feature'),
  '/others/notComputer/': getBlogs('others/notComputer'),
  '/others/dsa/': getItems('others/dsa'),
  '/others/hardware/': getBlogs('others/hardware'),
}

/**
 *
 * @param path 扫描基础路径
 * @returns {DefaultTheme.SidebarItem[]}
 */
function getItemsByYear(path: string) {
  // 侧边栏年份分组数组
  const yearGroups: DefaultTheme.SidebarItem[] = []
  const yearGroupsMap: Map<number, (DefaultTheme.SidebarItem & { time: string })[]> = new Map()
  // 置顶数组
  const topArticleItems: DefaultTheme.SidebarItem[] = []
  fastGlob.sync(`docs/${path}/*`, {
    onlyFiles: true,
    objectMode: true,
  }).forEach((article) => {
    if (article.name !== "index.md") {
      const articleFile = matter.read(`${article.path}`)
      const { data } = articleFile
      const link = `/${path}/${article.name.replace('.md', '')}`
      if (data.isTop) {
        topArticleItems.push({ text: data.title, link })
      }
      const year = new Date(data.date).getFullYear()
      if (yearGroupsMap.has(year)) {
        const yearItems = yearGroupsMap.get(year)
        yearItems?.push({ text: data.title, link, time: data.date })
        yearItems?.sort((a, b) => new Date(a.time!) > new Date(b.time!) ? -1 : 1)
      } else {
        yearGroupsMap.set(year, [{ text: data.title, link, time: data.date }])
      }
    }
  })

  const years = Array.from(yearGroupsMap.keys()).sort((a, b) => b - a)
  const nowYear = (new Date()).getFullYear()
  years.forEach(year => {
    const items = yearGroupsMap.get(year) ?? []
    yearGroups.push({
      text: `${year}年 (${items.length}篇)`,
      collapsed: year !== nowYear,
      items
    })
  })

  yearGroups.unshift({
    text: `🏅我的置顶 (${topArticleItems.length}篇)`,
    collapsed: false,
    items: topArticleItems,
  })

  // 添加序号
  addOrderNumber(yearGroups)
  return yearGroups
}

/**
 *
 * @param path 扫描基础路径
 * @returns {DefaultTheme.SidebarGroup[]}
 */
function getItems(path: string) {
  // 侧边栏分组数组
  const groups: DefaultTheme.SidebarItem[] = []
  // 侧边栏分组下标题数组
  let items: (DefaultTheme.SidebarItem & { time: string })[] = []
  let total = 0
  // 当分组内文章数量少于 2 篇或文章总数显示超过 20 篇时，自动折叠分组
  const groupCollapsedSize = 2
  const titleCollapsedSize = 20

  // 1.获取所有分组目录
  fastGlob.sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true,
  }).forEach(({ name }) => {
    const groupName = name
    // 2.获取分组下的所有文章
    fastGlob.sync(`docs/${path}/${groupName}/*`, {
      onlyFiles: true,
      objectMode: true,
    }).forEach((article) => {
      const articleFile = matter.read(`${article.path}`)
      const { data } = articleFile
      // 向前追加标题
      items.push({
        text: data.title,
        time: data.date || '',
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      })
      total++
    })

    // 3.向前追加到分组
    // 当分组内文章数量少于 A 篇或文章总数显示超过 B 篇时，自动折叠分组
    groups.push({
      text: `${groupName.substring(groupName.indexOf('-') + 1)} (${items.length}篇)`,
      collapsed: items.length < groupCollapsedSize || total > titleCollapsedSize,
      items: items.sort((a, b) => new Date(a.time!) > new Date(b.time!) ? -1 : 1),
    })

    // 4.清空侧边栏分组下标题数组
    items = []
  })

  // 添加序号
  addOrderNumber(groups)
  return groups
}

// 获取博客文章
function getBlogs(path: string): Array<DefaultTheme.SidebarItem> {
  const items: (DefaultTheme.SidebarItem & { time: string })[] = []
  // 获取所有文章
  fastGlob.sync(`docs/${path}/*`, {
    onlyFiles: true,
    objectMode: true,
  }).forEach((article) => {
    const articleFile = matter.read(`${article.path}`)
    const { data } = articleFile
    noDefaultPage(article.name) && items.push({
      text: data.title,
      time: data.date || '',
      link: `/${path}/${article.name.replace('.md', '')}`,
    })
  })

  return items.sort((a, b) => new Date(a.time) > new Date(b.time) ? -1 : 1)
}

function noDefaultPage(name: string): boolean {
  return name !== 'index.md'
}

/**
 * 添加序号
 *
 * @param groups 分组数据
 */
function addOrderNumber(groups) {
  for (let i = 0; i < groups.length; i++) {
    for (let j = 0; j < groups[i].items.length; j++) {
      const items = groups[i].items
      items[j].text = `[${j + 1}] ${items[j].text}`
    }
  }
}
