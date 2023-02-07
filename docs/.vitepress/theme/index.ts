import DefaultTheme from 'vitepress/theme'
// import VueClickAwayExample from "../../../components/VueClickAwayExample.vue";
import myTheme from './MyTheme'

export default {
  ...myTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  },
}
