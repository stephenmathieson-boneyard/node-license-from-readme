
var license = require('./');
var fs = require('fs');
var readme = fs.readFileSync('./Readme.md', 'utf8');

var possibilities = license(readme);

console.log('licensed by', possibilities.join(','));
