describe('locate test', () => {
  it('should register handles with getCurrentPosition', (done) => {
    const original = navigator.geolocation.getCurrentPosition

    // 覆盖了getCurrentPosition函数
    navigator.geolocation.getCurrentPosition = function (success, error) {
      expect(success).to.be.eql(onSuccess)
      expect(error).to.be.eql(onError)
      done()
    }

    locate()

    // 重新覆盖getCurrentPosition
    navigator.geolocation.getCurrentPosition = original
  })
})
