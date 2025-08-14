import { useData } from 'vitepress'
import articleData from '../../../../article-data.json'
import type { Article } from '../../types/MyTag'
import { CodeSandboxOutlined } from '@ant-design/icons-vue'
// import { useRouter } from "vitepress";

export default defineComponent({

  setup(props) {

    const { frontmatter, page } = useData()
    // const { route } = useRouter();
    const visible = ref<boolean>(false)
    const currentTag = ref<string>('')
    const articles = ref<Array<Article>>([])

    watch(
      [currentTag, page],
      ([newTag, newPage]) => {
        articles.value = articleData.filter(a => a.path !== newPage.relativePath.replace('.md', '') && a.tags && a.tags.includes(newTag))
      }
    )

    function handleTagClicked(tag: string) {
      visible.value = true
      currentTag.value = tag
    }

    function handleCloseDrawer() {
      visible.value = false
    }

    return () => {
      return (
        <ClientOnly>
          {(frontmatter.value.tags && frontmatter.value.tags.length > 0) ? (frontmatter.value.tags as string[]).map(tag => <a-tag class="cursor-pointer" onClick={() => handleTagClicked(tag)} color={randomHexColorCode()} v-slots={{ icon: () => <CodeSandboxOutlined /> }} key={tag}>{tag}</a-tag>) : <></>}
          {frontmatter.value.tags && frontmatter.value.tags.length > 0 && <a-divider style="border-color: #7cb305" dashed />}
          <a-drawer
            visible={visible.value}
            class="custom-class"
            title="类似的文章📖"
            placement="right"
            onClose={handleCloseDrawer}
          >
            {articles.value.length > 0 ? articles.value.map(a => (<p>
              <a href={`/knownNet/${a.path}`} onClick={handleCloseDrawer}>{a.categories && a.categories.length ? `【${a.categories.join('、')}】-- ` : ``}{a.title}</a>
            </p>)) : <a-empty v-slots={{
              description: '暂无数据'
            }} />}

          </a-drawer>
        </ClientOnly>
      )
    }
  }
})
