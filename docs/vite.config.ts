import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetAttributify({}),
        presetUno(),
      ],
      rules: [
        ['m-88', { margin: '0.88rem' }],
      ],
      // preflights: [
      //   {
      //     getCSS: ({ theme }) => `
      //     * {
      //       color: ${theme.colors?.gray?.[700] ?? '#333'};
      //       padding: 0;
      //       margin: 0;
      //     }
      //     `,
      //   },
      // ],
      shortcuts: {
        'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        'btn-green': 'text-white bg-green-500 hover:bg-green-700',
      },
      variants: [
        // hover:
        (matcher) => {
          if (!matcher.startsWith('hover:'))
            return matcher
          return {
            // slice `hover:` prefix and passed to the next variants and rules
            matcher: matcher.slice(6),
            selector: s => `${s}:hover`,
          }
        },
      ],
    }),
    vueJsx(),
    Components({
      dirs: ['.vitepress/theme/components'],
      extensions: ['vue', 'tsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx/, /\.jsx/],
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
        }),
      ],
    }),
    AutoImport({
      dirs: ['.vitepress/theme/utils'],
      imports: ['vue', '@vueuse/core'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  ssr: { noExternal: ['ant-design-vue', '@ant-design/icons-vue'] },
})
