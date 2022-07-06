/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe('palindrome-test', () => {
  it('should pass this canry test', () => {
    expect(true).to.be.true
  })

  it('should return ture for argument mom', () => {
    expect(isPalindrome('mom')).to.be.true
  })

  it('should return ture for argument dad', () => {
    expect(isPalindrome('dad')).to.be.true
  })

  it('should return false for argument dude', () => {
    expect(isPalindrome('dude')).to.be.false
  })

  it('should return ture for argument mom mom', () => {
    expect(isPalindrome('mom mom')).to.be.true
  })

  it('should return false for argument mom dad', () => {
    expect(isPalindrome('mom dad')).to.be.false
  })

  it('should return false when argument is an empty string', () => {
    expect(isPalindrome('')).to.be.false
  })

  it('should return false when argument with only two spaces', () => {
    expect(isPalindrome('')).to.be.false
  })

  it('should throw an execption if argument is missing', () => {
    const call = function () { isPalindrome() }
    expect(call).to.throw(Error, 'Invalid argument')
  })
})
