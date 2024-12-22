/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const answer = [];
    let sum = 0;
    for (const i of nums) {
        sum += i;
        answer.push(sum);
    }
    
    return answer;
};