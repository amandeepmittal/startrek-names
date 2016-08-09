/*
.dBBBBP dBBBBBBP dBBBBBb   dBBBBBb  dBBBBBBP dBBBBBb    dBBBP  dBP dBP
BP                    BB       dBP               dBP          d8P.dBP
`BBBBb   dBP      dBP BB   dBBBBK    dBP     dBBBBK   dBBP   dBBBBP
   dBP  dBP      dBP  BB  dBP  BB   dBP     dBP  BB  dBP    dBP BB
dBBBBP'  dBP      dBBBBBBB dBP  dB'  dBP     dBP  dB' dBBBBP dBP dBP
*/

var randomNames = require ('./startrek-characters.json');

module.exports = function(){
  return randomNames[Math.floor(Math.random() * randomNames.length)];
};

module.exports.randomNames = randomNames;
