import "gitalk/dist/gitalk.css";
import { useRouter } from "vitepress";
import createGitalk from "../gitalk";


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
      initGitalk();

      // 监听路由变化
      watch(
        () => route.path,
        (newPath) => {
          nextTick(() => {
            initGitalk();
          });
        }
      );
    });

    return () => (
      <div id="gitalk-container"></div>
    );
  }
})
