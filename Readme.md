# license-from-readme

  Attempt to parse licenses out of a readme

[![Build Status](https://travis-ci.org/stephenmathieson/node-license-from-readme.png)](https://travis-ci.org/stephenmathieson/node-license-from-readme)

## API

### `license(str)`

Attempt to parse license(s) from `str`, returning an array of possibilities.

## Example

    var license = require('license-from-readme');
    var fs = require('fs');
    var readme = fs.readFileSync('./Readme.md', 'utf8');

    var possibilities = license(readme);

    console.log('licensed by', possibilities.join(','));


## Credits

  This contains modified code from [@iandotkelly](https://github.com/iandotkelly)'s [nlf](https://github.com/iandotkelly/nlf)

## License 

(The MIT License)

Copyright (c) 2013 Stephen Mathieson &lt;me@stephenmathieson.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
