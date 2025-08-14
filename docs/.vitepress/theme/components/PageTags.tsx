import { useData } from 'vitepress'
import { CodeSandboxOutlined } from '@ant-design/icons-vue'

export default defineComponent({

  setup(props) {

    const { frontmatter } = useData()
    const visible = ref<boolean>(false)
    const currentTag = ref<string>('')

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
          <tags-drawer visible={visible.value} currentTag={currentTag.value} onCloseDrawer={handleCloseDrawer}></tags-drawer>
        </ClientOnly>
      )
    }
  }
})
