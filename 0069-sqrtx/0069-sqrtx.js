/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 1) return 1;
    
    let answer = 0;
    for (let i = 0; i <= x; i++) {
        if (i * i > x) {
            answer = i - 1; 
            break;
        }
    }
    
    return answer;
};