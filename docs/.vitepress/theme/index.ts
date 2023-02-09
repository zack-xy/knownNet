import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import '@unocss/reset/normalize.css'
import 'virtual:unocss-devtools'
// import VueClickAwayExample from "../../../components/VueClickAwayExample.vue";
// import myTheme from './MyTheme'

export default {
  // ...myTheme,
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  },
}
