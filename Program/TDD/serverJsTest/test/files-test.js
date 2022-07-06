const expect = require('chai').expect
const linesCount = require('../src/files')
describe('test server-side callback', () => {
  it('should return correct lines count for a valid file', (done) => {
    // 良好的尝试，但这实际上并没有什么作用
    const callback = function (count) {
      expect(count).to.be.eql(16)
      done()
    }
    linesCount('src/files.js', callback)
  })

  // 反向测试案例
  it('should report error for an invalid file name', (done) => {
    const onError = function (error) {
      expect(error).to.be.eql('unable to open file src/flies.js')
      done()
    }
    linesCount('src/flies.js', undefined, onError)
  })
})
