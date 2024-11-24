/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    
    while (aIndex >= 0 || bIndex >= 0 || carry) {
        let sum = carry;
        if (aIndex >= 0) {
            sum += parseInt(a[aIndex--]);
        }
        if (bIndex >= 0) {
            sum += parseInt(b[bIndex--]);
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    
    return result;
};