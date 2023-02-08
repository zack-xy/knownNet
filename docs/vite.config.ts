import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx(),
    UnoCSS({
      presets: [
        presetUno(),
      ],
    }),
  ],
})
