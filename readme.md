# startrek-names
Get random StarTrek names.

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