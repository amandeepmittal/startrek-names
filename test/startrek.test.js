import startrek from '../lib/startrek';
import {expect} from 'chai';

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

    it('should return an array of random names if passed a number', function() {
      var randomNames = startrek.random(3);
      expect(randomNames).to.have.length(3);
      randomNames.forEach(function(element) {
        expect(startrek.all).to.include(element);
      });
    });
  });
});