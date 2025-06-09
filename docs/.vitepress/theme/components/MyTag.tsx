import type { Article, Cloud, Tag } from '../../types/MyTag'
import articleData from '../../../../article-data.json'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '600',
    },
    height: {
      type: String,
      default: '600',
    },
    radius: {
      type: String,
      default: '250',
    },
  },
  setup(props) {
    // console.log(articleData)

    const tagsRef = computed(() => initTags(articleData))
    const { value: tags } = tagsRef

    // 初始化tags
    function initTags(articleData: Article[]): Tag[] {
      const tagsMap: { [propName: string]: number } = {}
      const tags: Array<Tag & { total: number }> = []
      for (let i = 0; i < articleData.length; i++) {
        const article = articleData[i]
        const articleTags = article.tags
        if (Array.isArray(articleTags)) {
          articleTags.forEach((articleTag) => {
            if (!tagsMap[articleTag])
              tagsMap[articleTag] = 0
            tagsMap[articleTag]++
          })
        }
      }
      for (const name in tagsMap)
        tags.push({ name, total: tagsMap[name], color: randomHexColorCode() })

      return tags
    }

    let speedX = Math.PI / 360
    let speedY = Math.PI / 360
    const clouds: Cloud[] = reactive([])

    // 球心坐标
    const CX = computed(() => parseInt(props.width) / 3.5)
    const CY = computed(() => parseInt(props.height) / 2)

    const listener = (event: MouseEvent) => {
      const x = event.pageX - CX.value
      const y = event.pageX - CY.value
      speedX = x * 0.0001 > 0
        ? Math.min(+props.radius * 0.00002, x * 0.0001)
        : Math.max(-props.radius * 0.00002, x * 0.0001)
      speedY = y * 0.0001 > 0
        ? Math.min(+props.radius * 0.00002, y * 0.0001)
        : Math.max(-props.radius * 0.00002, y * 0.0001)
    }

    // 创建标签
    const createTags = (): Cloud[] => {
      const clouds: Cloud[] = []
      for (let i = 0, len = tags.length; i < len; i++) {
        const k = -1 + (2 * (i + 1) - 1) / len
        const a = Math.acos(k)
        const b = a * Math.sqrt(len * Math.PI)
        const cloud: Cloud = {
          x: CX.value + +props.radius * Math.sin(a) * Math.cos(b),
          y: CY.value + +props.radius * Math.sin(a) * Math.sin(b),
          z: +props.radius * Math.cos(a),
          text: tags[i].name,
          color: tags[i].color || '#333',
        }
        clouds.push(cloud)
      }
      return clouds
    }

    clouds.push(...createTags())

    // 云球旋转函数-X
    const rotateX = (angleX: number) => {
      const cos = Math.cos(angleX)
      const sin = Math.sin(angleX)
      for (const cloud of clouds) {
        const _y = (cloud.y - CY.value) * cos - cloud.z * sin + CY.value
        const _z = cloud.z * cos + (cloud.y - CY.value) * sin
        cloud.y = _y
        cloud.z = _z
      }
    }
    // 云球旋转函数-Y
    const rotateY = (angleY: number) => {
      const cos = Math.cos(angleY)
      const sin = Math.sin(angleY)
      for (const cloud of clouds) {
        const _x = (cloud.x - CX.value) * cos - cloud.z * sin + CX.value
        const _z = cloud.z * cos + (cloud.x - CX.value) * sin
        cloud.x = _x
        cloud.z = _z
      }
    }

    // 定时器
    let timer: NodeJS.Timeout
    onMounted(() => {
      timer = setInterval(() => {
        rotateX(speedX)
        rotateY(speedY)
      }, 20)
    })
    onUnmounted(() => {
      clearInterval(timer)
    })

    return () => {
      return (
        <div class="h-[600px] pt-[50px]">
          {/* <tags-outlined class="text-xl color-#2C73D2 font-semibold m-2" />
          <label htmlFor="" class="text-xl color-#FF9671 font-semibold">我的标签</label> */}
          <div class="relative w-full"
            onMousemove={listener}>
            {clouds.map(cloud => (
              <div
                class="absolute transition-100 p-xy text-xl"
                style={{
                  transform: `translate3d(${cloud.x}px,${cloud.y}px,${cloud.z}px) scale(${(400 + cloud.z) / 600})`,
                  opacity: (400 + cloud.z) / 600,
                  color: cloud.color,
                }}>
                {cloud.text}
              </div>
            ))}
          </div>
        </div>
      )
    }
  },
})
