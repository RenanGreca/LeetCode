/**
 * First solution, O(n^2)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = []
    for (let i = 0; i<temperatures.length; i++) {
        output.push(0)
        let count = 0
        for (let j=i+1; j<temperatures.length; j++) {
            count += 1
            if (temperatures[j] > temperatures[i]) {
                output[i] = count
                break
            }
        }
    }
    return output
};


/**
 * Second solution, O(n*70)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = Array(temperatures.length).fill(0)
    let memory = Array(70+1).fill(Infinity) // Stores the smallest index of each temperature
    for (let i = temperatures.length-1; i>=0; i--) {
        const temp = temperatures[i]-30

        // Checks the temperatures > temp to find a smaller index
        let smallest = 70
        for (let j = temp+1; j<70; j++) {
            if (memory[j] < memory[smallest]) {
                smallest = j
            }
        }

        // If no smaller index is found, result is 0
        if (memory[smallest] == Infinity || temp == 70) {
            output[i] = 0
        } else {
            output[i] = memory[smallest]-i
        }

        if (i < memory[temp]) {
            memory[temp] = i // store the smallest index of the temperature seen so far
        }
    }
    return output
};

function top(arr) {
    return arr[arr.length-1]
}

/**
 * Third solution, O(n*70). Conceptually same as before, using stack structure.
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = Array(temperatures.length).fill(0)
    let stack = Array()
    for (let i = temperatures.length-1; i>=0; i--) {
        while (stack.length && temperatures[i] >= temperatures[top(stack)]) {
            stack.pop()
        }
        if (stack.length) {
            output[i] = top(stack) - i
        }
        stack.push(i)
    }
    return output
};
