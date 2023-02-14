import { defineConfig } from 'vitepress'
import { baseConfig } from './config/base'
import { head } from './config/head'
import { markdown } from './config/markdown'
import { themeConfig } from './config/theme'

export default defineConfig({
  ...baseConfig,
  lastUpdated: true,
  head,
  markdown,
  themeConfig,
})
