// import Prism from 'prismjs'
// import LoadLanguages from "prismjs/components/index";
// import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-tomorrow.css'

export default defineComponent({
  props: {
    repo: {
      type: String,
      default: 'o-bricks',
    },
    path: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: '',
    },
  },
  async setup(props) {
    const { repo, path, lang } = props
    const codeRef = ref<HTMLElement | null>(null)
    const owner = 'zack-xy'
    const language = lang || path.split('.').pop()
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`

    onMounted(() => {
      if (codeRef.value) {
        import('prismjs').then(Prism => {
          import('prismjs/components/prism-java').then(() => {
            // LoadLanguages(language ? [language] : undefined)
            Prism.highlightElement(codeRef.value!)
          })
        })

      }
    })

    if (!repo || !path) {
      return () => {
        return (
          <div>
            <p>请传入仓库名：repo 和 文件路径：path 参数</p>
          </div>
        )
      }
    }

    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        return (
          <div>
            <p>{response.status === 404 ? '未找到代码资源' : '请求github代码出现错误，可能是因为GitHub API受限'}</p>
            <p>请重试，或自行访问：<a target="_blank" rel="noopener noreferrer" href={`https://github.com/${owner}/${repo}/blob/main/${path}`}>github代码地址</a></p>
          </div>
        )
      }
      const data = await response.json()
      const content = atob(data.content)
      const uint8Array = new Uint8Array(content.length)
      for (let i = 0; i < content.length; i++)
        uint8Array[i] = content.charCodeAt(i)
      // 使用 TextDecoder 指定 utf-8 编码进行解码
      const decoder = new TextDecoder('utf-8')
      const decodedString = decoder.decode(uint8Array)
      return () => {
        return (
          <pre>
            <code ref={codeRef} class={`language-${language}`}>
              {decodedString}
            </code>
          </pre>
        )
      }
    }
    catch (error) {
      return (
        <div>
          <p>请求github代码出现错误：{error}</p>
          <p>请重试，或自行访问<a target="_blank" rel="noopener noreferrer" href={`https://github.com/${owner}/${repo}/blob/main/${path}`}>github代码地址</a></p>
        </div>
      )
    }
  },
})
