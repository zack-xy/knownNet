import "gitalk/dist/gitalk.css";
import { useRouter } from "vitepress";
import createGitalk from "../gitalk";
import Giscus from '@giscus/vue';


export default defineComponent({
  setup() {

    let { route } = useRouter(); // 页面路由对象

    // 初始化 Gitalk
    const initGitalk = () => {
      if (typeof window !== 'undefined') {
        const container = document.getElementById('gitalk-container');
        if (container) {
          container.innerHTML = '';
          createGitalk(route.path);
        }
      }
    };

    onMounted(() => {
      // 初次加载时初始化 Gitalk
      // initGitalk();

      // 监听路由变化
      watch(
        () => route.path,
        (newPath) => {
          nextTick(() => {
            // initGitalk();
          });
        }
      );
    });

    return () => (
      // <div id="gitalk-container"></div>
      <Giscus id="comments"
        repo="zack-xy/knownNet"
        repoId="R_kgDOGQRJAw"
        category="General"
        categoryId="DIC_kwDOGQRJA84CszS-"
        mapping="title"
        term="Welcome to @giscus/vue component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy">
      </Giscus>
    );
  }
})
