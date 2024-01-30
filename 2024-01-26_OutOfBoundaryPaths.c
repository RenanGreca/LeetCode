int M = 1000000007;

int helper(int m, int n, int maxMove, int startRow, int startColumn, int matrix[][m][n]) {
    if (startRow == m || startColumn == n || startRow < 0 || startColumn < 0) {
        return 1;
    }
    if (maxMove == 0) {
        return 0;
    }
    if (matrix[maxMove][startRow][startColumn] >= 0) {
        return matrix[maxMove][startRow][startColumn];
    }
    int count = (
        (helper(m, n, maxMove-1, startRow-1, startColumn, matrix) // top neighbor
        +helper(m, n, maxMove-1, startRow+1, startColumn, matrix)) % M // bottom neighbor
       +(helper(m, n, maxMove-1, startRow, startColumn-1, matrix) // left neighbor
        +helper(m, n, maxMove-1, startRow, startColumn+1, matrix)) % M // right neighbor
    ) % M;
    matrix[maxMove][startRow][startColumn] = count % M;
    return count % M;
}

int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
    int matrix[maxMove+1][m][n];
    memset(matrix, -1, sizeof matrix);
    // Precompute matrix for maxMove 0 and 1
    for (int i=0; i<m; i++) {
        for (int j=0; j<n; j++) {
            matrix[0][i][j] = 0;
            if (maxMove > 0) {
                matrix[1][i][j] = (i == 0) + (i == m-1) + (j == 0) + (j == n-1);
            }
        }
    }

    return helper(m, n, maxMove, startRow, startColumn, matrix);
}
