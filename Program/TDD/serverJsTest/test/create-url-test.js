describe('create-url test', () => {
  it('should return proper url given lat and lon', () => {
    const latitude = -33.857
    const longitude = 151.215

    const url = createURL(latitude, longitude)

    expect(url).to.be.eql('http://maps.goole.com/?q=-33.857,151.215')
  })

  // 空值测试
  it('should return empty string if latitude is undefined', () => {
    const latitude = undefined
    const longitude = 188.23

    const url = createURL(latitude, longitude)
    expect(url).to.be.eql('')
  })

  it('should return empty string if longitude is undefined', () => {
    const latitude = -40.234
    const longitude = undefined

    const url = createURL(latitude, longitude)
    expect(url).to.be.eql('')
  })
})
