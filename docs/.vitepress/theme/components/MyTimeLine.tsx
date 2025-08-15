import type { Article } from '../../types/MyTag'
import { generateId } from '../../gitalk'
import articleData from '../../../../article-data.json'

interface TimeLine {
  id: string
  title: string
  path: string
  categories?: string[]
  time?: string
}

export default defineComponent({
  setup(props) {
    const initData = (articleData: Article[]): TimeLine[] => {
      return articleData.map(item => ({
        id: generateId(item.title!),
        title: item.title!,
        path: item.path!,
        categories: item.categories || [],
        time: item.date || '',
      })).sort((a, b) => new Date(a.time) > new Date(b.time) ? -1 : 1)
    }

    const allArticleData = ref(initData(articleData as Article[]))
    const page = ref(10)
    const timelines = computed(() => allArticleData.value.slice(0, page.value))

    const loadMore = () => {
      if (page.value === allArticleData.value.length)
        return
      page.value += 10
      if (page.value > allArticleData.value.length)
        page.value = allArticleData.value.length
    }

    return () => {
      return (
        <>
          <h3 class="text-[#FFA500]">我的归档: {allArticleData.value.length} 篇</h3>
          <a-timeline mode="alternate">
            {timelines.value.map((item: TimeLine) => (
              <a-timeline-item key={item.id}>
                {item.time} - <a href={`/knownNet/${item.path}`} style={{ fontSize: '16px', fontWeight: 600 }}>{item.title}</a>
                <p>{`( ${item.categories?.join(',')} )`}</p>
              </a-timeline-item>
            ))}
          </a-timeline>
          <a-button type="primary" onClick={loadMore}>
            {page.value < allArticleData.value.length ? '加载更多' : '没有更多了'}
          </a-button>
        </>
      )
    }
  },
})
