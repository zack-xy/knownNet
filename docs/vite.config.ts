import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx(),
    UnoCSS({
      presets: [
        presetAttributify({}),
        presetUno(),
      ],
    }),
  ],
})
