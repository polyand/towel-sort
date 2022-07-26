module.exports = function towelSort (matrix) {
  if( matrix === undefined || matrix.length == 0 ) return [];
  result = [];
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 == 0)
    result.push(...matrix[i]);
    else result.push(...(matrix[i].reverse()));
  }
  return(result);
}
