/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    let pointer = 0;
    const answer = [];
    
    function isPower(array) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i + 1] - array[i] !== 1 || array[i] === array[i + 1]) {
                return -1;
            }
        }
        return array[array.length - 1];
    }
    
    while (pointer < nums.length - k + 1) {
        const temp = nums.slice(pointer, pointer + k);
        answer.push(isPower(temp));
        pointer++;
    }
    
    return answer
};