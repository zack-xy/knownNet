import type { DefaultTheme } from 'vitepress/theme'
import { sync } from 'fast-glob'
import matter from 'gray-matter'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/program/pieces/': getItemsByDate('program/pieces'),
  '/program/specialColumn/': getItems('program/specialColumn'),

  '/books/socialSciences/': getItems('books/socialSciences'),
  '/books/techAndCodes/': getItems('books/techAndCodes'),
  // '/courses/mysql/': getItems('courses/mysql'),
  // '/courses/mybatis/': getItems('courses/mybatis'),

  '/blogs/': getBlogs('blogs'),
  '/program/issues/': getBlogs('program/issues'),
  '/others/interview/': getItems('others/interview'),
  '/others/hardware/': getBlogs('others/hardware'),
}

/**
 * 根据 某分类/YYYY/MM/dd/xxx.md 的目录格式, 获取侧边栏分组及分组下标题
 *
 * /categories/issues/2022/07/20/xxx.md
 *
 * @param path 扫描基础路径
 * @returns {DefaultTheme.SidebarItem[]}
 */
function getItemsByDate(path: string) {
  // 侧边栏年份分组数组
  const yearGroups: DefaultTheme.SidebarItem[] = []

  // 置顶数组
  const topArticleItems: DefaultTheme.SidebarItem[] = []

  // 1.获取所有年份目录
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true,
  }).forEach(({ name }) => {
    const year = name
    // 年份数组
    const articleItems: DefaultTheme.SidebarItem[] = []

    // 2.获取所有月份目录
    sync(`docs/${path}/${year}/*`, {
      onlyDirectories: true,
      objectMode: true,
    }).forEach(({ name }) => {
      const month = name

      // 3.获取所有日期目录
      sync(`docs/${path}/${year}/${month}/*`, {
        onlyDirectories: true,
        objectMode: true,
      }).forEach(({ name }) => {
        const day = name
        // 4.获取日期目录下的所有文章
        sync(`docs/${path}/${year}/${month}/${day}/*`, {
          onlyFiles: true,
          objectMode: true,
        }).forEach((article) => {
          const articleFile = matter.read(`${article.path}`)
          const { data } = articleFile
          if (data.isTop) {
            // 向置顶分组前追加标题
            topArticleItems.unshift({
              text: data.title,
              link: `/${path}/${year}/${month}/${day}/${article.name.replace('.md', '')}`,
            })
          }

          // 向年份分组前追加标题
          articleItems.unshift({
            text: data.title,
            link: `/${path}/${year}/${month}/${day}/${article.name.replace('.md', '')}`,
          })
        })
      })
    })

    // 添加年份分组
    yearGroups.unshift({
      text: `${year}年 (${articleItems.length}篇)`,
      collapsed: true,
      items: articleItems,
    })
  })

  if (topArticleItems.length > 0) {
    // 添加置顶分组
    yearGroups.unshift({
      text: `📑 我的置顶 (${topArticleItems.length}篇)`,
      collapsed: false,
      items: topArticleItems,
    })

    // 将最近年份分组展开
    yearGroups[1].collapsed = false
  }
  else {
    // 将最近年份分组展开
    yearGroups[0].collapsed = false
  }

  // 添加序号
  addOrderNumber(yearGroups)
  return yearGroups
}

/**
 * 根据 某小课/序号-分组/序号-xxx.md 的目录格式, 获取侧边栏分组及分组下标题
 *
 * courses/mybatis/01-MyBatis基础/01-xxx.md
 *
 * @param path 扫描基础路径
 * @returns {DefaultTheme.SidebarGroup[]}
 */
function getItems(path: string) {
  // 侧边栏分组数组
  const groups: DefaultTheme.SidebarItem[] = []
  // 侧边栏分组下标题数组
  let items: DefaultTheme.SidebarItem[] = []
  let total = 0
  // 当分组内文章数量少于 2 篇或文章总数显示超过 20 篇时，自动折叠分组
  const groupCollapsedSize = 2
  const titleCollapsedSize = 20

  // 1.获取所有分组目录
  sync(`docs/${path}/*`, {
    onlyDirectories: true,
    objectMode: true,
  }).forEach(({ name }) => {
    const groupName = name
    // 2.获取分组下的所有文章
    sync(`docs/${path}/${groupName}/*`, {
      onlyFiles: true,
      objectMode: true,
    }).forEach((article) => {
      const articleFile = matter.read(`${article.path}`)
      const { data } = articleFile
      // 向前追加标题
      items.push({
        text: data.title,
        link: `/${path}/${groupName}/${article.name.replace('.md', '')}`,
      })
      total++
    })

    // 3.向前追加到分组
    // 当分组内文章数量少于 A 篇或文章总数显示超过 B 篇时，自动折叠分组
    groups.push({
      text: `${groupName.substring(groupName.indexOf('-') + 1)} (${items.length}篇)`,
      collapsed: items.length < groupCollapsedSize || total > titleCollapsedSize,
      items,
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
  const items: DefaultTheme.SidebarItem[] = []
  // 获取所有文章
  sync(`docs/${path}/*`, {
    onlyFiles: true,
    objectMode: true,
  }).forEach((article) => {
    const articleFile = matter.read(`${article.path}`)
    const { data } = articleFile
    noDefaultPage(article.name) && items.push({
      text: data.title,
      link: `/${path}/${article.name.replace('.md', '')}`,
    })
  })

  return items
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
