/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    for (const i of s) {
        if (i === "(" || i === "{" || i === "[") {
            stack.push(i);
        } else {
            if (
                i === ")" && stack[stack.length - 1] !== "(" ||
                i === "}" && stack[stack.length - 1] !== "{" ||
                i === "]" && stack[stack.length - 1] !== "["
            ) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    
    return !stack.length;
};