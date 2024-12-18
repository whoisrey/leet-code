/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    const point = s.length / k;
    let count = 0;
    let answer = "";
    
    while (count < point) {
        let string = "";
        let sum = 0;
        let str = "";
        for (let i = k * count; i < k * (count + 1); i++) {
            string += s[i];
        }
        
        for (let i = 0; i < string.length; i++) {
            sum += string.charCodeAt(i) - 97
        }
        
        
        str = String.fromCodePoint(sum % 26 + 97);
        answer += str
        
        count++;
    }
    
    return answer;
};