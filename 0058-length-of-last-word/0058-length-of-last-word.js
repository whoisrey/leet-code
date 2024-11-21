/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s.includes(" ")) return s.length;
    
    let lastIndex = 0;
    let firstIndex = 0;
    
    for (let i = s.length - 1; 0 <= i; i--) {
        if (s[i] !== " ") {
            lastIndex = i;
            break;
        }
    }
    
    for (let i = lastIndex; 0 <= i; i--) {
        if (s[i] === " ") {
            firstIndex = i + 1;
            break;
        }
    }
    
    return lastIndex + 1 - firstIndex;
};