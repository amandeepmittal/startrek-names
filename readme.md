# startrek-names
Get random StarTrek names.

[![travis build](https://img.shields.io/travis/amandeepmittal/startrek-names.svg)](https://travis-ci.org/amandeepmittal/startrek-names/builds/151038418)
[![codecov coverage](https://img.shields.io/codecov/c/github/amandeepmittal/startrek-names.svg?)](https://codecov.io/gh/amandeepmittal/startrek-names)
[![version](https://img.shields.io/npm/v/startrek-names.svg?style=flat-square)](http://npmjs.com/startrek-names)
[![downloads](https://img.shields.io/npm/dm/startrek-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=startrek-names&from=2015-08-01)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)


**startrek-names** is a Node.js module to randomly generate StarTrek character names in a site/application or use within [command-line](#command-line).

It also works with.

### Installation
To install this package, save it as a dependency in _package.json_ file:
```
npm install startrek-names --save
```

Require the module in your Node.js application:
```
var startrekChar = require('startrek-names');
```

To insert a random quote:
```
console.log(startrekChar());
// "James T. Kirk"
console.log(startrekChar());
// "Spock"
```

### Command Line
_startrek_ can be used in the command line.

Install the package globally using npm:
```
npm install startrek-names -g
```

To run:
```
$ startrek-names
James T. Kirk
```