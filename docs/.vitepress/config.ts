import { defineConfig } from 'vitepress'
import { baseConfig } from './config/base'
import { head } from './config/head'
import { markdown } from './config/markdown'
import { themeConfig } from './config/theme'
import generateSitemap from "./generate-sitemap"

export default defineConfig({
  ...baseConfig,
  lastUpdated: true,
  head,
  markdown,
  themeConfig,
  vite: {
    ssr: {
      noExternal: ['ant-design-vue', '@ant-design/icons-vue'],
    },
  },
  buildEnd: () => {
    generateSitemap()
  }
})
