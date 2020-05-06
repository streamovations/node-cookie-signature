'use strict'

/**
 * Module dependencies.
 */
const crypto = require('crypto')

module.exports = (options = { algo: 'RSA-SHA3-512', digest: 'base64' }) => {

  let lib = {}

  lib.setOptions = options => { 

    lib.options = options 

    if ('string' != typeof lib.options.algo) throw new TypeError('Algo must be provided.')
    if ('string' != typeof lib.options.digest) throw new TypeError('Digest must be provided.')
  }

  lib.setOptions(options)

  /**
   * Sign the given `value` with `secret`.
   *
   * @param {String} value
   * @param {String} secret
   * @return {String}
   * @api private
   */

  lib.sign = (value, secret) => {

    if ('string' != typeof value) throw new TypeError('Value must be provided.')
    if ('string' != typeof secret) throw new TypeError('Secret must be provided.')

    return value + '.' + crypto.createHmac(lib.options.algo, secret).update(value, 'utf8').digest(lib.options.digest).replace(/\=+$/, '')
  }

  /**
   * Unsign and decode the given `value` with `secret`,
   * returning `false` if the signature is invalid.
   *
   * @param {String} value
   * @param {String} secret
   * @return {String|Boolean}
   * @api private
   */

  lib.unsign = (value, secret) => {
    
    if ('string' != typeof value) throw new TypeError('Value must be provided.')
    if ('string' != typeof secret) throw new TypeError('Secret must be provided.')

    let macBuffer = Buffer.from(lib.sign(value.slice(0, value.lastIndexOf('.')), secret)),
        valueBuffer = Buffer.alloc(macBuffer.length)

    valueBuffer.write(value)

    return crypto.timingSafeEqual(macBuffer, valueBuffer) ? value.slice(0, value.lastIndexOf('.')) : false
  }

  return lib
}
