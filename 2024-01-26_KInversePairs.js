const M = 1000000007;
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    let matrix = Array.from({ length: 2 }, () => Array(k+1).fill(0));

    // Optimized iterative approach
    // Matrix uses i%2 to save space
    // Computation uses subtraction of m[i-1][j-i] to avoid a third loop
    for (let i=1; i<=n; i++) {
        for (let j=0; j<=k; j++) {
            if (j == 0) {
                matrix[i%2][j] = 1
            } else {
                let sub = (j >= i ? matrix[(i-1)%2][j-i] : 0);
                let val = (matrix[(i-1)%2][j] + M)
                if (j >= i) {
                    val = (val - sub) % M;
                } 
                matrix[i%2][j] = (matrix[i%2][j - 1] + val) % M;
            }
        }
    }

    let result = matrix[n%2][k] + M
    if (k > 0) {
        result -= matrix[n%2][k-1]
    }
    return result % M
};

// Iterative top-down approach; complexity O(n*k*k)
function simpleIterative(n, k, matrix) {
    for (let i=0; i<=n; i++) {
        matrix[i][0] = 1
    }

    for (let i=1; i<=n; i++) {
        for (let j=1; j<=k; j++) {
            let val = 0
            for (let h = j; h >= 0 && h > j-i; h--) {
                val = (val + matrix[i-1][h]) % M
            }
            matrix[i][j] = val % M
        }
    }

    return matrix[n][k]
}

// Recursive bottom-up approach; complexity O(k^n)
function recursiveSolution(n, k, matrix) {
    if (matrix[n][k] > 0) {
        return matrix[n][k]
    }
    if (n==0) {
        return 0
    }
    let val = 0
    for (let j = k; j >= 0 && j > k-n; j--) {
        val += helper(n-1, j, matrix)
    }
    val = val % M
    matrix[n][k] = val
    return val
}
