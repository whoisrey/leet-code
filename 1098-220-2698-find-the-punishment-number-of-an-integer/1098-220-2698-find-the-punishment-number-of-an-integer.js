/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    const arr = [1, 9, 10, 36, 45, 55, 82, 91, 99, 100, 235, 297, 369, 370, 379, 414, 657, 675, 703, 756, 792, 909, 918, 945, 964, 990, 991, 999, 1000];
    let answer = 0;

    for (const num of arr) {
        if (num <= n) {
            answer += Math.pow(num, 2) ;
        } else {
            break;
        }
    }

    return answer;
};