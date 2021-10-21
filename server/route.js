const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
const { $dateFormat } = require('../src/utils/tools')
// get请求
router.get('/(.*)', (ctx) => {
  ctx.body = '访问到服务器'
})

// 时间线-活动
router.post('/timeline/activities', (ctx) => {
  const content = fs.readFileSync(path.join(__dirname, './data/activities.json'))
  ctx.body = JSON.parse(content)
})

// 时间线-增加卡片
router.post('/timeline/addActivity', (ctx) => {
  const reqParams = ctx.request.body
  const nowTime = $dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
  const content = fs.readFileSync(path.join(__dirname, './data/activities.json'))
  const newObj = {
    title: reqParams.title,
    content: reqParams.content,
    link: reqParams.link,
    timestamp: nowTime
  }
  const newList = JSON.parse(content)
  if (Array.isArray(newList)) {
    newList.push(newObj)
  }
  fs.writeFileSync(path.join(__dirname, './data/activities.json'), JSON.stringify(newList))
  const res = { status: 1, msg: '添加成功' }
  ctx.body = res
})

// hello-名人警句
router.post('/hello/encourage', (ctx) => {
  const content = fs.readFileSync(path.join(__dirname, './data/encourages.json'))
  const encouragesList = JSON.parse(content)
  const randomIdx = Math.floor(Math.random() * encouragesList.length)
  const res = {
    msg: encouragesList[randomIdx] || '永远积极向上，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡'
  }
  ctx.body = res
})

// hello-增加名人警句
router.post('/hello/addEncourage', (ctx) => {
  const reqParams = ctx.request.body
  const content = fs.readFileSync(path.join(__dirname, './data/encourages.json'))
  const encouragesList = JSON.parse(content)
  encouragesList.push(reqParams.content)
  fs.writeFileSync(path.join(__dirname, './data/encourages.json'), JSON.stringify(encouragesList))
  const res = {
    msg: reqParams.content || '永远积极向上，永远热泪盈眶，永远豪情满怀，永远坦坦荡荡'
  }
  ctx.body = res
})

module.exports = router
