/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let count = 0
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            count += allSubMatrixes(matrix, m, n, i, j, target)
        }
    }
    return count
};

// Somewhat improved DP approach O(m^2*n^2)
function allSubMatrixes(matrix, m, n, x, y, target) {
    let dp = Array.from({ length: m+1 }, () => Array(n+1).fill(0));
    let count = 0
    for (let i=x; i<m; i++) {
        for (let j=y; j<n; j++) {
            let sum = 0
            if (i > 0 && j > 0) {
                sum -= dp[i-1][j-1]
            }
            if (i > 0) {
                sum += dp[i-1][j]
            }
            if (j > 0) {
                sum += dp[i][j-1]
            }
            dp[i][j] = sum + matrix[i][j]
            if (dp[i][j] == target) {
                count += 1
            }

        }
    }
    return count
}

// Initial brute-force approach O(m^3*n^3) 
function submatrixSum(matrix, x1, y1, x2, y2, target) {
    let sum = 0
    for (let i=x1; i<=x2; i++) {
        for (let j=y1; j<=y2; j++) {
            sum += matrix[i][j]
        }
    }
    return sum == target
}
