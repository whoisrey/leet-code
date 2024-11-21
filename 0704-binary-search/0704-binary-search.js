/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const firstElement = nums[0];
    const lastElement = nums[nums.length - 1];
    const isNearFirst = firstElement - target < lastElement - target;
    const includeTarget = lastElement - target >= 0;
    let answer = -1;
    
    if (!includeTarget) return -1;
    
    if (isNearFirst) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                answer = i;
                break;
            } else if (nums[i] > target) {
                break;
            }
        }
    } else {
        for (let i = nums.length - 1; 0 <= i; i--) {
            if (nums[i] === target) {
                answer = nums.length - 1- i;
                break;
            } else if (nums[i] < target) {
                break;
            }
        }
    }
    
    return answer;
};