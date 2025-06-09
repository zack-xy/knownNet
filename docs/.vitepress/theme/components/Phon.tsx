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
    const content = slots.default?.()[0].children

    function getAudio() {
      const audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${content}&type=1`)
      audio.play().catch(error => {
        console.log(`单词${content}播放失败:`, error);
      })
    }

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
            <rp>(</rp><rt onClick={getAudio} class="text-[15px] text-blue-500 bg-gray-100 px-1 py-0.5 rounded cursor-default">{phon.value}</rt><rp>)</rp>
          </ruby >
        )
      )
    }
  }
})
