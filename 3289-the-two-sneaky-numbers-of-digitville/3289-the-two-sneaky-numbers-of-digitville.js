/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const temp = new Set();
    const answer = [];
        
    while (nums.length) {
        const num = nums.pop();
      
        if (temp.has(num)) {
            answer.push(num);
        } else {
            temp.add(num);            
        }
    }
    
    return answer;
};