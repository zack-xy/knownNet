// import Prism from 'prismjs'
// import LoadLanguages from "prismjs/components/index";
// import 'prismjs/themes/prism.css';
import 'prismjs/themes/prism-tomorrow.css'

async function loadPrismLanguage(language: string) {
  switch (language) {
    case 'java':
      return import('prismjs/components/prism-java');
    case 'javadoc':
      return import('prismjs/components/prism-javadoc');
    case 'python':
      return import('prismjs/components/prism-python');
    case 'py':
      return import('prismjs/components/prism-python');
    case 'typescript':
      return import('prismjs/components/prism-typescript');
    case 'ts':
      return import('prismjs/components/prism-typescript');
    case 'css':
      return import('prismjs/components/prism-css');
    case 'c':
      return import('prismjs/components/prism-core');
    case 'cs':
      return import('prismjs/components/prism-csharp');
    case 'cpp':
      return import('prismjs/components/prism-cpp');
    case 'docker':
      return import('prismjs/components/prism-docker');
    case 'git':
      return import('prismjs/components/prism-git');
    case 'go':
      return import('prismjs/components/prism-go');
    case 'gradle':
      return import('prismjs/components/prism-gradle');
    case 'graphql':
      return import('prismjs/components/prism-graphql');
    case 'js':
      return import('prismjs/components/prism-javascript');
    case 'jsdoc':
      return import('prismjs/components/prism-jsdoc');
    case 'json':
      return import('prismjs/components/prism-json');
    case 'webmanifest':
      return import('prismjs/components/prism-json');
    case 'jsonp':
      return import('prismjs/components/prism-jsonp');
    case 'jsx':
      return import('prismjs/components/prism-jsx');
    case 'kt':
      return import('prismjs/components/prism-kotlin');
    case 'kts':
      return import('prismjs/components/prism-kotlin');
    case 'less':
      return import('prismjs/components/prism-less');
    case 'log':
      return import('prismjs/components/prism-log');
    case 'md':
      return import('prismjs/components/prism-markdown');
    case 'mongodb':
      return import('prismjs/components/prism-mongodb');
    case 'perl':
      return import('prismjs/components/prism-perl');
    case 'php':
      return import('prismjs/components/prism-php');
    case 'regex':
      return import('prismjs/components/prism-regex');
    case 'rust':
      return import('prismjs/components/prism-rust');
    case 'ruby':
      return import('prismjs/components/prism-ruby');
    case 'rb':
      return import('prismjs/components/prism-ruby');
    case 'tsx':
      return import('prismjs/components/prism-tsx');
    case 'sass':
      return import('prismjs/components/prism-sass');
    case 'scss':
      return import('prismjs/components/prism-sass');
    case 'scheme':
      return import('prismjs/components/prism-scheme');
    case 'sql':
      return import('prismjs/components/prism-sql');
    case 'swift':
      return import('prismjs/components/prism-swift');
    case 'yaml':
      return import('prismjs/components/prism-yaml');
    case 'yml':
      return import('prismjs/components/prism-yaml');
    default:
      return 'javascript'
  }
}

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
          loadPrismLanguage(language || '').then(() => {
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
