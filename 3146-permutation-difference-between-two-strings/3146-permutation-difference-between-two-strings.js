/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    const firstHash = {};
    const secondHash = {};
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        firstHash[s[i]] = i;
        secondHash[t[i]] = i;
    }
    
    
    for (let i = 0; i < s.length; i++) {        
        answer += Math.abs(firstHash[s[i]] - secondHash[s[i]]);
    }
    
    return answer;
};