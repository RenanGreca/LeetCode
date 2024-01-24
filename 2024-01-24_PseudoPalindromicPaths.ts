/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isEven(num: number) {
    return (num % 2) == 0
}

/**
 * If arr.length is even, then the number of instances of each value must be even.
 * Otherwise, *one value* may have an odd count.
 * @param {number[]} arr 1 <= arr[i] <= 9
 */
function hasPalindromePermutation (count: number[]): boolean {
    // One value should have an odd count
    return Object.values(count)
        .map(val => isEven(val))
        .filter(val => !val)
        .length <= 1
}

function findPaths(root: TreeNode, count: number[]): number {
    // const path = arr.concat(root.val)
    count[root.val] += 1
    let result = 0
    if (!root.left && !root.right) {   
        result = hasPalindromePermutation(count) ? 1 : 0
    }
    if (root.left) {
        result += findPaths(root.left, count)
    }
    if (root.right) {
        result += findPaths(root.right, count)
    }

    count[root.val] -= 1
    return result
}

function pseudoPalindromicPaths (root: TreeNode | null): number {
    let count = []
    for (let i=0; i<=10; i++) {
        count[i] = 0
    }
    return findPaths(root, count)
};
