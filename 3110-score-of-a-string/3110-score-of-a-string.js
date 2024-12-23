/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let answer = 0;
    
    for (let i = 0; i < s.length - 1; i++) {
        answer += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    
    return answer;
};