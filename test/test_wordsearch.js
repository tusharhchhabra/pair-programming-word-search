const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    // Starts at row 0, column 4, and down 5 chars
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'P', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'R', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SPARE')

    assert.isTrue(result);
  });

  it("should return false if the letter array is empty", function() {
    const result = wordSearch([], 'SPARE')
    assert.isFalse(result);
  });

  it("should return false if no word is provided", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'P', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'R', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ])
    assert.isFalse(result);
  });

  it('should return false if each row is not the same length', function() {
    assert.throws(() => wordSearch([
      ['A', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
      ['Y', 'F', 'C', 'F',],
      ['S', 'E', 'I', 'N', 'P'],
    ], 'EXAMPLE'), "All rows must be the same length");
  });

  it('should return false if there are any numbers in the array', function() {
   assert.throws(() => wordSearch([
      [1, 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'P', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'R', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'A', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SPARE'), "Please enter a matrix of letters only");
  });

  it('should return false if there are any numbers as strings in the array', function() {
   assert.throws(() => wordSearch([
      ['1', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'P', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'A', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'R', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'E', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'A', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SPARE'), "Please enter a matrix of letters only");
  });
});
