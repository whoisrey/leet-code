/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const lastIndex = digits.length - 1;
    
    for (let i = lastIndex; 0 <= i; i--) {
        if (digits[i] === 9) {
            if (i === 0) {
                digits[i] = 0;
                digits.unshift(1);
                break;
            }
            
            digits[i] = 0;            
        } else {
            digits[i]++;
            break;
        }
    }
    
    return digits;
};