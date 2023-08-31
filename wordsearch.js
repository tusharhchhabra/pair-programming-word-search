const wordSearch = (letters, word) => {
  if (!Array.isArray(letters) || letters.length === 0 || !word) {
    return false;
  }

  // Check if input is consistent
  const rowLength = letters[0].length;
  letters.forEach(row => {
    if (row.length !== rowLength) {
      throw new Error("All rows must be the same length");
    }

    row.forEach(letter => {
      if (typeof letter !== 'string') throw new Error("Please enter a matrix of letters only");
      let alphabet = 'abcdefghijklmnopqrstuvwyz';
      if (!alphabet.includes(letter.toLowerCase())) throw new Error("Please enter a matrix of letters only");
    });
  });

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let x = letters[0].length;
  let y = letters.length;
  for (let i = 0; i < x; i++) {
    let column = "";
    for (let j = 0; j < y; j++) {
      let letter = letters[j][i];
      column += letter;
    }
    if (column.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;