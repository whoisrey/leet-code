/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = "";
    const cache = [];

    let start = 0;

    while (start < s.length) {
        for (let i = start; i < s.length; i++) {
            if (!answer.includes(s[i])) {
                answer += s[i];
            } else {
                break;
            }
        }
        cache.push(answer.length);
        start++;
        answer = "";
    }

    return s === "" ? 0 : Math.max(...cache);
};