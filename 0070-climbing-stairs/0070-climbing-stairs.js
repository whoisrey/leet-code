/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    
    let firstPrev = 1;
    let secondPrev = 1;
    let answer = 0;
    
    for (let i = 2; i <= n; i++) {
        answer = firstPrev + secondPrev;
        firstPrev = secondPrev;
        secondPrev = answer;
    }
    
    return answer;
};
