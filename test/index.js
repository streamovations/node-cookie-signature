/**
 * Module dependencies.
 */

var cookie = require('..')({ algo: 'RSA-SHA3-512', digest: 'base64' });

describe('.sign(val, secret)', function(){
  it('should sign the cookie', function(){
    var val = cookie.sign('hello', 'luna');
    val.should.equal('hello.fCVwqqMMm0st0hE8BgpKLhLKX0Rs1QuO8PeTRwGokpjsUmaTkFP6efG7+S8iASZZQEgPlfM/1z0ATqXZKa6d2w');
  })
})

describe('.unsign(val, secret)', function(){
  it('should unsign the cookie', function(){
    var val = cookie.sign('hello', 'luna');
    cookie.unsign(val, 'luna').should.equal('hello');
  })
})
