/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const nums = String(num).split('').sort((a, b) => a - b);
    return Number(nums[0] + nums[2]) + Number(nums[1] + nums[3]);
};