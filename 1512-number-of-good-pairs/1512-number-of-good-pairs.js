/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {    
    const hash = {};
    let answer = 0;
    
    for (const i of nums) {
        if(!hash[i]) {
            hash[i] = 1;
        } else {
            hash[i]++;
        }
    }
    
    console.log(hash)
    
    
    for (const i in hash) {
        if (hash[i] > 1) {
            answer += ((hash[i] - 1) * (hash[i]) / 2)
        }
    }
    
    return answer;
};