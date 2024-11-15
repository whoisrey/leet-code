/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let isRemoved = false;
    
    for (let i = nums.length - 1; 0 < i; i--) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1)
            // isRemoved = true;
        }
    }
    
    // if (isRemoved) {
    //     removeDuplicates(nums);
    // }
    
    return nums.length;
};