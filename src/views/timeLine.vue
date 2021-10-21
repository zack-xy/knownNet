<template>
  <div>
    <Hello />
    <el-button
      type="primary"
      class="add-time-line"
      icon="el-icon-edit"
      circle
      @click="addTimeLine"
    ></el-button>
    <el-timeline class="time-line" :reverse="true">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :timestamp="activity.timestamp"
        :color="timeLineColor(index)"
        :key="index"
        size="large"
        placement="top"
      >
        <el-card class="time-line-card">
          <div slot="header" class="clearfix">
            <span>{{ activity.title }}</span>
          </div>
          <p class="card-content">{{ activity.content }}</p>
          <p v-if="activity.link" :title="activity.link">
            <a :href="fixedUrl + activity.link" target="_blank">链接</a>
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="50%"
      append-to-body
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form :model="form" :rules="rules" ref="form" label-width="60px">
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="form.title"
            placeholder="时间线卡片标题（知识点）"
          ></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input
            v-model="form.content"
            type="textarea"
            :rows="8"
            placeholder="笔记内容"
          ></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input v-model="form.link" placeholder="文件链接">
            <template slot="prepend">{{ fixedUrl }}</template>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAddTimeLine">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Hello from '../components/Hello.vue'
export default {
  name: 'timeLine',
  components: {
    Hello
  },
  created () {
    this.getActivities()
  },
  data () {
    return {
      fixedUrl: 'https://gitee.com/zackzhengxy/knownNet/blob/master/known/',
      activities: [],
      dialogVisible: false,
      form: {
        title: '',
        content: '',
        link: ''
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        content: [{ required: true, message: '请输入内容', trigger: 'blur' }]
      }
    }
  },
  methods: {
    getActivities () {
      this.$postRequest('/api/timeline/activities')
        .then((res) => {
          this.activities = res.data || []
        })
        .catch((err) => {
          this.$message({
            message: err,
            type: 'error'
          })
        })
    },
    timeLineColor (idx) {
      const len = this.activities.length
      if (idx === len - 1 || idx === len - 2) {
        // 前2个标红
        return '#ff5470'
      } else if (idx === len - 3 || idx === len - 4 || idx === len - 5) {
        // 中间3个标黄
        return '#fde24f'
      } else {
        // 否则标绿
        return '#00ebc7'
      }
    },
    addTimeLine () {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.$refs['form'].resetFields()
      })
    },
    submitAddTimeLine () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$postRequest('/api/timeline/addActivity', this.form)
            // eslint-disable-next-line no-unused-vars
            .then((res) => {
              this.dialogVisible = false
              this.getActivities()
            })
            .catch((err) => {
              this.$message({
                message: err,
                type: 'error'
              })
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.add-time-line {
  float: right;
  margin-top: 15px;
}
.time-line {
  clear: both;
}
</style>
