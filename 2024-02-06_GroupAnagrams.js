/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sortedStrs = strs.map(str => {
        return str.split("").sort().join("")
    })

    let seen = []
    let result = []
    for (let i = 0; i<strs.length; i++) {
        if (seen.includes(i)) {
            continue
        }
        const indexes = indexesOf(sortedStrs, i)
        let subarr = []
        for (const j of indexes) {
            seen.push(j)
            subarr.push(strs[j])
        }
        result.push(subarr)
    }
    return result
};

function indexesOf(strs, i) {
    let indexes = []
    for (let j=0; j<strs.length; j++) {
        if (strs[j] == strs[i]) {
            indexes.push(j)
        }
    }
    return indexes
}
