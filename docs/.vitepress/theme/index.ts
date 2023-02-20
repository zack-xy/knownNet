import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import '@unocss/reset/normalize.css'
import 'virtual:unocss-devtools'
import './styles/vars.css'
import './styles/custom.css'
import MyComponent from './components/MyComponent'
import SimpleImg from './components/SimpleImg'
import MyBooks from './components/MyBooks'
import MyTag from './components/MyTag'

// import myTheme from './MyTheme'

export default {
  // ...myTheme,
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MyComponent', MyComponent)
    ctx.app.component('SimpleImg', SimpleImg)
    ctx.app.component('MyBooks', MyBooks)
    ctx.app.component('MyTag', MyTag)
  },
}
