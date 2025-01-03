/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let answer = 0;
    let left = 0;
    let right = 0;
    
    for (const i of s) {
        if (i === "1") right++;
    }
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") left++;
        if (s[i] === "1") right--;
        
        answer = Math.max(answer, left + right);
    }
    
    return answer;
};