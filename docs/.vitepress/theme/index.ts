import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import '@unocss/reset/normalize.css'
import 'virtual:unocss-devtools'
import './styles/vars.css'
import './styles/custom.css'
import MyComponent from './components/MyComponent'
import SimpleImg from './components/SimpleImg'
import MyTag from './components/MyTag'
import MyLayout from './MyLayout';

// import myTheme from './MyTheme'

export default {
  // ...myTheme,
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MyComponent', MyComponent)
    ctx.app.component('SimpleImg', SimpleImg)
    ctx.app.component('MyTag', MyTag)
  },
}
