/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let answer = 0;
    
//     for (let i = 0; i < prices.length -1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[j] - prices[i] > 0 && prices[j] - prices[i] > answer) {
//                 answer = prices[j] - prices[i];
//             } 
//         }
//     }
    
//     return answer;
    
    let answer = 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        answer = Math.max(answer, prices[i] - min);
    }
    
    return answer;
};