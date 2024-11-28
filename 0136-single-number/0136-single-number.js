/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    
    const temp = {};
    
    for (const i of nums) {
        if (!temp[i]) {
            temp[i] = 1;
        } else {
            temp[i]++;
        }
    }
    
    
    for (const i in temp) {
        if (temp[i] === 1) return Number(i);
    }
};