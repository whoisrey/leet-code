/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const temp = [];
    const answer = [];
        
    while (nums.length) {
        const num = nums.pop();
      
        if (temp.includes(num)) {
            answer.push(num);
        } else {
            temp.push(num);            
        }
    }
    
    return answer;
};