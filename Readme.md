
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
var cookie = require('cookie-signature');

var val = cookie.sign('hello', 'tobiiscool');
val.should.equal('hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7ch8tOBGslZ5QI');

var val = cookie.sign('hello', 'tobiiscool');
cookie.unsign(val, 'tobiiscool').should.equal('hello');
cookie.unsign(val, 'luna').should.be.false;
```

## License

MIT.

See LICENSE file for details.
