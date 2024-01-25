function longestCommonSubsequence(text1: string, text2: string): number {
    // Allows the algorithm to assume which string is longer
    if (text1.length > text2.length) {
        return helper(text1, text2)
    }
    return helper(text2, text1)
}

function helper(text1: string, text2: string):number {
    const len1 = text1.length
    const len2 = text2.length

    // 2D array to store longest subsequence so far
    // i-index uses module so we only need 2 slots in one dimension
    const C = Array.from({ length: 2 }, () => Array(len2 + 1).fill(0));

    for (let i = 1; i<= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i-1] == text2[j-1]) {
                // Get diagonal (top-left) value + 1
                C[i%2][j] = C[(i-1)%2][j-1] + 1
            } else {
                // Max between top, left and top-left.
                C[i%2][j] = Math.max(
                    C[(i-1)%2][j-1],
                    C[(i-1)%2][j], 
                    C[i%2][j-1]
                )
            }
        }
    }

    return C[len1%2][len2]
}
