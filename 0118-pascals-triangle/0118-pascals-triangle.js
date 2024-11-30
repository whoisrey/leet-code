/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const answerArray = [];
    
    for (let i = 0; i < numRows; i++) {
        const elementArray = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i){
                elementArray.push(1);
            } else {
                elementArray.push(answerArray[i - 1][j - 1] + answerArray[i - 1][j]);
            }
        }
        answerArray.push(elementArray);
    }
    return answerArray;
};
