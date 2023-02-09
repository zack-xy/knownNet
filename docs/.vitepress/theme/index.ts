import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import '@unocss/reset/normalize.css'
import 'virtual:unocss-devtools'
import MyComponent from './components/MyComponent'
// import myTheme from './MyTheme'

export default {
  // ...myTheme,
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MyComponent', MyComponent)
  },
}
