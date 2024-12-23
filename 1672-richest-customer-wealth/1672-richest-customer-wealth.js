/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let answer = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b);
        
        answer = Math.max(sum, answer);
    }
    
    return answer;
};