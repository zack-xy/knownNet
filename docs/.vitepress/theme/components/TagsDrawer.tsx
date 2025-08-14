import { useData } from 'vitepress'
import articleData from '../../../../article-data.json'
import type { Article } from '../../types/MyTag'
export default defineComponent({
  emits: ['closeDrawer'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    currentTag: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const { page } = useData()
    const { visible, currentTag } = toRefs(props)
    const articles = ref<Array<Article>>([])

    watch(
      [currentTag, page],
      ([newTag, newPage]) => {
        articles.value = articleData.filter(a => a.path !== newPage.relativePath.replace('.md', '') && a.tags && a.tags.includes(newTag))
      }
    )

    function handleCloseDrawer() {
      emit('closeDrawer', false)
    }

    return () => {
      return (
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
      )
    }
  }
})
