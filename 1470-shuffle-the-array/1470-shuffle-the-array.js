/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let pointer1 = 0;
    let pointer2 = nums.length / 2;
    const answer = [];
    
    while (pointer1 < nums.length / 2) {
        answer.push(nums[pointer1]);
        answer.push(nums[pointer2]);
        pointer1++;
        pointer2++;
    }
    
    return answer;
};