/* eslint-disable no-undef */
describe('fetch location test', () => {
  it('should get lat and lon from fetchLocation', function (done) {
    const onSuccess = function (location) {
      expect(location).to.have.property('lat')
      expect(location).to.have.property('lon')
      done()
    }

    const onError = function (err) {
      throw 'not expected'
    }

    this.timeout(10000)

    fetchLocation(onSuccess, onError)
  })
})
