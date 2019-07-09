function spiralMatrix(m, n) {
  let result = new Array(m).fill().map(() => new Array(n).fill(''));
  let counter = 1;
  let startCol = 0;
  let endCol = n-1;
  let startRow = 0;
  let endRow = m-1;
  while(startCol <= endCol && startRow <=endRow) {
    for(let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    for(let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }
    endCol--;
    for(let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for(let j = endRow; j >= startRow; j--) {
      result[j][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
}

console.log('Spiral Matrix', spiralMatrix(2, 3));