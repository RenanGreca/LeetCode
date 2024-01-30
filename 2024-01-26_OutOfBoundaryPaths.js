function exitPoints(m, n, row, column) {
    return (row == 0) + (row == m-1) + (column == 0) + (column == n-1)
}

function exitMatrix(m, n, k) {
    let matrix = Array.from({ length: m }, () => Array(n));
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            matrix[i][j] = Array(k+1).fill(-1)
            matrix[i][j][0] = 0
            // It's easy to pre-compute exit points for k = 1
            matrix[i][j][1] = exitPoints(m, n, i, j)
        }
    }
    return matrix
}

const M = 1000000007
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let matrix = exitMatrix(m, n, maxMove)
    
    return helper(m, n, maxMove, startRow, startColumn, matrix)
};

function helper(m, n, maxMove, startRow, startColumn, matrix) {
    if (startRow == m || startColumn == n || startRow < 0 || startColumn < 0) {
        return 1
    }
    if (maxMove == 0) {
        return 0
    }
    
    if (matrix[startRow][startColumn][maxMove] >= 0) {
        return matrix[startRow][startColumn][maxMove]
    }
    
    let count = (
       (helper(m, n, maxMove-1, startRow-1, startColumn, matrix) // top neighbor
      + helper(m, n, maxMove-1, startRow+1, startColumn, matrix)) % M // bottom neighbor
      +(helper(m, n, maxMove-1, startRow, startColumn-1, matrix) // left neighbor
      + helper(m, n, maxMove-1, startRow, startColumn+1, matrix)) % M // right neighbor
    ) % M
    matrix[startRow][startColumn][maxMove] = count
    return count
}
