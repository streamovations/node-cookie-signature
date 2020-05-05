
[![Build Status](https://travis-ci.org/streamovations/node-cookie-signature.svg?branch=master)](https://travis-ci.org/streamovations/node-cookie-signature)

# cookie-signature

  Sign and unsign cookies.
  
## Options


```js
var cookie = require('@streamovations/cookie-signature')({ algo: 'RSA-SHA3-512', digest: 'base64' });
```
or

```js
var cookie = require('@streamovations/cookie-signature');
cookie.setOptions(({ algo: 'RSA-SHA3-512', digest: 'base64' }));
```

## Example

```js
var cookie = require('cookie-signature')();

var val = cookie.sign('hello', 'luna');
val.should.equal('hello.LiJQLQGTi6c0HVr2rNtsoNJwWGrPVV6fF/giLm8N/aki+SbHSlzxnc8U0A8ljQa3nl7YNbOijYjrvEFnWJFDRg');

cookie.unsign(val, 'luna').should.equal('hello');
```

## License

MIT.

See LICENSE file for details.
