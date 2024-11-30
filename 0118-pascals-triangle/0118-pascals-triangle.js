/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let count = 1;
    const answer = [[1]];
    
    while (count < numRows) {
        answer.push(makeArray(answer[count - 1], count));
        count++;
    }
    
    function makeArray(arr, n) {
        const array = [];
        let count = 0;
        
        while (count <= n) {
            if (count === 0 || count === n) {
                array[count] = 1;
            } else {
                array[count] = arr[count - 1] + arr[count];
            }
            
            count++;
        }
        
        return array;
    }
    
    return answer;
};