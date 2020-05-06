![npm (scoped)](https://img.shields.io/npm/v/@streamovations/cookie-signature?style=flat-square)
![npm](https://img.shields.io/npm/dw/@streamovations/cookie-signature?style=flat-square)
![Travis (.org)](https://img.shields.io/travis/streamovations/node-cookie-signature?label=Travis%20Build&style=flat-square)
![David](https://img.shields.io/david/streamovations/node-cookie-signature?style=flat-square)
[![Coverage Status](https://coveralls.io/repos/github/streamovations/node-cookie-signature/badge.svg?branch=master)](https://coveralls.io/github/streamovations/node-cookie-signature?branch=master)

# cookie-signature

  Sign and unsign cookies.
## Install

```bash
npm i @streamovations/cookie-signature
```

## Options


```js
var cookie = require('@streamovations/cookie-signature')({ algo: 'RSA-SHA3-512', digest: 'base64' })
```
or

```js
var cookie = require('@streamovations/cookie-signature')()
cookie.setOptions({ algo: 'RSA-SHA3-512', digest: 'base64' })
```

## Example

```js
var cookie = require('cookie-signature')()

var val = cookie.sign('hello', 'luna')
val.should.equal('hello.LiJQLQGTi6c0HVr2rNtsoNJwWGrPVV6fF/giLm8N/aki+SbHSlzxnc8U0A8ljQa3nl7YNbOijYjrvEFnWJFDRg')

cookie.unsign(val, 'luna').should.equal('hello')
cookie.unsign(val, 'luna2').should.equal(false)
```

## License

MIT.

See LICENSE file for details.
