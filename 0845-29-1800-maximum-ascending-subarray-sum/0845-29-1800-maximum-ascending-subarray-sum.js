/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    const cache = [];
    let sum = 0;
    let pointer = 0;
    
    while (pointer < nums.length) {
        if (nums[pointer] < nums[pointer + 1]) {
            sum += nums[pointer];
        } else if (nums[pointer] > nums[pointer + 1] || !nums[pointer + 1] || nums[pointer] === nums[pointer + 1]) {
            sum += nums[pointer];
            cache.push(sum);
            sum = 0;
        } 
        
        pointer++;
    }
    
    return Math.max(...cache);
};
