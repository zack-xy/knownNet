/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const expect = require('chai').expect
const Util = require('../src/util')

// 金丝雀测试
describe('util tests', () => {
  it('should pass this canary test', () => {
    expect(true).to.eql(true)
  })

  let util

  beforeEach(() => {
    util = new Util()
  })

  it('should pass if f2c return 0C for 32F', () => {
    const fahrenheit = 32

    const celsius = util.f2c(fahrenheit)

    expect(celsius).to.eql(0)
  })

  it('should pass if f2c return 10C for 50F', () => {
    const fahrenheit = 50

    const celsius = util.f2c(fahrenheit)

    expect(celsius).to.eql(10)
  })
})

