/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanSymbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (romanSymbol[s[i]] < romanSymbol[s[i + 1]]) {
            answer -= romanSymbol[s[i]]
        } else {
            answer += romanSymbol[s[i]]
        }
    }
    
    return answer
};