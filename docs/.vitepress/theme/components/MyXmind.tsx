import { XMindEmbedViewer } from "xmind-embed-viewer";

export default defineComponent({
  setup() {

    function base64ToArrayBuffer(base64: string) {
      const binaryStr = atob(base64); // 解码 base64 成二进制字符串
      const len = binaryStr.length;
      const bytes = new Uint8Array(len);

      for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }

      return bytes.buffer; // 返回 ArrayBuffer
    }

    onMounted(() => {
      const viewer = new XMindEmbedViewer({
        el: '#xmind-viewer',
        region: 'cn'
      })

      // 会被 403 Forbidden (Rate Limit Exceeded)
      fetch('https://gitee.com/api/v5/repos/zackzhengxy/xmind/contents/src/Grid属性.xmind?access_token=???')
        .then(res => res.json())
        .then(data => {
          const base64 = data.content;
          const arrayBuffer = base64ToArrayBuffer(base64);
          viewer.load(arrayBuffer);
        })
        .catch(err => {
          console.error('加载失败：', err);
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
