import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: String,
  },
  setup(props) {
    return () => {
      const { src } = props
      return (
        <div class="custom-simple-img">
          <a-image
            width="100%"
            height="100%"
            fallback="/svgs/not_found.svg"
            preview={{
              maskClassName: 'simple-img',
            }}
            src={`/knownNet/svgs/${src}`} />
        </div >
      )
    }
  },
})
