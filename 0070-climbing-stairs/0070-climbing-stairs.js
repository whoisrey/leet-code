/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let firstPrev = 1;
    let secondPrev = 1;
    let answer = 0;
    
    for (let i = 2; i <= n; i++) {
        answer = firstPrev + secondPrev;
        firstPrev = secondPrev;
        secondPrev = answer;
    }
    
    return n !== 1 ? answer : 1;
};
