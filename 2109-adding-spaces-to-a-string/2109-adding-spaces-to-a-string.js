/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let answer = "";
    let pointer = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[pointer]) {
            answer += " ";
            answer += s[i];
            pointer++;
        } else {
            answer += s[i];
        }
    }
    
    return answer;
};