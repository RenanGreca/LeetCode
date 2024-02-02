/**
 * Slowest solution, comparing strings.
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let output = []
    const sequence = "123456789"
    for (low; low <= high; low++) {
        const s = low.toString()
        if (sequence.includes(s)) {
            output.push(low)
        }
    }
    return output
};

/**
 * General solution, computes sequential numbers between low and high.
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let output = []
    for (let i = 1; i<=9; i++) {
        let num = i
        let next = i + 1
        while (num <= high && next <= 9) {
            num = num*10 + next
            if (low <= num && num <= high) {
                output.push(num)
            }
            next += 1
        }
    }
    return output.sort((a,b) => a - b)
};

/**
 * Fastest solution, uses precomputed list of numbers.
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const arr = [
        12, 23, 34, 45, 56, 67, 78, 89,
        123, 234, 345, 456, 567, 678, 789,
        1234, 2345, 3456, 4567, 5678, 6789,
        12345, 23456, 34567, 45678, 56789,
        123456, 234567, 345678, 456789,
        1234567, 2345678, 3456789,
        12345678, 23456789,
        123456789
    ];
    return arr.filter(el => 
        low <= el && el <= high
    )
};
