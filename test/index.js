/**
 * Module dependencies.
 */

var cookie = require('..')({ algo: 'RSA-SHA3-512', digest: 'base64' });

describe('.sign(val, secret)', function(){
  it('should sign the cookie', function(){
    var val = cookie.sign('hello', 'luna');
    val.should.equal('hello.LiJQLQGTi6c0HVr2rNtsoNJwWGrPVV6fF/giLm8N/aki+SbHSlzxnc8U0A8ljQa3nl7YNbOijYjrvEFnWJFDRg');
  })
})

describe('.unsign(val, secret)', function(){
  it('should unsign the cookie', function(){
    var val = cookie.sign('hello', 'tobiiscool');
    cookie.unsign(val, 'tobiiscool').should.equal('hello');
    cookie.unsign(val, 'luna').should.be.false;
  })
})
