
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((!Array.isArray(matrix)) || 
  (matrix == null || matrix.length == 0 || matrix[0].length == 0) 
  ) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if ((i % 2) !== 0 && (i !== 0)) {
      matrix[i] = matrix[i].reverse();
    }
  }
  newArr = matrix.flat();

  return newArr;
}
