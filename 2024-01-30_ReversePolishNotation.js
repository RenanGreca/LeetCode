/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ~~(a / b)
    }
    for (let i = 0; i < tokens.length; i++) {
        if (operations[tokens[i]]) {
            const b = stack.pop()
            const a = stack.pop()
            stack.push(operations[tokens[i]](a, b))
        } else {
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop()
};
