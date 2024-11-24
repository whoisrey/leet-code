/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const answer = [1, 1];
    
    for (let i = 2; i <= n; i++) {
        if (2 <= i) {
            answer.push(answer[i - 2] + answer[i - 1]);
        }
    }
    
    return answer[n]
};