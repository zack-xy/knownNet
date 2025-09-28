export default defineComponent({
  props: {
    src: String,
    lazy: Boolean
  },
  setup(props) {
    const { src, lazy } = props
    const title = src!.slice(55).split(".")[0]
    const visible = ref<boolean>(lazy ? false : true);
    const setVisible = (value: boolean): void => {
      visible.value = value;
      console.log("visible", visible.value);
    };
    return () => {
      return (
        <>
          <div class="custom-simple-img">
            {
              lazy && <a-button type="link" size="large" onClick={() => setVisible(true)}>{title}</a-button>
            }
            <a-image
              style={lazy ? { display: 'none' } : {}}
              width="100%"
              height="100%"
              loading="lazy"
              fallback="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/not_found.svg"
              preview={{
                maskClassName: 'simple-img',
                ...(lazy ? {
                  visible: visible.value,
                  onVisibleChange: setVisible,
                } : {})
              }}
              src={src?.startsWith('http') ? src : `/knownNet/svgs/${src}`} />
          </div >
        </>
      )
    }
  },
})
