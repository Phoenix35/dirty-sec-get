# dirty-sec-get
A simple utility package abstracting the native `https.get` with a promise.


**DO NOT** use this when you expect lengthy body contents. This puts the **entirety** of the body in memory.  
Make actual use of streams.

If you need contents of an `http:` URL, use [dirty-get](<https://github.com/Phoenix35/dirty-get>).  
There will be no merge of the two packages to accept both protocols. Make your own or use a library.

## How-to
```js
const httpsGet = require("@phoenix35/dirty-sec-get");
```
```js
const someJSON = JSON.parse(
  await httpsGet("https://jsonplaceholder.typicode.com/posts/9")
);
```

As it uses the native `https` module, `url` can be a string, an object accepted by [`https.get`](<https://nodejs.org/api/https.html#https_https_get_url_options_callback>), or an URL instance.

### When expecting binary data
The function returns an UTF-8 encoded string by default.  
You can switch to a buffer representation by passing `null` as the second argument.
```js
const someIcon = await httpsGet("https://jsonplaceholder.typicode.com/favicon.ico", null);
```

## Licensing
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.