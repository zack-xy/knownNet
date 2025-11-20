---
title: 关于我
aside: false
editLink: false
lastUpdated: false
showComment: false
---

<me-page />

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&color=3451B2&multiline=true&repeat=false&width=465&height=30&lines=%E6%82%A8%E5%A5%BD%EF%BC%81%E6%88%91%E6%98%AFZack+Zheng%E3%80%82%E6%98%AF%E4%B8%80%E5%90%8D(%E5%89%8D%E7%AB%AF)%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%82)](https://git.io/typing-svg)

<hr/>

#### 联系我：

+ 邮箱1：zack_zhengxiyun@163.com
+ 邮箱2：zackzheng1994@gmail.com

<hr/>

#### 我的项目：

<a-table class="w-full" :dataSource="dataSource" :columns="columns" :pagination="false">
  <template #bodyCell="{ column, record }">
    <template v-if="column.key === 'name'">
      <a target="_blank" :href="record.github">
        {{ record.name }}
      </a>
    </template>
    <template v-if="column.key === 'techStack'">
      <a-tag class="cursor-pointer dark:saturate-70 dark:brightness(0.8) mb-1!" v-for="tag in record.techStack" :key="tag" :color="tachColors[tag] || ''">
        {{ tag }}
      </a-tag>
    </template>
    <template v-if="column.key === 'others'">
      <ul>
        <li v-for="url in record.others" :key="url.name">
          <a v-if="url.link" target="_blank" :href="url.link">{{ url.name }}</a>
          <p v-else>{{ url.name }}</p>
        </li>
      </ul>
    </template>
  </template>
</a-table>

<hr/>

##### 我的GitHub个人3D数据：

![Personal 3D Metrics](https://raw.githubusercontent.com/zack-xy/zack-xy/main/profile-3d-contrib/profile-south-season-animate.svg)


<hr/>

##### 赞助我：

<a-image :width="200" src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/微信收款码.jpg" />

<a-image :width="200" src="https://gitee.com/zackzhengxy/picGallery/raw/main/imgs/支付宝收款码.png" />

<script setup lang="ts">
const tachColors = ref({
  Vitepress: '#3E63DD',
  Vite: '#646CFF',
  Vue: '#42B883',
  Vue2: '#42B883',
  Vue3: '#42B883',
  React: '#61DAFB',
  React18: '#61DAFB',
  React19: '#61DAFB',
  Redux: '#764ABC',
  UnoCSS: '#00C2A0',
  TypeScript: '#3178C6',
  'Ant-design-vue@3.x': '#1677FF',
  'Antd': '#1677FF',
  'Element-ui': '#409EFF',
  'Element-plus': '#409EFF',
  Vite: '#646CFF',
  Algolia: '#5468FF',
  Giscus: '#F6705D',
  PrismJS: '#F5A623',
  JavaScript: '#F7DF1E',
  Java: '#5382A1',
  CSS: '#264DE4',
  Sass: '#CC6699',
  HTML: '#E34F26',
  MongoDB: '#47A248',
  Express: '#000000',
  Koa2: '#33333D',
  TailwindCSS: '#38BDF8',
  ShadcnUI: '#0F172A',
})
const columns = ref([
  {
    title: '项目名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '项目描述',
    dataIndex: 'desc',
    key: 'desc',
  },
  {
    title: '项目技术栈',
    dataIndex: 'techStack',
    key: 'techStack',
  },
  {
    title: '其他',
    dataIndex: 'others',
    key: 'others',
  },
])
const dataSource = ref([
  {
    key: 'knownNet',
    name: 'knownNet',
    github: 'https://github.com/zack-xy/knownNet',
    desc: '我的笔记站点，记录一些学习的知识。',
    techStack: [
      'Vitepress',
      'Vite',
      'Vue3',
      'UnoCSS',
      'TypeScript',
      'Ant-design-vue@3.x',
      'Algolia',
      'Giscus',
      'PrismJS'
    ],
    others: [
      {name: '即本站', link: 'https://zack-xy.github.io/knownNet/'},
    ],
  },
  {
    key: 'allMock',
    name: 'allMock',
    github: 'https://github.com/zack-xy/allMock',
    desc: '一个node服务，用来生成mock数据',
    techStack: [
      'TypeScript',
      'Ts-node',
      'Nodemon',
      'Koa2',
      'Mockjs',
    ],
    others: [
    ],
  },
  {
    key: 'o-bricks',
    name: 'o-bricks',
    github: 'https://github.com/zack-xy/o-bricks',
    desc: '一个Demo项目，实现一些Demo',
    techStack: [
      'Vue2',
      'TypeScript',
      'JavaScript',
      'Java',
      'CSS',
      'HTML',
      'Element-ui'
    ],
    others: [
      {name: '增强element ui日期控件，不连续多选月(源码基础上修改)', link: 'https://github.com/zack-xy/o-bricks/tree/main/demoCodes/Vue/Vue2/vue-element-date'},
      {name: '对可搜索多选select，对搜索出来的项增加一键全选功能(不改源码，额外增强)'},
      {name: '一键全选select组件下，增加虚拟滚动，并全量查询'}
    ],
  },
  {
    key: 'o-algorithm',
    name: 'o-algorithm',
    github: 'https://github.com/zack-xy/o-algorithm',
    desc: '算法训练笔记+代码',
    techStack: [
      'TypeScript',
      'JavaScript',
      'Java',
    ],
    others: [
      {name: '我的Leetcode', link: 'https://leetcode.cn/u/zheng-bf/'}
    ]
  },
  {
    key: 'vue2-bms',
    name: 'vue3-bms',
    github: 'https://github.com/zack-xy-bms/vue2-bms',
    desc: 'Vue2通用后台管理页面',
    techStack: [
      'Vue2',
      'JavaScript',
      'Element',
      'Sass',
      'wangeditor',
      'xlsx',
      'sortablejs',
      'Echart'
    ],
    others: []
  },
  {
    key: 'vue3-bms',
    name: 'vue3-bms',
    github: 'https://github.com/zack-xy-bms/vue3-bms',
    desc: 'Vue3通用后台管理页面',
    techStack: [
      'Vue3',
      'JavaScript',
      'Element-plus',
      'Sass',
      'wangeditor',
      'xlsx',
      'sortablejs',
    ],
    others: []
  },
  {
    key: 'react-admin',
    name: 'react-admin',
    github: 'https://github.com/zack-xy-bms/react-admin',
    desc: 'React19后台管理页面',
    techStack: [
      'React19',
      'TypeScript',
      'Antd',
      'tailwindcss',
    ],
    others: []
  },
  {
    key: 'manage-attendance',
    name: 'manage-attendance',
    github: 'https://github.com/zack-xy/manage-attendance',
    desc: '考勤后管系统',
    techStack: [
      'Vue3',
      'Vuex',
      'Vue-router',
      'Element-plus',
      'Sass',
      'pinia',
      'Vite',
      'React18',
      'Redux',
      'Antd',
      'Express',
      'MongoDB',
      'Mongoose',
      'TypeScript',
      'JavaScript',
    ],
    others: [
      {name: '前后端代码均在此仓库中'},
      {name: '前端代码在frontend文件夹中，分为vue cli版、vue vite版、react版'},
      {name: '后端代码在backend文件夹中，js版本'},
    ]
  },
  {    
    key: 'zack-commit',
    name: 'zack-commit',
    github: 'https://github.com/zack-xy/zack-commit',
    desc: 'cli工具，快速为项目配置约定式提交规范和eslint(基于@antfu/eslint-config)',
    techStack: [
      'TypeScript',
      'JavaScript',
    ],
    others: [
      {name: 'npm包名：@zack-xy/zack-commit', link: 'https://www.npmjs.com/package/@zack-xy/zack-commit'},
    ]
  },
{    
    key: 'zack-logs',
    name: 'zack-logs',
    github: 'https://github.com/zack-xy/zack-logs',
    desc: 'cli工具，控制台输出打印我的banner信息',
    techStack: [
      'TypeScript',
      'JavaScript',
    ],
    others: [
      {name: 'npm包名：@zack-xy/logs', link: 'https://www.npmjs.com/package/@zack-xy/logs'},
    ]
  },
  {
    key: 'react-tailwind-admin-dashboard',
    name: 'react-tailwind-admin-dashboard',
    github: 'https://github.com/zack-xy-bms/react-tailwind-admin-dashboard',
    desc: '基于shadcnUI和React的后管系统页面',
    techStack: [
      'React19',
      'TypeScript',
      'TailwindCSS',
      'ShadcnUI',
      'RadixUI',
      'Recharts',
      'Zod'
    ],
    others: []
  },
  {
    key: '',
    name: '',
    github: '',
    desc: '',
    techStack: [],
    others: []
  }
])
</script>
