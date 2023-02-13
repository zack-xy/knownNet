import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestCom',
  setup() {
    return () => {
      return (
        <div id="app">
          <h1>自定义tsx组件</h1>
        </div >
      )
    }
  },
})
