/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    
    let index = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index++] = nums[i];
        }
    }
    
    while (index < nums.length) {
        nums[index++] = 0;
    }
    
    return nums;
};