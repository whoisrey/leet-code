/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let blackCount = 0;
    let answer = blocks.length;
    
    for (let i = 0; i < blocks.length; i++) {
        if (i - k >= 0 && blocks[i - k] === 'B') blackCount--;
        if (blocks[i] === 'B') blackCount++;
        
        answer = Math.min(answer, k - blackCount);
    }
    
    return answer;
};