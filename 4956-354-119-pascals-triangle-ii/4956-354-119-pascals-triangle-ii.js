/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const answer = [1];
    let prev = 1;
    
    for (let i = 1; i <= rowIndex; i++) {
        let next = prev * (rowIndex - i + 1) / i;
        answer.push(next);
        prev = next;
    }

    return answer;
};