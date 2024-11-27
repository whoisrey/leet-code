/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let firstPointer = 0;
    let secondPointer = n - 1;
    let index = m + n - 1;
    
    while (index >= m) {
        nums1[index] = nums2[secondPointer];
        index--;
        secondPointer--;
    }
    
    nums1.sort((a, b) => a - b);
};
