import type { MarkdownOptions } from 'vitepress'

export const markdown: MarkdownOptions = {
  theme: {
    light: 'one-dark-pro',
    dark: 'material-theme-palenight',
  },
  image: {
    lazyLoading: true
  },
  math: true,
  lineNumbers: true, // 启用行号
  config: (md) => {
  },
}
