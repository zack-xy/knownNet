import { defineComponent } from 'vue'
import type { TableColumnsType, TableProps } from 'ant-design-vue'
// import { SmileOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  // components: {
  //   SmileOutlined,
  // },
  setup() {
    const columns: Readonly<TableColumnsType> = Object.freeze([
      { title: '书名', dataIndex: 'name', key: 'name' },
      { title: '进度', dataIndex: 'progress', key: 'progress' },
      { title: '遍数', dataIndex: 'times', key: 'times' },
      { title: '状态', dataIndex: 'status', key: 'status' },
    ])
    const dataSource: Readonly<TableProps['dataSource']> = Object.freeze([
      { key: '1', name: '置身事内 中国政府与经济发展', progress: '第1遍结束', times: '第1遍', status: '队列待定' },
      { key: '2', name: '单核工作法', progress: '第4章', times: '第1遍', status: '未读待定' },
      { key: '3', name: '佛陀传', progress: '30%', times: '第1遍', status: '正在阅读' },
      { key: '4', name: '程序员的思维训练', progress: '第1遍结束', times: '第1遍', status: '队列待定' },
      { key: '5', name: 'JavaScript高级程序设计', progress: '第1遍结束', times: '第1遍', status: '队列待定' },
      { key: '6', name: '深入理解Typescript', progress: 'Tips之后都没有读', times: '第1遍', status: '队列待定' },
      { key: '7', name: 'JavaScript语言精髓与编程实践', progress: '?', times: '第1遍', status: '未知' },
      { key: '8', name: 'Vue.js设计与实现', progress: '?', times: '第1遍', status: '未知' },
    ])
    return () => {
      return (
        <div class="">

          <a-table dataSource={dataSource} columns={columns} pagination={false}>
            {{
              headerCell: ({ column }: { column: { key: string; title: string } }) => (column.key === 'name' ? <span>📖书名</span> : column.title),
            }}
          </a-table>
        </div>
      )
    }
  },
})
