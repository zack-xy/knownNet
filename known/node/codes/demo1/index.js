const fs = require('fs')
const nameList = fs.readdirSync(__dirname)

nameList.forEach(currFileName => {
  if (currFileName.endsWith('.js')) {
    fs.renameSync(currFileName, `zack${currFileName}`)
  }
})
