/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 1 || nums[i] % 3 === 2) {
            answer++;
        }
    }
    return answer;
};