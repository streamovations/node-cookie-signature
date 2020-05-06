'use strict'

/**
 * Module dependencies.
 */

const cookie = require('..')()

describe('.setOptions(options)', () => {

  it('should have default options', () => {

    cookie.options.algo.should.equal('RSA-SHA3-512')
    cookie.options.digest.should.equal('base64')
  })
})

describe('.setOptions(options)', () => {

  it('should set options', () => {

    cookie.setOptions({ algo: 'RSA-SHA3-256', digest: 'hex' })
    cookie.options.algo.should.equal('RSA-SHA3-256')
    cookie.options.digest.should.equal('hex')
  })
})

describe('.sign(val, secret)', () => {

  it('should sign the cookie', () => {

    let val = cookie.sign('hello', 'luna')
    val.should.equal('hello.91e49e96c6c26bb9f2fba769780b6fb2f309affc92406907fad5990062049ccb')
  })
})

describe('.unsign(val, secret)', () => {

  it('should unsign the cookie', () => {

    let val = cookie.sign('hello', 'luna')
    cookie.unsign(val, 'luna').should.equal('hello')
  })
})

describe('.unsign(val, secret)', () => {

  it('should return false when unsign fails', () => {

    let val = cookie.sign('hello', 'luna')
    cookie.unsign(val, 'luna2').should.equal(false)
  })
})