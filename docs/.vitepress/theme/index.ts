import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import '@unocss/reset/normalize.css'
import 'virtual:unocss-devtools'
import './styles/vars.css'
import './styles/custom.css'
import MyComponent from './components/MyComponent'
import SimpleImg from './components/SimpleImg'
import MyTag from './components/MyTag'
import MyTimeLine from './components/MyTimeLine'
import { h } from 'vue'
import MyLayout from './MyLayout'
import PageTags from './components/PageTags'
import ToTop from './components/ToTop'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// import myTheme from './MyTheme'

export default {
  // ...myTheme,
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'doc-before': () => h(PageTags),
      'doc-bottom': () => h(ToTop),
      'doc-after': () => h(MyLayout)
    })
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Antd)
    ctx.app.component('MyComponent', MyComponent)
    ctx.app.component('SimpleImg', SimpleImg)
    ctx.app.component('MyTimeline', MyTimeLine)
    ctx.app.component('MyTag', MyTag)
  },
}
