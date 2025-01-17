/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let count = 0;

    for (const num of nums) {
        if (hash[num]) {
            hash[num]++;
        } else {
            hash[num] = 1;
        }
    }

    for (const i in hash) {
        if (hash[i] > nums.length / 2) {
            count = Number(i);
        }
    }

    return count;
};