var startrek = require('../lib/startrek');
var expect = require('chai').expect;

describe('startrek-names', function () {
  describe('all', function () {
    it('should be an array of strings', function () {
      expect(startrek.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings (arr) {
        return arr.every(function (element) {
          return typeof element === 'string';
        });
      }
    });

    it('should contain one vulcan ', function () {
      expect(startrek.all).to.include('Spock');
    });

    it('should contain captain James T. Kirk', function () {
      expect(startrek.all).to.include('James T. Kirk');
    });
  });

  describe('random names', function () {
    it('should return a random startrek character name', function () {
      var randomName = startrek.random();
      expect(startrek.all).to.include(randomName);
    });
  });
});