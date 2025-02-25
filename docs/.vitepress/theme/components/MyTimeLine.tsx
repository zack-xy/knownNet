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
      }))
    }

    const timelines = computed(() => initData(articleData))

    return () => {
      return (
        <>
          <h3 class="text-[#FFA500]">我的归档</h3>
          <a-timeline mode="alternate" reverse={true}>
            {timelines.value.map((item: TimeLine) => (
              <a-timeline-item key={item.id}>
                {item.time} - <a href={`/knownNet/${item.path}`} style={{ fontSize: '16px', fontWeight: 600 }}>{item.title}</a>
                <p>{`( ${item.categories?.join(',')} )`}</p>
              </a-timeline-item>
            ))}
          </a-timeline>
        </>
      )
    }
  },
})
