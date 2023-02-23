// import TestCom from './TestCom'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div id="app">
          <h1>tsx页面</h1>
          <a-button type="primary">Primary Button</a-button>
          <div>
            <a-steps current="1">
              <a-step></a-step>
              <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
              <a-step title="Waiting" description="This is a description." />
            </a-steps>
          </div>
          <div class="absolute left-3 hover:c-fuchsia">测试</div>
        </div >
      )
    }
  },
})
