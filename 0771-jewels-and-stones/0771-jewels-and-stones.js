/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const hash = {};
    let answer = 0;
    
    for (const i of stones) {
        if (!hash[i]) {
           hash[i] = 1; 
        } else {
            hash[i]++;
        }
    }
    
    for (const i in hash) {
        if (jewels.includes(i)) {
            answer += hash[i];
        }
    }
    
    return answer;
};