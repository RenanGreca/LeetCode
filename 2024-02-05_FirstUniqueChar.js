/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    for (let i=0; i<s.length; i++) {
        const replace = s.replaceAll(s[i], "")
        if (replace.length == s.length-1) {
            return i
        }
    }
    return -1
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {
        a: { count: 0, firstIndex: -1 },
        b: { count: 0, firstIndex: -1 },
        c: { count: 0, firstIndex: -1 },
        d: { count: 0, firstIndex: -1 },
        e: { count: 0, firstIndex: -1 },
        f: { count: 0, firstIndex: -1 },
        g: { count: 0, firstIndex: -1 },
        h: { count: 0, firstIndex: -1 },
        i: { count: 0, firstIndex: -1 },
        j: { count: 0, firstIndex: -1 },
        k: { count: 0, firstIndex: -1 },
        l: { count: 0, firstIndex: -1 },
        m: { count: 0, firstIndex: -1 },
        n: { count: 0, firstIndex: -1 },
        o: { count: 0, firstIndex: -1 },
        p: { count: 0, firstIndex: -1 },
        q: { count: 0, firstIndex: -1 },
        r: { count: 0, firstIndex: -1 },
        s: { count: 0, firstIndex: -1 },
        t: { count: 0, firstIndex: -1 },
        u: { count: 0, firstIndex: -1 },
        v: { count: 0, firstIndex: -1 },
        w: { count: 0, firstIndex: -1 },
        x: { count: 0, firstIndex: -1 },
        y: { count: 0, firstIndex: -1 },
        z: { count: 0, firstIndex: -1 }
    }
    for (let i=0; i<s.length; i++) {
        map[s[i]].count += 1
        if (map[s[i]].firstIndex == -1) {
            map[s[i]].firstIndex = i
        }
    }
    const values = Object.values(map)
    const filter = values.filter(el => el.count == 1)
    const sort = filter.sort((a, b) => a.firstIndex - b.firstIndex)
    if (sort.length) {
        return sort[0].firstIndex
    }
    return -1
};
