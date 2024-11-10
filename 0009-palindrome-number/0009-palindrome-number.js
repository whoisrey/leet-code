/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    const string = x.toString();
    
    let left = 0;
    let right = string.length - 1;
    
    while (left < right) {
        if (string[left] !== string[right]) {
            
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
};