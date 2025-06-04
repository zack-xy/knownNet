export default defineComponent({
  name: 'PhoneticSymbol',
  props: {
    phon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    mean: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { phon, type, mean } = toRefs(props)
    const slots = useSlots()
    const content = slots.default()[0].children
    return () => {
      return (
        (
          <ruby>
            <a-popover placement="topLeft" v-slots={{
              content: () => (<><p>{mean.value}</p></>),
              title: () => <span>{type.value}</span>
            }}>
              <b class="cursor-pointer">{content}</b>
            </a-popover>
            <rp>(</rp><rt class="text-[15px] text-blue-500 bg-gray-100 px-1 py-0.5 rounded">{phon.value}</rt><rp>)</rp>
          </ruby >
        )
      )
    }
  }
})
