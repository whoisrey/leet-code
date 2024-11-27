/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n === 0) return m;
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    } else {
        const temp = [];
        
        
        for (const i of nums1) {
            if (i !== 0) temp.push(i);
        }
        
        for (const i of nums2) {
            if (i !== 0) temp.push(i);
        }
        
        const rest = m + n - temp.length;
        
        for (let i = 0; i < rest; i++) {
            temp.push(0);
        }
        
        temp.sort((a, b) => a - b);
        
        for (let i = 0; i < nums1.length; i++) {
            nums1[i] = temp[i];
        }
    }
    
    
    
};
