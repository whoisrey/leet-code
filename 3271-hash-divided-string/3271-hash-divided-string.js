/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    const array = [];
    const point = s.length / k;
    let count = 0;
    
    while (count < point) {
        let string = "";
        let sum = 0;
        for (let i = k * count; i < k * (count + 1); i++) {
            string += s[i];
        }
        
        for (let i = 0; i < string.length; i++) {
            sum += string.charCodeAt(i) - 97
        }
        
        array.push(sum);
        
        count++;
    }
    
    const arr = array.map((element) => String.fromCodePoint(element % 26 + 97));
    
    return arr.reduce((a, b) => a + b)
    // console.log(arr)
    // console.log(String.fromCodePoint(97))
    
//     for (let i = 0; i < s.length; i++) {
//         if (i < k) {
//             firstString += s[i];
//         } else {
//             secondString += s[i];
//         }
//     }
    
//     for (let i = 0; i < firstString.length; i++) {
//         firstSum += firstString.charCodeAt(i) - 97;
//     }
    
//     for (let i = 0; i < secondString.length; i++) {
//         secondSum += secondString.charCodeAt(i) - 97;
//     }
    
    
};