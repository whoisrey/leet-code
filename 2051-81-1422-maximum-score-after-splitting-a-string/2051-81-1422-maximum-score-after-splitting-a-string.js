/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let answer = 0;
    let zero = 0;
    let one = 0;

    for (const i of s) {
        if (i === "1") one++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") zero++;
        if (s[i] === "1") one--;

        answer = Math.max(answer, zero + one);
    }

    return answer;

};