/**
 * Faster solution (less memory access), only works for subarrays of size 3.
 * Complexity O(n) after the sort.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    const n = nums.length
    nums.sort((a, b) => a - b)
    let output = []
    for (let i=0; i<n; i++) {
        if (nums[i+2] - nums[i] > k || nums[i+2] - nums[i+1] > k || nums[i+1] > nums[i] > k) {
            return []
        }
        output.push([nums[i], nums[i+1], nums[i+2]])
        i += 2
    }
    return output
};

function greaterThanK(nums, i, k) {
    return nums[i+2] - nums[i] > k || nums[i+2] - nums[i+1] > k || nums[i+1] > nums[i] > k
}

/**
 * Preferred solution, generalizes to subarrays of size `s`.
 * Complexity O(n*s) after the sort.
 * For this example, `s` is constant, thus O(n).
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    const n = nums.length
    const s = 3
    nums.sort((a, b) => a - b)
    let output = []
    for (let i=0; i<n; i+=s) {
        let arr = nums.slice(i, i+s)
        if (Math.max(...arr) - Math.min(...arr) > k) {
            return []
        }
        output.push(arr)
    }
    return output
};
