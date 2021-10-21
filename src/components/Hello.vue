<template>
  <div class="hello">
    <h4 class="block">{{ `先生，${nowTime} 好！` }}</h4>
    <h3 class="block">{{ msg }}</h3>
    <i class="el-icon-circle-plus-outline" @click="hanldeAddEncourage"></i>
    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body
    >
      <el-input v-model="content" type="textarea" :rows="8"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitAddEncourage">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Hello',
  computed: {
    nowTime () {
      const time = new Date()
      const hour = time.getHours()
      if (hour <= 5) {
        return '凌晨'
      } else if (hour <= 11) {
        return '上午'
      } else if (hour === 12) {
        return '中午'
      } else if (hour <= 16) {
        return '下午'
      } else if (hour <= 18) {
        return '傍晚'
      } else if (hour <= 23) {
        return '晚上'
      } else {
        return '您'
      }
    }
  },
  created () {
    this.getEncourage()
  },
  data () {
    return {
      msg: '',
      dialogVisible: false,
      content: ''
    }
  },
  methods: {
    getEncourage () {
      this.$postRequest('/api/hello/encourage', {})
        .then((res) => {
          this.msg = res.data.msg
        })
        .catch((err) => {
          this.$message({
            message: err,
            type: 'error'
          })
        })
    },
    hanldeAddEncourage () {
      this.content = ''
      this.dialogVisible = true
    },
    submitAddEncourage () {
      if (this.content) {
        this.$postRequest('/api/hello/addEncourage', { content: this.content })
          .then((res) => {
            this.msg = res.data.msg
            this.dialogVisible = false
          })
          .catch((err) => {
            this.$message({
              message: err,
              type: 'error'
            })
          })
      } else {
        this.dialogVisible = false
      }
    }
  }
}
</script>
<style scoped lang="scss">
.hello {
  position: sticky;
  top: 0px;
  background-color: #f4effc;
  border: 1px solid #1f1235;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  z-index: 99;
  .block {
    margin: 0;
    text-align: center;
  }
  h4 {
    color: #1b1325;
  }
  h3 {
    color: #00214d;
  }
  .el-icon-circle-plus-outline {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    font-size: 20px;
  }
}
</style>
