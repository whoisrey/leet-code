/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const answer = [];
    
    for (const num of nums) {
        if (num < pivot) answer.push(num);
    }
    
    for (const num of nums) {
        if (num === pivot) answer.push(num);
    }
    
    for (const num of nums) {
        if (num > pivot) answer.push(num);
    }
    
    return answer;
};