/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer = 0;
    
    while (pointer !== nums.length - 1) {
        if (nums[pointer] === nums[pointer + 1]) {
            nums.splice(pointer + 1, 1);
        } else {
            pointer++;
        }
    }
    
    return nums.length;
//     for (let i = nums.length - 1; 0 < i; i--) {
//         if (nums[i - 1] === nums[i]) {
//             nums.splice(i, 1);
//         } 
//     }
    
//     return nums.length;
};