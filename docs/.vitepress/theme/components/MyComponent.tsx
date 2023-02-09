import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div id="app">
          <h1>tsx组件</h1>
          <a-button type="primary">Primary Button</a-button>
          <div>
            <a-steps current="1">
              <a-step></a-step>
              <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
              <a-step title="Waiting" description="This is a description." />
            </a-steps>
          </div>
        </div >
      )
    }
  },
})
