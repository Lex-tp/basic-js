module.exports = function countCats(matrix) {

  let cat = '^^';
  let sumCats = 0;

  if (matrix != undefined && matrix.length > 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == cat) {
          sumCats++;
        }
      }
    }
    return sumCats;
  } else {
    return 0;
  }
};
