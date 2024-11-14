/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let answer = 0;
    for (const operation of operations) {
        if (operation.includes("+")) {
            answer += 1;
        } else {
            answer -= 1;
        }
    }
    return answer;
};