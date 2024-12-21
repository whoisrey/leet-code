/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    const hash = {};
    const answer = [];
    
    
    for (let i = 0; i < names.length; i++) {
        hash[heights[i]] = names[i];
    }
    
    heights.sort((a, b) => b - a);
    
    for (const i of heights) {
        answer.push(hash[i]);
    }
    
    return answer;
};