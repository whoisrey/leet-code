/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const result = [...nums];
    
    for (const element of nums) {
        result.push(element);
    }
    
    return result;
};