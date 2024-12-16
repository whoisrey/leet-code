/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < pivot) {
            arr1.push(nums[i]);
        } else if (nums[i] === pivot) {
            arr2.push(nums[i]);
        } else {
            arr3.push(nums[i]);
        }
    }
    
    return [...arr1, ...arr2, ...arr3];
};