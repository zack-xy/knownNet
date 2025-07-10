import { XMindEmbedViewer } from "xmind-embed-viewer";

export default defineComponent({
  setup() {

    onMounted(() => {
      const viewer = new XMindEmbedViewer({
        el: '#xmind-viewer',
        region: 'cn'
      })

      // 跨域了不支持

      // fetch('https://gitee.com/api/v5/repos/zackzhengxy/xmind/contents/src/Grid属性.xmind')
      //   .then(res => res.json())
      //   .then(data => {
      //     const downloadUrl = data.download_url;

      //     // 第二步：用 download_url 获取真正的 .xmind 二进制文件
      //     return fetch(downloadUrl)
      //       .then(res => res.arrayBuffer());
      //   })
      //   .then(file => {
      //     viewer.load(file); // ✅ 加载脑图
      //   })
      //   .catch(err => {
      //     console.error('加载失败：', err);
      //   });


      // 效果不太行，错乱了
      fetch('/knownNet/xmind/Grid属性.xmind') // 相对路径即可
        .then(res => res.arrayBuffer())
        .then(file => {
          viewer.load(file)
          viewer.setZoomScale(100)
          viewer.setFitMap()
          viewer.setStyles({
            'width': '100%',
            // CSS styles are available here
          })
        });
    })

    return () => {
      return (
        <div id="xmind-viewer">
          xmind
        </div>
      )
    }
  }
})
