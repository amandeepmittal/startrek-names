/*
.dBBBBP dBBBBBBP dBBBBBb   dBBBBBb  dBBBBBBP dBBBBBb    dBBBP  dBP dBP
BP                    BB       dBP               dBP          d8P.dBP
`BBBBb   dBP      dBP BB   dBBBBK    dBP     dBBBBK   dBBP   dBBBBP
   dBP  dBP      dBP  BB  dBP  BB   dBP     dBP  BB  dBP    dBP BB
dBBBBP'  dBP      dBBBBBBB dBP  dB'  dBP     dBP  dB' dBBBBP dBP dBP
*/

var starTrekNames = require ('./startrek-characters.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  all: starTrekNames,
  random: uniqueRandomArray(starTrekNames)
};
