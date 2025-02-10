/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = [];
    
    for (const character of s) {
        if (!isNaN(character)) {
            if (stack.length) stack.pop();
        } else {
            stack.push(character);
        }
    }
    
    return stack.join("");
};