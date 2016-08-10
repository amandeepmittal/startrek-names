import startrek from '../lib/startrek';
import {expect} from 'chai';

describe('startrek-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(startrek.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings (arr) {
        return arr.every((element) => {
          return typeof element === 'string';
        });
      }
    });

    it('should contain one vulcan ', () => {
      expect(startrek.all).to.include('Spock');
    });

    it('should contain captain James T. Kirk', () => {
      expect(startrek.all).to.include('James T. Kirk');
    });
  });

  describe('random names', () => {
    it('should return a random startrek character name', () => {
      var randomName = startrek.random();
      expect(startrek.all).to.include(randomName);
    });

    it('should return an array of random names if passed a number', () => {
      var randomNames = startrek.random(3);
      expect(randomNames).to.have.length(3);
      randomNames.forEach((element) => {
        expect(startrek.all).to.include(element);
      });
    });
  });
});