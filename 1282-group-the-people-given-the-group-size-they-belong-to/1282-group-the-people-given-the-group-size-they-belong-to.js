/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const hash = {};
    const answer = [];
    
    for (let i = 0; i < groupSizes.length; i++) {        
        if (!hash[groupSizes[i]]) {
            hash[groupSizes[i]] = [i];
        } else {
            hash[groupSizes[i]].push(i);
        }
        
    }
    
    for (const i in hash) {
        let pointer = 0;
        while (pointer < hash[i].length) {
            answer.push(hash[i].slice(pointer, pointer + Number(i)));
            pointer += Number(i);
        }
        
    }
    
    return answer;
};